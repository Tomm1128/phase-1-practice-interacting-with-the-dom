const counterDisplay = document.getElementById("counter")
let counter = 0
let counterInterval

const counterMethod = () => {
  counter++
  counterDisplay.innerHTML = `\n    ${counter}\n  `
}

const init = () => {

  if (!counterInterval)
    counterInterval = setInterval(counterMethod, 1000)





}


document.addEventListener("DOMContentLoaded", init())
