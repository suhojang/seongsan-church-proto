// 맨 위로 버튼 — 모든 시안 공용. </body> 바로 앞에서 불러온다(defer).
// 한 화면쯤 내려가면 오른쪽 아래에 천천히 나타나고, 누르면 맨 위로 올라간 뒤 머리말 첫 링크로 초점을 옮긴다.
// 색은 각 시안의 값(--paper 또는 --white, --ink, --line)을 따른다. 모양은 시안에서 --to-top-radius(기본 원), --to-top-hover 로 바꾼다.
(function () {
  'use strict';
  if (document.querySelector('.to-top')) return;
  var t = window.I18N && I18N.t ? I18N.t : function (ko) { return ko; };

  var css = [
    '.to-top{position:fixed;right:max(1.25rem,env(safe-area-inset-right));bottom:max(1.25rem,calc(env(safe-area-inset-bottom) + 0.75rem));z-index:90;',
    'display:grid;place-items:center;width:2.875rem;height:2.875rem;padding:0;margin:0;',
    'border:1px solid var(--line,#DAD5CE);border-radius:var(--to-top-radius,50%);',
    'background:var(--paper,var(--white,#FFFFFF));background:color-mix(in srgb,var(--paper,var(--white,#FFFFFF)) 86%,transparent);',
    '-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);color:var(--ink,#222222);cursor:pointer;',
    'opacity:0;visibility:hidden;transform:translateY(0.5rem);',
    'transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1),visibility 0s linear .6s,border-color .3s,color .3s}',
    '.to-top.is-on{opacity:1;visibility:visible;transform:none;transition-delay:0s}',
    '.to-top:hover{border-color:var(--to-top-hover,var(--ink,#222222));color:var(--to-top-hover,var(--ink,#222222))}',
    '.to-top:focus-visible{outline:2px solid var(--ink,#222222);outline-offset:3px}',
    '.to-top svg{display:block;width:1.125rem;height:1.125rem}',
    '@media (min-width:64rem){.to-top{right:2rem;bottom:2rem;width:3.25rem;height:3.25rem}}',
    '@media (prefers-reduced-motion:reduce){.to-top{transition:none}}',
    '@media print{.to-top{display:none}}'
  ].join('');
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var b = document.createElement('button');
  b.type = 'button';
  b.className = 'to-top';
  b.setAttribute('aria-label', t('맨 위로', 'Back to top'));
  b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.5V5M5.75 11.25 12 5l6.25 6.25" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.appendChild(b);

  var reduce = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  b.addEventListener('click', function (e) {
    window.scrollTo({ top: 0, behavior: reduce.matches ? 'instant' : 'smooth' });
    // 키보드로 눌렀을 때만(e.detail === 0) 초점을 머리말 로고 링크로 옮긴다.
    // 마우스로 누를 때 옮기면 '본문 바로가기' 같은 링크가 화면에 드러나므로 옮기지 않는다.
    if (e.detail !== 0) return;
    var picks = ['.site-header .brand', '.masthead .brand', 'header a[href]:not(.skip)'], first = null;
    for (var i = 0; i < picks.length && !first; i++) first = document.querySelector(picks[i]);
    if (first) { try { first.focus({ preventScroll: true }); } catch (err) { first.focus(); } }
  });

  // 스크롤마다 위치만 비교하고, 보임 상태가 바뀔 때만 클래스를 바꾼다
  var on = false;
  function update() {
    var next = window.scrollY > window.innerHeight * 0.9;
    if (next !== on) { on = next; b.classList.toggle('is-on', on); }
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
