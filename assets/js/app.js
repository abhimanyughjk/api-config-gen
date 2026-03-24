// assets/js/app.js
(function () {
  'use strict';

  const $ = id => document.getElementById(id);

  const providerSelect = $('providerSelect');
  const baseUrlInput   = $('baseUrl');
  const authTypeSelect = $('authType');
  const apiKeyInput    = $('apiKey');
  const timeoutInput   = $('timeout');
  const retriesInput   = $('retries');
  const rateLimitInput = $('rateLimit');
  const languageSelect = $('language');
  const fmtTabs        = $('fmtTabs');
  const generateBtn    = $('generateBtn');
  const resetBtn       = $('resetBtn');
  const copyConfigBtn  = $('copyConfigBtn');
  const dlBtn          = $('dlBtn');
  const copySnippetBtn = $('copySnippetBtn');
  const outConfig      = $('outConfig');
  const outSnippet     = $('outSnippet');
  const outLabel       = $('outLabel');
  const hamburger      = $('hamburger');

  let currentFmt  = 'env';
  let lastConfig  = '';
  let lastSnippet = '';

  // ── navbar scroll
  window.addEventListener('scroll', () => {
    $('navbar').classList.toggle('scrolled', window.scrollY > 10);
  });

  // ── mobile menu
  hamburger.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // ── format tabs
  fmtTabs.querySelectorAll('.fmt').forEach(btn => {
    btn.addEventListener('click', () => {
      fmtTabs.querySelectorAll('.fmt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFmt = btn.dataset.fmt;
    });
  });

  // ── preset autofill
  providerSelect.addEventListener('change', () => {
    const p = API_PRESETS[providerSelect.value];
    if (!p) return;
    if (p.baseUrl)  baseUrlInput.value   = p.baseUrl;
    if (p.authType) authTypeSelect.value = p.authType;
    if (p.rateLimit) rateLimitInput.value = p.rateLimit;
    [baseUrlInput, authTypeSelect].forEach(el => {
      el.style.borderColor = 'var(--t1)';
      setTimeout(() => el.style.borderColor = '', 1000);
    });
  });

  // ── generate
  generateBtn.addEventListener('click', () => {
    const form = {
      provider:  providerSelect.value,
      baseUrl:   baseUrlInput.value.trim(),
      authType:  authTypeSelect.value,
      apiKey:    apiKeyInput.value.trim(),
      timeout:   parseInt(timeoutInput.value, 10)   || 30000,
      retries:   parseInt(retriesInput.value, 10)   || 3,
      rateLimit: parseInt(rateLimitInput.value, 10) || 60,
      format:    currentFmt,
      language:  languageSelect.value,
    };
    lastConfig  = generateConfig(form);
    lastSnippet = generateSnippet(form);
    const filename = FORMAT_FILENAME[currentFmt] || '.env';
    outLabel.textContent = `// config · ${filename}`;
    outConfig.innerHTML  = hlConfig(lastConfig, currentFmt);
    outSnippet.innerHTML = hlSnippet(lastSnippet);
    // flash border
    outConfig.style.borderColor = 'var(--t2)';
    setTimeout(() => outConfig.style.borderColor = '', 700);
  });

  // ── reset
  resetBtn.addEventListener('click', () => {
    providerSelect.value = 'custom';
    baseUrlInput.value = authTypeSelect.value = apiKeyInput.value = '';
    authTypeSelect.value = 'bearer';
    timeoutInput.value = '30000'; retriesInput.value = '3'; rateLimitInput.value = '60';
    languageSelect.value = 'js'; currentFmt = 'env';
    fmtTabs.querySelectorAll('.fmt').forEach((b,i) => b.classList.toggle('active', i === 0));
    outConfig.innerHTML  = '<span class="c"># Fill the form and click Generate</span>\n<span class="c"># Your config file will appear here...</span>';
    outSnippet.innerHTML = '<span class="c"># Connection code will appear here...</span>';
    outLabel.textContent = '// config · .env';
    lastConfig = lastSnippet = '';
  });

  // ── copy / download
  copyConfigBtn.addEventListener('click',  () => copy(copyConfigBtn,  lastConfig));
  copySnippetBtn.addEventListener('click', () => copy(copySnippetBtn, lastSnippet));

  dlBtn.addEventListener('click', () => {
    if (!lastConfig) return;
    const fname = FORMAT_FILENAME[currentFmt] || '.env';
    const a = Object.assign(document.createElement('a'), {
      href: URL.createObjectURL(new Blob([lastConfig], { type: 'text/plain' })),
      download: fname,
    });
    a.click(); URL.revokeObjectURL(a.href);
  });

  document.querySelectorAll('.copy-cmd').forEach(btn => {
    btn.addEventListener('click', () => copy(btn, btn.dataset.copy));
  });

  // ── helpers
  function copy(btn, text) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.textContent;
      btn.textContent = '✓ Copied'; btn.classList.add('ok');
      setTimeout(() => { btn.textContent = orig; btn.classList.remove('ok'); }, 1600);
    });
  }

  // simple syntax highlighting
  function esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function hlConfig(code, fmt) {
    let s = esc(code);
    // comments
    s = s.replace(/(#[^\n]*)/g, '<span class="c">$1</span>');
    if (['env','yaml','toml'].includes(fmt)) {
      // KEY = VALUE
      s = s.replace(/^([A-Z_][A-Z0-9_]*)(\s*[=:]\s*)(.+)/gm,
        (_, k, sep, v) => `<span class="k">${k}</span>${sep}<span class="v">${v}</span>`);
    } else if (fmt === 'json') {
      s = s.replace(/"([^"]+)"(\s*:)/g, '<span class="k">"$1"</span>$2');
      s = s.replace(/:\s*"([^"]*)"/g, ': <span class="v">"$1"</span>');
      s = s.replace(/:\s*(\d+)/g, ': <span class="n">$1</span>');
    } else {
      s = s.replace(/\b(const|let|var|func|function|async|await|return|import|require|export|module|def|class|type|struct|package|if|else|for)\b/g, '<span class="kw">$1</span>');
      s = s.replace(/'([^']*)'/g, '<span class="v">\'$1\'</span>');
      s = s.replace(/`([^`]*)`/g, '<span class="v">`$1`</span>');
      s = s.replace(/\b(\d+)\b/g, '<span class="n">$1</span>');
    }
    return s;
  }

  function hlSnippet(code) {
    let s = esc(code);
    s = s.replace(/(#[^\n]*|\/\/[^\n]*)/g, '<span class="c">$1</span>');
    s = s.replace(/\b(const|let|var|func|function|async|await|return|import|require|export|module|def|class|type|struct|package|if|else|for|nil|true|false|null|undefined)\b/g, '<span class="kw">$1</span>');
    s = s.replace(/'([^']*)'/g, '<span class="v">\'$1\'</span>');
    s = s.replace(/`([^`]*)`/g, '<span class="v">`$1`</span>');
    s = s.replace(/\b(\d+)\b/g, '<span class="n">$1</span>');
    return s;
  }

})();
