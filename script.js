
const pat1 = document.querySelector(".p1");
const pat2 =document.querySelector(".p2")
const pat3 =document.querySelector(".p3")
const pat4 =document.querySelector(".p4")
const pat5 =document.querySelector(".p5")

pat1.addEventListener("click", () => {
    pat1.classList.toggle("active")
    pat2.classList.remove("active")
    pat3.classList.remove("active")
    pat4.classList.remove("active")
    pat5.classList.remove("active")
})

pat2.addEventListener("click", () => {
    pat2.classList.toggle("active")
    pat1.classList.remove("active")
    pat3.classList.remove("active")
    pat4.classList.remove("active")
    pat5.classList.remove("active")
})

pat3.addEventListener("click", () => {
    pat3.classList.toggle("active")
    pat1.classList.remove("active")
    pat2.classList.remove("active")
    pat4.classList.remove("active")
    pat5.classList.remove("active")
})

pat4.addEventListener("click", () => {
    pat4.classList.toggle("active")
    pat1.classList.remove("active")
    pat2.classList.remove("active")
    pat3.classList.remove("active")
    pat5.classList.remove("active")
})

pat5.addEventListener("click", () => {
    pat5.classList.toggle("active")
    pat1.classList.remove("active")
    pat2.classList.remove("active")
    pat3.classList.remove("active")
    pat4.classList.remove("active")
})




