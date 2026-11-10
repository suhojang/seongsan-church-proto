// 첫 화면 배경 — WebP 장면을 차례로 겹쳐 넘기는 프레임 애니메이션. 모든 시안 공용.
//
// 마크업
//   <div class="hero-frames" id="hero-frames" aria-hidden="true" data-hold="6000" data-fade="1800">
//     <img src="media/hero/a.webp" alt="" data-from="scale(1.03)" data-to="translate(-2%, 1%) scale(1.1)">
//     <img src="media/hero/b.webp" alt="">
//   </div>
//   - 장면(img)은 몇 장이든 된다. 순서는 마크업 순서이고, 화면에 담을 부분은 img의 object-position으로 맞춘다.
//   - data-from / data-to: 장면이 머무는 동안의 움직임(transform). 없으면 아래 기본 움직임을 차례로 쓴다.
//     translate는 (scale − 1) / 2 이내여야 가장자리가 비지 않는다. 예) scale(1.1)이면 ±5%까지.
//   - data-hold: 한 장면이 머무는 시간(ms), data-fade: 다음 장면이 위로 겹쳐 떠오르는 시간(ms).
//
// 동작
//   움직임(transform)과 전환(opacity)을 Web Animations API에 맡겨 브라우저 합성 단계에서 화면 주사율대로 그린다.
//   영상처럼 프레임이 빠지거나 반복 지점에서 멈칫하지 않고, 마지막 장면도 첫 장면으로 겹쳐 넘어간다.
//   다음 장면은 미리 디코딩해 두고, 불러오지 못한 장면은 건너뛴다. 화면 밖에 있으면 쉬었다가 돌아오면 이어 간다.
//
// 쓰는 법
//   const hero = new HeroFrames(document.getElementById('hero-frames'));
//   hero.play(); hero.pause();
//   <video>와 같은 모양(paused, play() → Promise, pause(), play·pause 이벤트)이라 영상 버튼 코드를 그대로 쓴다.
//   스크립트가 없거나, 움직임 줄이기 설정이라 play()를 부르지 않으면 CSS가 첫 장면만 보여 준다.
(function () {
  'use strict';

  // data-from / data-to가 없을 때 장면 순서대로 쓰는 움직임
  const PRESETS = [
    ['scale(1.03)', 'translate(-2%, 1%) scale(1.1)'],                       // 천천히 다가가기
    ['translate(2.5%, 0) scale(1.08)', 'translate(-2.5%, 0) scale(1.08)'],  // 오른쪽으로 흐르기
    ['translate(0, 2%) scale(1.1)', 'scale(1.03)'],                         // 천천히 물러나기
    ['translate(-2.5%, 0) scale(1.08)', 'translate(2.5%, 0) scale(1.08)'],  // 왼쪽으로 흐르기
  ];

  const SUPPORTED = 'animate' in Element.prototype && 'getAnimations' in Element.prototype &&
    typeof Animation === 'function' && typeof KeyframeEffect === 'function';

  class HeroFrames extends EventTarget {
    constructor(root) {
      super();
      this.root = root;
      this.frames = [...root.querySelectorAll('img')];
      this.hold = +root.dataset.hold || 6000;
      this.fade = +root.dataset.fade || 1800;
      this.paused = true;
      this.index = -1;          // 지금 보이는 장면, 아직 시작 전이면 -1
      this.offscreen = false;   // 화면 밖이라 잠시 쉬는 중(paused와 별개라 버튼 상태는 그대로)
      this.live = new Set();    // 이 플레이어가 만든, 아직 끝나지 않은 애니메이션
      if (SUPPORTED && 'IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => this._rest(!entry.isIntersecting)).observe(root);
      }
    }

    play() {
      if (!SUPPORTED || !this.frames.length) return Promise.reject(new Error('HeroFrames: 이 브라우저에서는 움직이지 않습니다'));
      if (!this.paused) return Promise.resolve();
      this.paused = false;
      if (this.index < 0) this._start();
      else if (!this.offscreen) this._resume();
      this.dispatchEvent(new Event('play'));
      return Promise.resolve();
    }

    pause() {
      if (this.paused) return;
      this.paused = true;
      this._halt();
      this.dispatchEvent(new Event('pause'));
    }

    // 끝난 애니메이션을 play()하면 처음부터 다시 돌기 때문에, 진행 중인 것만 멈추고 멈춘 것만 잇는다
    _halt() { this.live.forEach(a => { if (a.playState === 'running') a.pause(); }); }
    _resume() { this.live.forEach(a => { if (a.playState === 'paused') a.play(); }); }

    _rest(offscreen) {
      this.offscreen = offscreen;
      if (this.paused || this.index < 0) return;
      if (offscreen) this._halt(); else this._resume();
    }

    // el이 없으면 시간만 재는 시계 애니메이션을 만든다(멈추고 이을 때 장면과 함께 멈춘다)
    _run(el, keyframes, options) {
      let a;
      if (el) a = el.animate(keyframes, options);
      else { a = new Animation(new KeyframeEffect(null, keyframes, options), document.timeline); a.play(); }
      this.live.add(a);
      const done = () => this.live.delete(a);
      a.finished.then(done, done);
      if (this.paused || this.offscreen) a.pause();
      return a;
    }

    _path(k) {
      const img = this.frames[k];
      const preset = PRESETS[k % PRESETS.length];
      return [img.dataset.from || preset[0], img.dataset.to || preset[1]];
    }

    _start() {
      this.root.classList.add('is-live');
      if (this.frames.length === 1) {
        // 한 장뿐이면 같은 길을 천천히 오간다
        const [from, to] = this._path(0);
        this.index = 0;
        this._run(this.frames[0], { transform: [from, to], opacity: [1, 1] },
          { duration: this.hold + this.fade, easing: 'ease-in-out', direction: 'alternate', iterations: Infinity });
        return;
      }
      this._enter(0, true);
    }

    _enter(k, instant) {
      const img = this.frames[k];
      const prev = this.index >= 0 ? this.frames[this.index] : null;
      this.index = k;
      img.getAnimations().forEach(a => a.cancel());
      // 들어오는 장면을 맨 위에, 나가는 장면을 그 바로 아래에 둔다
      this.frames.forEach(f => { f.style.zIndex = f === img ? 2 : f === prev ? 1 : ''; });

      // 머무는 동안 + 다음 장면이 덮는 동안 계속 움직여야 전환 중에 멈칫하지 않는다
      const [from, to] = this._path(k);
      this._run(img, { transform: [from, to] }, { duration: this.hold + this.fade, easing: 'linear', fill: 'forwards' });
      const show = this._run(img, { opacity: instant ? [1, 1] : [0, 1] },
        { duration: instant ? 1 : this.fade, easing: 'ease-in-out', fill: 'forwards' });

      // 다 덮이면 나간 장면의 애니메이션을 지워 레이어를 줄인다(CSS가 다시 감춘다)
      if (prev && prev !== img) {
        show.finished.then(() => { if (this.frames[this.index] === img) prev.getAnimations().forEach(a => a.cancel()); }, () => {});
      }

      const clock = this._run(null, null, { duration: this.hold });
      clock.finished.then(() => this._next(), () => {});

      // 다음 장면을 머무는 동안 미리 디코딩해 둔다
      const next = this.frames[(k + 1) % this.frames.length];
      if (next !== img && next.decode) next.decode().catch(() => {});
    }

    _next() {
      const n = this.frames.length;
      let k = this.index;
      for (let i = 0; i < n; i++) {
        k = (k + 1) % n;
        if (!this.frames[k].hasAttribute('data-broken')) break;
      }
      if (k === this.index) return; // 넘길 장면이 없으면 지금 장면에 머문다
      const img = this.frames[k];
      const go = () => this._enter(k, false);
      if (img.complete && img.naturalWidth) { go(); return; }
      // 아직 내려받는 중이면 다 받을 때까지 지금 장면을 보여 주고, 받지 못하면 건너뛴다
      img.decode().then(go, () => { img.setAttribute('data-broken', ''); this._next(); });
    }
  }

  window.HeroFrames = HeroFrames;
})();
