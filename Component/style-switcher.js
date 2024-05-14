// ====== toggle style switcher =====

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitch = document.querySelector(".style-switch");
styleSwitcherToggle.addEventListener("click", () => {
   styleSwitch.classList.toggle("open");
})

// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// const styleSwitch = document.querySelector(".style-switch");

// styleSwitcherToggle.addEventListener("click", () => {
//   styleSwitch.classList.toggle("open", styleSwitch);
// });

// window.addEventListener("scroll", () => {
//   if (document.querySelector(".style-switch").classList.contains("open")) {
//     document.querySelector(".style-switch").classList.remove("open");
//   }
// });

// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click", => {
//     document.querySelector(".style-switch").classList.toggle("open");
// })


// ----------theme colors -------------

const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) 
{
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title"))
            {
                style.removeAttribute("disabled");
            }
            else 
            {
                style.setAttribute("disabled", true);
            }
    })
}

// ---------- light and dark -------------
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    if(document.body.classList.contains("dark"))
        {
            document.body.classList.remove("dark");
            dayNight.querySelector(".fas").classList.remove("fa-sun");
            dayNight.querySelector(".fas").classList.add("fa-moon");
        }
        else
        {
            document.body.classList.add("dark");
            dayNight.querySelector(".fas").classList.remove("fa-moon");
            dayNight.querySelector(".fas").classList.add("fa-sun");
        }
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
        {
            dayNight.querySelector(".fas").classList.add("fa-sun");
        }
        else
        {
            dayNight.querySelector("i").classList.add("fa-moon");
        }
})