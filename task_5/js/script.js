"use strict"

// Задача 5.Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин---------------------------------------------------------------------------------
let timeNew = parseFloat(prompt(`Введіть кількість секунд (s): `, `s`))

let minutes = timeNew /60 
let hours = timeNew/ 3600

document.write(`<div class="page__container"> <div class="page__one"> seconds = ${timeNew} </div>`)
document.write(` <div class="page__one">minutes = ${minutes.toFixed(2)} </div>`)
document.write(` <div class="page__one">hours = ${hours.toFixed(2)} </div> </div>`)
