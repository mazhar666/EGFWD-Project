// Global variables
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section"); // this Line returns an array to loop on in the next function
// End Global Variables

// This function just creates the <li> in the <ul> and appends it in the nav bar
function createListItem() {
  for (const sec of sections) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<li><a href='#${sec.id}' data-nav='${sec.id}' class='menu__link'>${sec.dataset.nav}</a></li>`;
    navList.appendChild(listItem);
  }
}
createListItem();
// Styling for active states with getBoundingClientRect and the numbers (-400 and 150) represent the y-axis of the page in scrolling
window.onscroll = () => {
  document.querySelectorAll("section").forEach(function (active) {
    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");
    }
  });
};
// When clicking an item form the navigation menu, the link should scroll to the appropriate section smoothly
navList.addEventListener("click", (toSec) => {
  // PreventDefault: to prevent the browser from reloading the page (The Default action he would take!)
  toSec.preventDefault();
  if (toSec.target.dataset.nav) {
    document
      .getElementById(`${toSec.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    // Below this line a function called setTimeout that just make the scroll a bit slower to make it better for UX
    setTimeout(() => {
      location.hash = `${toSec.target.dataset.nav}`;
    }, 170);
  }
});
