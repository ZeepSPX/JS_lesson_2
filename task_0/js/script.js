"use strict"

// Задача 0. Обчислити значення виразів ---------------------------------------------------------------------------------

let a = parseFloat(prompt(`Введіть значення a`, `a`)) 
let b = parseFloat(prompt(`Введіть значення b`, `b`))
let s1 = a + 12 + b

document.write(`<div class="page__container"> <div class="page__one"> s1 = ${s1} </div>`)

// -------------------------------------------------------------------------------

let s2 = Math.sqrt((a + b)/ (2 * a))

document.write(` <div class="page__one"> s2 = ${s2} </div> `)

// -------------------------------------------------------------------------------
let c = parseFloat(prompt(`Введіть значення c`, `c`))
let s3 = Math.cbrt((a + b)* c)

document.write(` <div class="page__one"> s3 = ${s3} </div> `)

// ------------------------------------------------------------------------------

let s4 = Math.sin(a / -b)

document.write(`<div class="page__one"> s4 = ${s4} </div> </div>`)