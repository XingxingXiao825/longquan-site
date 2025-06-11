// 语言切换脚本
function setLanguage(lang) {
  document.documentElement.lang = lang;
  const elements = document.querySelectorAll("[data-zh]");
  elements.forEach(el => {
    el.textContent = lang === "zh" ? el.getAttribute("data-zh") : el.getAttribute("data-en");
  });
}

// 默认中文
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("zh");
});
