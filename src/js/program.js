const menuButton = document.querySelector(".program__button")
const headerNav = document.querySelector(".program__text--visible")
menuButton.addEventListener("click", () => {
    if (headerNav.classList.contains("is-open")) {
        menuButton.textContent = "Read more"
    } else {
        menuButton.textContent = "Less"
    }
    headerNav.classList.toggle("is-open")
})