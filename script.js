const menuList = document.querySelector(".menu");
const button = document.querySelector(".m-logo");
// menuList.style.maxHeight = "0";

console.log(menuList);

button.addEventListener("click", () => {
  console.log("you clicked");
  if (menuList.style.display == "none") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
});
