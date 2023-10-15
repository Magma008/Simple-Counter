let button = document.querySelectorAll(".button")
const value = document.querySelector(".value")
let amount = 0
button = Array.from(button)

function colorIt() {
    value.style.color = amount > 0 ? "#008000" : amount < 0 ? "#ff0000" : "#02022c"
}

button.forEach(item => {
    item.addEventListener("click", (e) => {
        if (e.target.classList.contains("increase")) {
            amount = amount + 1
            value.textContent = amount
            colorIt()
        }
        else if (e.target.classList.contains("decrease")) {
            amount = amount - 1
            value.textContent = amount
            colorIt()
        }
        else {
            amount = 0
            value.textContent = amount
            colorIt()
        }
    })
})