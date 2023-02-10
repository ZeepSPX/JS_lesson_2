"use strict"

// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці---------------------------------------------------------------------------------
let numOne = parseFloat(prompt(`Введіть перше число: a `, `a`))
let numTwo = parseFloat(prompt(`Введіть друге чило: b`, `b`))

let sum = numOne + numTwo
let multi = numOne * numTwo
let div = numOne / numTwo

document.write (`<div class="page__container">
<table>
<tr>
    <td>Число a = ${numOne};</td>
    <td>Число b = ${numTwo};</td>
</tr>
<tr>
    <td>Сума</td>
    <td>Добуток</td>
    <td>Частка</td>
</tr>
<tr>
    <td>${sum}</td>
    <td>${multi}</td>
    <td>${div}</td>
</tr>
</table> </div>`)
