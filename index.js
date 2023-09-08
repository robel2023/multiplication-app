const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)
const correctAnswer = num1 * num2

let score = JSON.parse(localStorage.getItem("score"))

if (!score) {
    score = 0
} else if (score < 0) {
    score = 0
}

const questionEl = document.getElementById("question")
const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score")

scoreEl.textContent = `score: ${score}`


questionEl.textContent = `What is ${num1} multiplied by ${num2}?`

formEl.addEventListener("submit", () => {
    const userAnswer = +inputEl.value
    if (userAnswer === correctAnswer) {
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}
