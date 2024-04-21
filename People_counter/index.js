

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
// console.log(saveEl)
// console.log(countEl)

let count = 0

function increment() {
count += 1
countEl.innerText = count

}

function save() {
   let countStr = count + " - "
   saveEl.textContent += countStr
   countEl.textContent = 0
   count = 0

}

// let welcomeEl =document.getElementById("welcome-el")
// console.log(welcomeEl)
 
// let name = "Khushi"
// let greeting = "Hi, my name is "

// welcomeEl.innerText = greeting + name