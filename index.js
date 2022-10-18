let countEl = document.getElementById("count-el")
let count = 0
let totalEl = document.getElementById("total-el")
let total = 0
function increment(){
    count += 1
    console.log(count)
    countEl.textContent = count
    console.log(countEl)
    total += 1
    console.log(total)
    totalEl.textContent = "Total people: " + total
}

let saveEl = document.getElementById("save-el")
function save(){
    saveEl.textContent += count + "-"
    count = 0
    countEl.textContent = count
}
function goZero(){
    count = 0
    countEl.textContent = count
    saveEl.textContent = "Previous entered: " + count
    totalEl.textContent = 0
}
