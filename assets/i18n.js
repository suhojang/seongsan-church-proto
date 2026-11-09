// 한/영 전환 — 모든 페이지 공용. <head> 맨 앞에서 불러온다(동기).
// 언어 결정: 주소의 ?lang=en|ko → 저장된 선택(localStorage) → 기본 ko
// 정적 문구: 한국어는 HTML에 그대로 두고 영어는 data-en(내용, HTML 허용)과
//            data-en-aria-label · data-en-alt · data-en-title · data-en-content · data-en-placeholder 에 적는다.
// 한 언어에서만 보일 요소: data-only="ko" | data-only="en"
// 동적 문구: I18N.t('한국어', 'English'), I18N.pick(item, 'title'), I18N.date(…), I18N.time('18:00')
// 언어 전환 링크: <a data-lang-switch> — 같은 페이지·같은 주소 값으로 다른 언어를 연다.
// 로컬 파일(file://)에서도 동작하도록 history API 대신 링크에 ?lang=en 을 붙인다.
(function () {
  'use strict';
  var KEY = 'site-lang';
  var m = /[?&]lang=(en|ko)(?=&|$)/.exec(location.search);
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var lang = m ? m[1] : (saved === 'en' ? 'en' : 'ko');
  if (m) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
  var en = lang === 'en';
  var root = document.documentElement;
  root.lang = lang;
  root.classList.add('lang-' + lang);

  var css = 'html.lang-ko [data-only="en"],html.lang-en [data-only="ko"]{display:none!important}';
  // 영어로 바꾸는 동안 한국어가 잠깐 비치지 않게 가린다(스크립트가 실패해도 1.5초 뒤 보인다)
  if (en) {
    css += 'html.i18n-wait body{visibility:hidden}';
    root.classList.add('i18n-wait');
    setTimeout(function () { root.classList.remove('i18n-wait'); }, 1500);
  }
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // 주소에서 lang 값을 지우거나 바꾼다(해시는 유지)
  function withLang(href, l) {
    var hash = '';
    var i = href.indexOf('#');
    if (i >= 0) { hash = href.slice(i); href = href.slice(0, i); }
    var q = href.indexOf('?');
    var path = q >= 0 ? href.slice(0, q) : href;
    var params = (q >= 0 ? href.slice(q + 1).split('&') : []).filter(function (p) { return p && !/^lang=/.test(p); });
    if (l) params.push('lang=' + l);
    return path + (params.length ? '?' + params.join('&') : '') + hash;
  }

  var isPage = function (h) { return h && !/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(h) && /\.html(?=[?#]|$)/.test(h); };

  function fixLinks(scope) {
    if (!en) return;
    (scope || document).querySelectorAll('a[href]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (a.hasAttribute('data-lang-switch') || !isPage(h) || /[?&]lang=/.test(h)) return;
      a.setAttribute('href', withLang(h, 'en'));
    });
  }

  function setSwitches() {
    var here = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('a[data-lang-switch]').forEach(function (a) {
      var to = a.getAttribute('data-lang-switch') || (en ? 'ko' : 'en');
      a.setAttribute('href', withLang(here + location.search + location.hash, to));
      a.setAttribute('hreflang', to);
      a.setAttribute('lang', to);
      if (to === lang) a.setAttribute('aria-current', 'true');
      a.addEventListener('click', function () {
        try { sessionStorage.setItem('i18n-scroll', JSON.stringify({ p: here, y: window.scrollY })); } catch (e) {}
      });
    });
  }

  var done = false;
  function apply() {
    if (done) return;
    done = true;
    if (en) {
      document.querySelectorAll('[data-en]').forEach(function (el) { el.innerHTML = el.getAttribute('data-en'); });
      ['aria-label', 'alt', 'title', 'content', 'placeholder'].forEach(function (a) {
        document.querySelectorAll('[data-en-' + a + ']').forEach(function (el) { el.setAttribute(a, el.getAttribute('data-en-' + a)); });
      });
      fixLinks(document);
      // 나중에 그려지는 링크(목록·상세 페이지)에도 lang 을 붙인다
      new MutationObserver(function (list) {
        list.forEach(function (r) { r.addedNodes.forEach(function (n) { if (n.nodeType === 1) { if (n.matches('a[href]')) fixLinks(n.parentNode); else fixLinks(n); } }); });
      }).observe(document.body, { childList: true, subtree: true });
    }
    setSwitches();
    root.classList.remove('i18n-wait');
  }
  document.addEventListener('DOMContentLoaded', apply);

  // 언어를 바꾼 뒤 같은 위치로 돌아온다
  window.addEventListener('load', function () {
    var s = null;
    try { s = JSON.parse(sessionStorage.getItem('i18n-scroll') || 'null'); sessionStorage.removeItem('i18n-scroll'); } catch (e) {}
    if (s && s.p === (location.pathname.split('/').pop() || 'index.html') && s.y > 0) window.scrollTo({ top: s.y, behavior: 'instant' });
  });

  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // 좁은 칸에만 쓰는 짧은 월 표기(AP 스타일)
  var AP = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var KDAYS = ['일', '월', '화', '수', '목', '금', '토'];
  var toDate = function (d) {
    if (d instanceof Date) return d;
    var p = String(d).split('-');
    return new Date(+p[0], +p[1] - 1, +(p[2] || 1));
  };

  window.I18N = {
    lang: lang,
    en: en,
    apply: apply,
    withLang: withLang,
    t: function (ko, english) { return en && english != null ? english : ko; },
    // item.en[key] 가 있으면 영어, 없으면 한국어
    pick: function (item, key) { return en && item && item.en && item.en[key] != null ? item.en[key] : item[key]; },
    // style: md(10월 25일 · October 25) · mds(10월 25일 · Oct. 25) · ymd · mdw · ymdw · ym · m · dow · dows · dot(2026. 10. 25. · Oct. 25, 2026)
    date: function (d, style) {
      d = toDate(d);
      var y = d.getFullYear(), mo = d.getMonth(), da = d.getDate(), w = d.getDay();
      if (!en) {
        switch (style) {
          case 'ymd': return y + '년 ' + (mo + 1) + '월 ' + da + '일';
          case 'mdw': return (mo + 1) + '월 ' + da + '일 ' + KDAYS[w] + '요일';
          case 'ymdw': return y + '년 ' + (mo + 1) + '월 ' + da + '일 ' + KDAYS[w] + '요일';
          case 'ym': return y + '년 ' + (mo + 1) + '월';
          case 'm': return (mo + 1) + '월';
          case 'dow': return KDAYS[w] + '요일';
          case 'dows': return KDAYS[w];
          case 'dot': return y + '. ' + (mo + 1) + '. ' + da + '.';
          default: return (mo + 1) + '월 ' + da + '일';
        }
      }
      switch (style) {
        case 'mds': return AP[mo] + ' ' + da;
        case 'ymd': return MONTHS[mo] + ' ' + da + ', ' + y;
        case 'mdw': return DAYS[w] + ', ' + MONTHS[mo] + ' ' + da;
        case 'ymdw': return DAYS[w] + ', ' + MONTHS[mo] + ' ' + da + ', ' + y;
        case 'ym': return MONTHS[mo] + ' ' + y;
        case 'm': return MONTHS[mo];
        case 'dow': return DAYS[w];
        case 'dows': return DAYS[w].slice(0, 3);
        case 'dot': return AP[mo] + ' ' + da + ', ' + y;
        default: return MONTHS[mo] + ' ' + da;
      }
    },
    // '18:00' → 한국어는 그대로, 영어는 표기 기준(glossary ui.timeFormat)대로
    // 일정표: '6:00 p.m.' · 본문(style 'prose'): '6 p.m.', '10:30 a.m.', 'noon'
    time: function (hhmm, style) {
      if (!en) return hhmm;
      var p = String(hhmm).split(':'), h = +p[0], mm = p[1] || '00';
      if (style === 'prose') {
        if (h === 12 && mm === '00') return 'noon';
        return (h % 12 || 12) + (mm === '00' ? '' : ':' + mm) + (h < 12 ? ' a.m.' : ' p.m.');
      }
      return (h % 12 || 12) + ':' + mm + (h < 12 ? ' a.m.' : ' p.m.');
    },
    // 영문 표기 기준의 공용 문구(data/glossary.js 를 불러온 페이지에서만)
    get ui() { return window.GLOSSARY ? window.GLOSSARY.ui : {}; }
  };
})();
