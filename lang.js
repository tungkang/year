(function () {
  var KEY = "yearpage-legal-lang";

  function apply(lang) {
    var next = lang === "en" ? "en" : "zh-CN";
    document.documentElement.lang = next;
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-set-lang") === (next === "en" ? "en" : "zh"));
    });
    try {
      localStorage.setItem(KEY, next === "en" ? "en" : "zh");
    } catch (_) {}
  }

  var saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch (_) {}

  if (saved === "en" || saved === "zh") {
    apply(saved);
  } else if (navigator.language && navigator.language.toLowerCase().indexOf("zh") === 0) {
    apply("zh");
  } else {
    apply("en");
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.getAttribute("data-set-lang"));
    });
  });
})();
