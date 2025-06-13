// 语言切换脚本
function setLanguage(lang, save = true) {
  document.documentElement.lang = lang;
  const elements = document.querySelectorAll("[data-zh]");
  elements.forEach(el => {
    el.textContent = lang === "zh" ? el.getAttribute("data-zh") : el.getAttribute("data-en");
  });

  // 保存用户选择
  if (save) {
    localStorage.setItem("preferredLanguage", lang);
  }

  // 更新 URL 参数（可选，增强体验）
  const url = new URL(window.location);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url);
}

// 根据本地或 URL 设置初始语言
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  let lang = urlParams.get("lang");

  if (!lang) {
    lang = localStorage.getItem("preferredLanguage") || "zh";
  }

  setLanguage(lang, false);
});
