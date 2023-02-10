"use strict"

// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.---------------------------------------------------------------------------------
let yearNew = parseFloat(prompt(`Введіть перше число: a `, `a`))
let today = new Date();
const year = today.getFullYear();

let subra = year - yearNew

document.write(`<div class="page__container"> <div class="page__one">year = ${subra} </div>`)
document.write(` <div class="page__one">year today = ${year} </div>`)
document.write(` <div class="page__one">year BD = ${yearNew} </div> </div>`)