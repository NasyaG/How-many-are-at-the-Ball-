// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(saveEl)

let count = 0

function increment() {
    // count = count + 1
    count += 1
    countEl.innerText = count
}
//DOM = document object model (hoe to use javascript to modify website)

function save(){
    let saveCount = count + " - "
    saveEl.textContent += saveCount// creates space between - and number
    countEl.textContent = 0
    count = 0

}
