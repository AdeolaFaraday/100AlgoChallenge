function itemsPurchased(store, wallet) {
	wallet = +wallet.replace(/[$,]/g, '');
	const available = Object.entries(store)
		.filter((x) => +x[1].replace(/[$,]/g, '') <= wallet)
		.map((x) => x[0])
		.sort();
	return available.length ? available : 'Nothing';
}
