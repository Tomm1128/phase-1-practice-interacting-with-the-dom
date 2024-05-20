const counterDisplay = document.getElementById("counter")
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

}

const likeMethod = () => {
  const likeSection = document.querySelector("ul.likes") 
  if (currentCounter === counter) {
    const nodeCount = likeSection.childElementCount 
    // debugger
    likeCounter++
    likeSection.childNodes[nodeCount - 1].textContent = `${currentCounter} has been liked ${likeCounter} times`
  } else {
    // debugger
    likeCounter = 1
    currentCounter = counter
    const li = document.createElement("li")
    // li.id = `${counter}`
    li.textContent = `${counter} has been liked ${likeCounter} times`
    likeSection.appendChild(li)
  }
}


const init = () => {

  const plusBtn = document.getElementById("plus")
  const minusBtn = document.getElementById("minus")
  const likeBtn = document.getElementById("heart")

  if (!counterInterval)
    counterInterval = setInterval(incrementCounter, 3000)

plusBtn.addEventListener("click", incrementCounter)
minusBtn.addEventListener("click", decreaseCounter)
likeBtn.addEventListener("click", likeMethod)


}


document.addEventListener("DOMContentLoaded", init())
