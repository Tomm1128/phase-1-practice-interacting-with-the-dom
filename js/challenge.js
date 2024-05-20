const counterDisplay = document.getElementById("counter")
let counter = 0
let counterInterval

const incrementCounter = () => {
  counter++
  counterDisplay.innerHTML = `\n    ${counter}\n  `
}

const decreaseCounter = () => {
  counter--
  counterDisplay.innerHTML = `\n    ${counter}\n  `
}

const stopCounter = () => {

}


const init = () => {
  const plusBtn = document.getElementById("plus")
  const minusBtn = document.getElementById("minus")

  if (!counterInterval)
    counterInterval = setInterval(incrementCounter, 1000)

plusBtn.addEventListener("click", incrementCounter)
minusBtn.addEventListener("click", decreaseCounter)




}


document.addEventListener("DOMContentLoaded", init())
