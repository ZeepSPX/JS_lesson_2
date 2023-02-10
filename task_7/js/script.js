"use strict"

// Задача 6.З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.---------------------------------------------------------------------------------
let mountMin = 1
let mountMax = 12 
let randomMount = mountMin + Math.floor(Math.random()*(mountMax - mountMin +1))

let dayMin = 0 
let dayMax = 6
let randomDay = dayMin + Math.floor(Math.random() * (dayMax - dayMin + 1))

let sumRandom = randomDay + randomMount

document.write(`<div class="page__container"> <div class="page__one"> Місяць  = ${randomMount} </div>`)
document.write(` <div class="page__one"> День = ${randomDay} </div>`)
document.write(` <div class="page__one"> сума випадкових дня і місяця  = ${sumRandom} </div> </div>`)