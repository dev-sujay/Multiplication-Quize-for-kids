let num1 = Math.floor((Math.random() * 10) + 1)
let num2 = Math.floor((Math.random() * 10) + 1)

document.querySelector(".question").innerHTML = `What is ${num1} multiplyed by ${num2} ?`

let correctAns = num1 * num2
let input = document.querySelector(".input")

const form = document.querySelector("form")


let score = JSON.parse(localStorage.getItem("score"))
if(!score){
    score = 0
}

document.querySelector(".score").innerHTML = `Score : ${score}`


form.addEventListener('submit', () => {
  const userAns = +input.value //+before string convertes the string into an number
  if(userAns === correctAns){
    score++
    updateLocalStrorage()
  }else{
    score--
    updateLocalStrorage()
  }
})

form.addEventListener('reset', () => {
  localStorage.clear()
  score = 0
  document.querySelector(".score").innerHTML = `Score : 0`
})


let updateLocalStrorage = () => {
  localStorage.setItem("score", JSON.stringify(score))
}

