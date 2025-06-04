javascript
// Проверяем, находится ли сайт в WebView на Android
function isWebView() {
  var userAgent = navigator.userAgent.toLowerCase();
  return /(android)/.test(userAgent) && userAgent.indexOf('wv') !== -1;
}
// Перенаправление или редирект
function redirectOrLoadPage() {
  if (isWebView()) {
// Сайт находится в WebView на Android
console.log("Сайт находится в WebView на Android.");
// Можно добавить здесь дополнительные действия для обработки в WebView
  } else {
// Сайт не находится в WebView на Android
console.log("Сайт не находится в WebView на Android.");
window.location.href = "https://youtube.com"; // Замените ссылку на нужную вам
  }
}
// Вызываем функцию при загрузке страницы
redirectOrLoadPage();