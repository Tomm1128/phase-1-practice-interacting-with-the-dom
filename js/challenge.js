const counterDisplay = document.getElementById("counter")
const pauseBtn = document.getElementById("pause")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const likeBtn = document.getElementById("heart")
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
  const formBtn = document.getElementById("submit")
  if (pauseBtn.textContent === "resume"){
    counterInterval = setInterval(incrementCounter, 1000)
    pauseBtn.textContent = "pause"
    plusBtn.disabled = false
    minusBtn.disabled = false
    likeBtn.disabled = false
    formBtn.disabled = false
  } else {
    clearInterval(counterInterval)
    counterInterval = null
    pauseBtn.textContent = "resume"
    plusBtn.disabled = true
    minusBtn.disabled = true
    likeBtn.disabled = true
    formBtn.disabled = true
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

const getFormInput = () => {
  const formInput = document.getElementById("comment-input") 
  return formInput.value
}

const handleUserInput = (event) => {
  event.preventDefault()
  const userInput = getFormInput()
  const commentSection = document.getElementById("list")
  const p = document.createElement("p")
  p.textContent = `${userInput}\n`
  commentSection.appendChild(p)
}


const init = () => {
  counterInterval = setInterval(incrementCounter, 1000)

  plusBtn.addEventListener("click", incrementCounter) 
  minusBtn.addEventListener("click", decreaseCounter)
  likeBtn.addEventListener("click", likeMethod)
  pauseBtn.addEventListener("click", stopCounter)

  const form = document.getElementById("comment-form")

  form.addEventListener("submit", handleUserInput)
}

document.addEventListener("DOMContentLoaded", init())
