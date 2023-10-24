function quantityDiscount(quantity, price) {
  const pjk = 0.11; // Pajak 11%

  let discountedPrice = 0;

  if (quantity >= 10) {
    discountedPrice = quantity * price * 0.2; // Diskon 20% untuk lebih dari atau sama dengan 10 barang
  } else if (quantity >= 5) {
    discountedPrice = quantity * price * 0.15; // Diskon 15% untuk lebih dari atau sama dengan 5 barang
  }

  const subtotal = (quantity * price) - discountedPrice;
  const totalWithTax = subtotal + pjk * subtotal;

  return totalWithTax;
}

console.log(quantityDiscount(1, 100));
console.log(quantityDiscount(3, 100));
console.log(quantityDiscount(5, 100));
console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
console.log(quantityDiscount(3, 10000));
console.log(quantityDiscount(12, 10000));

module.exports = quantityDiscount;
