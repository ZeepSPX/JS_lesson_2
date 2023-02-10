"use strict"

// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості)---------------------------------------------------------------------------------
let quantityProduct = parseFloat(prompt(`Введість кількість товару: `, ``))
let priceProduct = parseFloat(prompt(`Введіть ціну за одиницю товару: `, ``))
const tax = 0.05

let totalPrice = quantityProduct * priceProduct
let totalPriceTax = totalPrice * tax 

document.write(`<div class="page__container"> <div class="page__one"> Total Price (tax) = ${totalPriceTax.toFixed (2)} </div>`)
document.write(` <div class="page__one">Total Price = ${totalPrice.toFixed (2)} </div>`)
document.write(` <div class="page__one">Quantity Product = ${quantityProduct} </div>`)
document.write(` <div class="page__one">Price Product = ${priceProduct} </div> </div>`)