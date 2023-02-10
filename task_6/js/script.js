"use strict"

// Задача 6.З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.---------------------------------------------------------------------------------
let productOne = parseFloat(prompt(`Введіть кількість продуктів (1): `, ``))
let productPriceOne = parseFloat(prompt(`Введіть ціну продуктів (1): `, ``))
let productTwo = parseFloat(prompt(`Введіть кількість продуктів (2): `, ``))
let productPriceTwo = parseFloat(prompt(`Введіть ціну продуктів (2): `, ``))
let productThree = parseFloat(prompt(`Введіть кількість продуктів (3): `, ``))
let productPriceThree = parseFloat(prompt(`Введіть ціну продуктів (3): `, ``))
const tax = 0.05

let totalPriceOne = productOne * productPriceOne
let totalPriceTwo = productTwo * productPriceTwo
let totalPriceThree = productThree * productPriceThree

let totalPrice = totalPriceOne + totalPriceTwo + totalPriceThree 
let totalPriceTax = totalPriceOne + totalPriceTwo + totalPriceThree * tax 

document.write(`<div class="page__container"> <table>
<tr>
  <td>Продукт 1 --- </td>
  <td>Кількість - ${productOne} --- </td>
  <td>Ціна - ${productPriceOne} --- </td>
  <td>Сума - ${totalPriceOne}</td>
</tr>
<tr>
  <td>Продукт 2 --- </td>
  <td>Кількість - ${productTwo} --- </td>
  <td>Ціна - ${productPriceTwo} --- </td>
  <td>Сума - ${totalPriceTwo}</td>
</tr>
<tr>
  <td>Продукт 3 --- </td>
  <td>Кількість - ${productThree} --- </td>
  <td>Ціна - ${productPriceThree} --- </td>
  <td>Сума - ${totalPriceThree}</td>
</tr>
</table>
<div class="page__one">Загальна сума - ${totalPrice}</div>
<div class="page__one">Загальна сума з ПДВ - ${totalPriceTax}</div>
</div>`)
