const counterDisplay = document.getElementById("counter")
let counter = 0
let likeCounter = 0
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

const likeMethod = () => {
  likeCounter++
  const likeSection = document.querySelector("ul.likes") 
  likeSection.textContent = `${counter} has been liked ${likeCounter} times`
}


const init = () => {
  let currentCounter

  const plusBtn = document.getElementById("plus")
  const minusBtn = document.getElementById("minus")
  const likeBtn = document.getElementById("heart")

  if (!counterInterval)
    counterInterval = setInterval(incrementCounter, 1000)

plusBtn.addEventListener("click", incrementCounter)
minusBtn.addEventListener("click", decreaseCounter)
if (currentCounter !== counter){
  currentCounter = counter
  likeBtn.addEventListener("click", likeMethod)
} else {
  likeBtn.addEventListener("click", likeMethod)
}



}


document.addEventListener("DOMContentLoaded", init())
