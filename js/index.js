// ドロワーメニュー
$("#js-drawer-icon").on("click", function () {
  $(this).toggleClass("is-opened");
  $("#js-drawer-content").toggleClass("is-opened");
});

// ページトップボタン
const pageTop = document.querySelector("#js-pagetop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    pageTop.classList.add("is-show");
  } else {
    pageTop.classList.remove("is-show");
  }
});

// スマホのドロワーアイコンを消す処理
$('#js-drawer-content a[href^="#"]').on("click", function (e) {
  $("#js-drawer-icon").removeClass("is-opened");
  $("#js-drawer-content").removeClass("is-opened");
});