let navigation_bar = document.querySelector(".navbar");
let menu_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");

menu_btn.addEventListener("click", function () {
  navigation_bar.classList.add("active");
});

close_btn.addEventListener("click", function () {
  navigation_bar.classList.remove("active");
});
