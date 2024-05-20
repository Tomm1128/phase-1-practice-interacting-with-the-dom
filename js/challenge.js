const counterDisplay = document.getElementById("counter")
const pauseBtn = document.getElementById("pause")
let counter = 0
let likeCounter = 0
let counterInterval
let currentCounter


const incrementCounter = () => {
  counter++
  counterDisplay.innerHTML = `\n    ${counter}\n  `
}

const decreaseCounter = () => {
  counter--
  counterDisplay.innerHTML = `\n    ${counter}\n  `
}

const stopCounter = () => {
  if (pauseBtn.textContent === "resume"){
    counterInterval = setInterval(incrementCounter, 1000)
    pauseBtn.textContent = "pause"
  } else {
    clearInterval(counterInterval)
    counterInterval = null
    pauseBtn.textContent = "resume"
  }
}

const likeMethod = () => {
  const likeSection = document.querySelector("ul.likes") 
  if (currentCounter === counter) {
    const nodeCount = likeSection.childElementCount 
    likeCounter++
    likeSection.childNodes[nodeCount - 1].textContent = `${currentCounter} has been liked ${likeCounter} times`
  } else {
    likeCounter = 1
    currentCounter = counter
    const li = document.createElement("li")
    li.textContent = `${counter} has been liked ${likeCounter} times`
    likeSection.appendChild(li)
  }
}


const init = () => {

  const plusBtn = document.getElementById("plus")
  const minusBtn = document.getElementById("minus")
  const likeBtn = document.getElementById("heart")

  
  counterInterval = setInterval(incrementCounter, 1000)

  plusBtn.addEventListener("click", incrementCounter) 
  minusBtn.addEventListener("click", decreaseCounter)
  likeBtn.addEventListener("click", likeMethod)
  pauseBtn.addEventListener("click", stopCounter)




}


document.addEventListener("DOMContentLoaded", init())
