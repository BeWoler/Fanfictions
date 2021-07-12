export default function switchTheme() {
  const tags = document.querySelectorAll(".tags");
  const app = document.querySelector(".app");
  const btns = document.querySelectorAll(".btn-main");
  const accordion = document.querySelectorAll(".accordion-item")
  const accordionBtns = document.querySelectorAll(".accordion-button");
  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
    for (let i = 0; i < tags.length; i++) {
      tags[i].classList.toggle("light");
      tags[i].classList.toggle("dark");
    }
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.toggle("light");
      btns[i].classList.toggle("dark");
    }
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].classList.toggle("light");
      accordion[i].classList.toggle("dark");
    }
    for (let i = 0; i < accordionBtns.length; i++) {
      accordionBtns[i].classList.toggle("light");
      accordionBtns[i].classList.toggle("dark");
    }
    app.classList.toggle("light");
    app.classList.toggle("dark");
  } else if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
    for (let i = 0; i < tags.length; i++) {
      tags[i].classList.toggle("dark");
      tags[i].classList.toggle("light");
    }
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.toggle("dark");
      btns[i].classList.toggle("light");
    }
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].classList.toggle("light");
      accordion[i].classList.toggle("dark");
    }
    for (let i = 0; i < accordionBtns.length; i++) {
      accordionBtns[i].classList.toggle("light");
      accordionBtns[i].classList.toggle("dark");
    }
    app.classList.toggle("dark");
    app.classList.toggle("light");
  }
}
