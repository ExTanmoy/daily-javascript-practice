// Bonus Challenge — Shopping Bill Calculator


let product = "Wireless Mouse";
let price = 15;
let quantity = 4;
let taxPercent = 5;

let subtotal = price * quantity;
let taxAmount = (subtotal * taxPercent) / 100;
let grandTotal = subtotal + taxAmount;

console.log("---- Shopping Bill ----");
console.log("Product:", product);
console.log("Price Per Unit:", price);
console.log("Quantity:", quantity);
console.log("Subtotal:", subtotal);
console.log("Tax (5%):", taxAmount);
console.log("Grand Total:", grandTotal);