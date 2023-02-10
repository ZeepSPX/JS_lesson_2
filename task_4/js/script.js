"use strict"

// Задача 4.Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів---------------------------------------------------------------------------------
let length = parseFloat(prompt(`Введість довжину у СМ: `, ``))

let meters = length / 100
let kilometers = length / 1000

document.write(`<div class="page__container"> <div class="page__one"> length (cm) = ${length} </div>`)
document.write(` <div class="page__one">length (m) = ${meters} </div>`)
document.write(` <div class="page__one">length (km) = ${kilometers} </div> </div>`)
