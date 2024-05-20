const counterDisplay = document.getElementById("counter")
const pauseBtn = document.getElementById("pause")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const likeBtn = document.getElementById("heart")
const formBtn = document.getElementById("submit")
const likeSection = document.querySelector("ul.likes") 
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

const pauseApp = () => {
  clearInterval(counterInterval)
  counterInterval = null
  pauseBtn.textContent = "resume"
  plusBtn.disabled = true
  minusBtn.disabled = true
  likeBtn.disabled = true
  formBtn.disabled = true
}

const resumeApp = () => {
  counterInterval = setInterval(incrementCounter, 1000)
  pauseBtn.textContent = "pause"
  plusBtn.disabled = false
  minusBtn.disabled = false
  likeBtn.disabled = false
  formBtn.disabled = false
}

const handleResumePause = () => pauseBtn.textContent === "resume" ? resumeApp() : pauseApp()

const createLikeMessage = () => {
  likeCounter = 1
  currentCounter = counter
  const li = document.createElement("li")
  li.textContent = `${counter} has been liked ${likeCounter} time`
  likeSection.appendChild(li)
}

const updateLikeMessage = () => {
  const countOfLikeMessages = likeSection.childElementCount 
  likeCounter++
  const currentLikeMessage = likeSection.childNodes[countOfLikeMessages - 1]
  currentLikeMessage.textContent = `${currentCounter} has been liked ${likeCounter} times`
}

const handleLike = () =>  currentCounter === counter ? updateLikeMessage() : createLikeMessage()

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
  likeBtn.addEventListener("click", handleLike)
  pauseBtn.addEventListener("click", handleResumePause)

  const form = document.getElementById("comment-form")

  form.addEventListener("submit", handleUserInput)
}

document.addEventListener("DOMContentLoaded", init())
