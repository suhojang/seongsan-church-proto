// 계절 효과 — 모든 시안 공용. </body> 바로 앞에서 불러온다(defer).
// 서울 시각의 달로 계절을 고른다: 겨울(12·1·2월) 눈, 봄(3월 매화·4월 벚꽃·5월 옅은 꽃잎), 여름(6~8월) 햇살 알갱이,
// 가을(9월 은행잎·10월 단풍·11월 갈색 잎).
// 화면 전체에 내리되 가장자리에서 가장 또렷하고 본문 가운데는 조금 옅게(70%) 둔다. 개수는 화면 넓이에 맞춘다.
// 화면 위에 얹지만 클릭을 막지 않고(pointer-events: none), 머리말(100)·맨 위로 버튼(90) 아래(80)에 둔다.
// 움직임 줄이기 설정이면 돌리지 않고, 탭이 가려지면 멈춘다.
// 미리보기: 주소에 ?season=winter|spring|summer|autumn 또는 ?month=1~12 (이 탭에서 다른 페이지로 가도 유지, ?season=auto 로 해제)
(function () {
  'use strict';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  // ---- 달 고르기 ----
  var KEY = 'season-preview';
  var q = location.search;
  var mSeason = /[?&]season=(winter|spring|summer|autumn|auto)(?=&|$)/.exec(q);
  var mMonth = /[?&]month=(1[0-2]|[1-9])(?=&|$)/.exec(q);
  var store = null;
  try { store = window.sessionStorage; } catch (e) {}
  var pick = null;
  if (mSeason && mSeason[1] === 'auto') { try { store && store.removeItem(KEY); } catch (e) {} }
  else if (mSeason || mMonth) { pick = mMonth ? 'm' + mMonth[1] : mSeason[1]; try { store && store.setItem(KEY, pick); } catch (e) {} }
  else { try { pick = store && store.getItem(KEY); } catch (e) {} }

  var month;
  if (pick && pick.charAt(0) === 'm') month = +pick.slice(1);
  else if (pick) month = { winter: 1, spring: 4, summer: 7, autumn: 10 }[pick];
  if (!month) {
    try { month = +new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Seoul', month: 'numeric' }).format(new Date()); }
    catch (e) { month = new Date().getMonth() + 1; }
  }

  // ---- 달마다 모양·색·개수(1440×900 화면 기준) ----
  var MONTHS = {
    12: { kind: 'snow', n: 90 }, 1: { kind: 'snow', n: 100 }, 2: { kind: 'snow', n: 75 },
    3: { kind: 'petal', n: 40, colors: ['#F0D4D8', '#E8C2C9', '#E2B3BC'] },                 // 매화: 희고 연분홍
    4: { kind: 'petal', n: 50, colors: ['#F2B0C0', '#E996AB', '#F4BFCC', '#E28BA3'] },      // 벚꽃
    5: { kind: 'petal', n: 34, colors: ['#E8CDB6', '#E3C1CA', '#DCC6AE'] },                 // 늦봄: 옅은 꽃잎
    6: { kind: 'light', n: 32 }, 7: { kind: 'light', n: 34 }, 8: { kind: 'light', n: 32 },
    9: { kind: 'leaf', n: 30, colors: ['#E2BC4B', '#D8B13D', '#C9B45A', '#B9AF5B'] },       // 은행잎
    10: { kind: 'leaf', n: 36, colors: ['#C9553D', '#D9822B', '#B8432F', '#E0A03A'] },      // 단풍
    11: { kind: 'leaf', n: 32, colors: ['#A9773F', '#8C6239', '#B58A4E', '#9A5B36'] }       // 늦가을 갈색 잎
  };
  var conf = MONTHS[month];
  if (!conf) return;

  // ---- 캔버스 ----
  var cv = document.createElement('canvas');
  cv.className = 'season-fx';
  cv.setAttribute('aria-hidden', 'true');
  var st = document.createElement('style');
  st.textContent = '.season-fx{position:fixed;inset:0;width:100%;height:100%;z-index:80;pointer-events:none}@media print{.season-fx{display:none}}';
  document.head.appendChild(st);
  document.body.appendChild(cv);
  var ctx = cv.getContext('2d');
  if (!ctx) return;
  var W = 0, H = 0, DPR = 1;

  // ---- 미리 그려 둔 조각(스프라이트) ----
  function sprite(size, draw) {
    var c = document.createElement('canvas');
    c.width = c.height = Math.ceil(size * 2);
    var g = c.getContext('2d');
    g.scale(2, 2);
    draw(g, size);
    return c;
  }
  // 눈은 두 겹으로 그린다: 바깥 흰 테두리는 어두운 사진 위에서, 안쪽 청회색은 흰 바탕 위에서 보인다.
  function snowSprite() {
    return sprite(16, function (g) {
      var h = g.createRadialGradient(8, 8, 3.5, 8, 8, 8);
      h.addColorStop(0, 'rgba(255,255,255,0.95)'); h.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = h; g.beginPath(); g.arc(8, 8, 8, 0, Math.PI * 2); g.fill();
      var r = g.createRadialGradient(8, 8, 0, 8, 8, 5.5);
      r.addColorStop(0, 'rgba(146,170,208,1)');
      r.addColorStop(0.6, 'rgba(128,154,198,0.95)');
      r.addColorStop(1, 'rgba(128,154,198,0)');
      g.fillStyle = r; g.beginPath(); g.arc(8, 8, 5.5, 0, Math.PI * 2); g.fill();
    });
  }
  // 여섯 갈래 눈송이: 모양만으로 눈인 줄 알 수 있게
  function crystalSprite() {
    return sprite(32, function (g) {
      g.translate(16, 16);
      g.lineCap = 'round';
      function arms() {
        g.beginPath();
        for (var i = 0; i < 6; i++) {
          var a = i * Math.PI / 3, c = Math.cos(a), sn = Math.sin(a);
          g.moveTo(0, 0); g.lineTo(c * 13, sn * 13);
          var br = [[0.48, 5], [0.76, 3.4]];
          for (var j = 0; j < br.length; j++) {
            var bx = c * 13 * br[j][0], by = sn * 13 * br[j][0];
            for (var d = -1; d <= 1; d += 2) {
              var ba = a + d * Math.PI / 3;
              g.moveTo(bx, by); g.lineTo(bx + Math.cos(ba) * br[j][1], by + Math.sin(ba) * br[j][1]);
            }
          }
        }
      }
      arms(); g.strokeStyle = 'rgba(255,255,255,0.95)'; g.lineWidth = 4.6; g.stroke();
      arms(); g.strokeStyle = 'rgba(112,141,188,1)'; g.lineWidth = 2.2; g.stroke();
    });
  }
  function petalSprite(color) {
    return sprite(20, function (g) {
      g.translate(10, 10);
      var r = g.createLinearGradient(-8, 0, 8, 0);
      r.addColorStop(0, color); r.addColorStop(1, 'rgba(255,255,255,0.9)');
      g.fillStyle = r;
      g.beginPath();                                  // 끝이 살짝 파인 꽃잎
      g.moveTo(-8, 0);
      g.bezierCurveTo(-5, -6, 4, -6, 8, -1.2);
      g.lineTo(6.2, 0);
      g.lineTo(8, 1.2);
      g.bezierCurveTo(4, 6, -5, 6, -8, 0);
      g.fill();
      g.strokeStyle = 'rgba(190,120,135,0.18)'; g.lineWidth = 0.6; g.stroke();
    });
  }
  function leafSprite(color) {
    return sprite(24, function (g) {
      g.translate(12, 12);
      g.fillStyle = color;
      g.beginPath();                                  // 잎몸 + 잎자루
      g.moveTo(-10, 0);
      g.quadraticCurveTo(-2, -8, 10, 0);
      g.quadraticCurveTo(-2, 8, -10, 0);
      g.fill();
      g.strokeStyle = 'rgba(70,45,25,0.28)'; g.lineWidth = 0.7;
      g.beginPath(); g.moveTo(-11.5, 0); g.lineTo(8, 0); g.stroke();
    });
  }
  function lightSprite() {
    return sprite(32, function (g) {
      var r = g.createRadialGradient(16, 16, 0, 16, 16, 16);
      r.addColorStop(0, 'rgba(232,184,80,1)');
      r.addColorStop(0.5, 'rgba(228,180,84,0.6)');
      r.addColorStop(1, 'rgba(232,190,104,0)');
      g.fillStyle = r; g.beginPath(); g.arc(16, 16, 16, 0, Math.PI * 2); g.fill();
    });
  }
  var SPR = [];
  var CRYSTAL = conf.kind === 'snow' ? crystalSprite() : null;
  if (conf.kind === 'snow') SPR = [snowSprite()];
  if (conf.kind === 'light') SPR = [lightSprite()];
  if (conf.kind === 'petal') SPR = conf.colors.map(petalSprite);
  if (conf.kind === 'leaf') SPR = conf.colors.map(leafSprite);

  // ---- 조각 ----
  var rnd = function (a, b) { return a + Math.random() * (b - a); };
  var parts = [];
  function make(p, fresh) {
    var k = conf.kind;
    p.img = SPR[(Math.random() * SPR.length) | 0];
    p.x = rnd(0, W);
    p.ph = rnd(0, Math.PI * 2);
    p.rot = rnd(0, Math.PI * 2);
    p.vr = 0; p.flip = k === 'petal' || k === 'leaf';
    if (k === 'snow') {
      p.s = rnd(3.5, 9); p.vy = 0.2 + p.s * 0.07; p.vx = rnd(-0.08, 0.08); p.sw = rnd(0.25, 0.7); p.a = rnd(0.9, 1);
      if (Math.random() < 0.3) { p.img = CRYSTAL; p.s = rnd(8, 14); p.vy = rnd(0.45, 0.8); p.vr = rnd(-0.012, 0.012); }
    }
    if (k === 'petal') { p.s = rnd(12, 19); p.vy = rnd(0.35, 0.7); p.vx = rnd(0.25, 0.6); p.sw = rnd(0.4, 1.0); p.vr = rnd(-0.02, 0.02); p.a = rnd(0.9, 1); }
    if (k === 'leaf') { p.s = rnd(14, 22); p.vy = rnd(0.45, 0.85); p.vx = rnd(-0.15, 0.25); p.sw = rnd(0.6, 1.4); p.vr = rnd(-0.025, 0.025); p.a = rnd(0.9, 1); }
    if (k === 'light') { p.s = rnd(14, 34); p.vy = -rnd(0.1, 0.26); p.vx = rnd(-0.08, 0.08); p.sw = rnd(0.2, 0.5); p.a = rnd(0.7, 1); }
    if (k === 'light') p.y = fresh ? rnd(0, H) : H + p.s;
    else p.y = fresh ? rnd(-H * 0.1, H) : -p.s * 2;
    return p;
  }
  // 가장자리에서 가장 또렷하고 가운데(본문)는 조금 옅게
  function edge(x) {
    var d = Math.abs(x - W / 2) / (W / 2);
    var narrow = W < 640;
    var lo = narrow ? 0.25 : 0.15, hi = narrow ? 0.85 : 0.65, base = narrow ? 0.75 : 0.7;
    var t = Math.min(1, Math.max(0, (d - lo) / (hi - lo)));
    return base + (1 - base) * t * t * (3 - 2 * t);
  }

  function resize() {
    DPR = Math.min(2, window.devicePixelRatio || 1);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    // 화면 넓이에 비례(휴대폰도 PC와 비슷한 촘촘함이 되게 최소 0.3)
    var area = Math.min(1.6, Math.max(0.3, (W * H) / (1440 * 900)));
    var want = Math.round(conf.n * area);
    while (parts.length < want) parts.push(make({}, true));
    parts.length = want;
  }

  var last = 0, raf = 0, t = 0;
  function frame(now) {
    raf = requestAnimationFrame(frame);
    var dt = last ? Math.min(3, (now - last) / 16.67) : 1;   // 60fps 기준 한 칸
    last = now; t += dt;
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      p.x += (p.vx + Math.sin(t * 0.012 * p.sw + p.ph) * 0.35 * p.sw) * dt;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
      var off = p.s * 2;
      if (p.y > H + off || p.y < -off * 3 || p.x < -off * 2 || p.x > W + off * 2) { make(p, false); continue; }
      var a = p.a * edge(p.x);
      if (conf.kind === 'light') a *= 0.65 + 0.35 * Math.sin(t * 0.02 + p.ph);   // 은은하게 반짝임
      if (a < 0.02) continue;
      ctx.globalAlpha = a;
      if (!p.vr && !p.flip) {
        ctx.drawImage(p.img, p.x - p.s, p.y - p.s, p.s * 2, p.s * 2);
      } else {
        // 눈송이는 천천히 돌고, 꽃잎·잎은 돌면서 뒤집힌다(세로 폭이 줄었다 늘었다)
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        if (p.flip) ctx.scale(1, 0.35 + 0.65 * Math.abs(Math.cos(t * 0.03 * p.sw + p.ph)));
        ctx.drawImage(p.img, -p.s, -p.s, p.s * 2, p.s * 2);
        ctx.restore();
      }
    }
    ctx.globalAlpha = 1;
  }

  function start() { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
  resize();
  start();
})();
