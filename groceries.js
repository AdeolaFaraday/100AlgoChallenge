function getTotalPrice(groceries) {
	let cal = groceries.map((a) => a.quantity * a.price);
	let result = cal.reduce((a, b) => a + b);
	return Number(result.toFixed(1));
}

console.log(
	getTotalPrice([
		{ product: 'Chocolate', quantity: 1, price: 0.1 },
		{ product: 'Lollipop', quantity: 1, price: 0.2 },
	])
);
