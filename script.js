const pages = document.querySelectorAll(".page");



pages.forEach((page) => {
    page.addEventListener("click", () => {
        removeActiveClasses()
        page.classList.add("active")
    })
})

function removeActiveClasses() {
    pages.forEach(page => {
        page.classList.remove("active")
    })
}