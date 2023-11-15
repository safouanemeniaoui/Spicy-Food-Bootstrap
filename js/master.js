const navBarLinks = document.querySelectorAll(".navbar-nav a");
const orderClassesLinks = document.querySelectorAll(".order-classes a");

navBarLinks.forEach((e) => {
  e.addEventListener("click", () => {
    setClass(navBarLinks, e, "active");
  });
});

orderClassesLinks.forEach((e) => {
  e.addEventListener("click", () => {
    setClass(orderClassesLinks, e, "active");
  });
});

// Functions

function setClass(arr, el, cl) {
  arr.forEach((e) => {
    e.classList.remove(cl);
  });
  el.classList.add(cl);
}
