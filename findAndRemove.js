function findAndRemove(obj) {
	let startArr = Object.entries(obj);
	let result = {};

	for (let i = 0; i <= startArr.length - 1; i++) {
		let newArr = startArr[i][1];
		let loopArr = Object.entries(newArr).filter((a) => !isNaN(a[1]));
		let newObj = {};
		for (let i = 0; i <= loopArr.length - 1; i++) {
			newObj[loopArr[i][0]] = Number(loopArr[i][1]);
		}
		result[startArr[i][0]] = newObj;
	}
	return result;
}
console.log(findAndRemove({ bedroom: { slippers: '10000', piano: '550', call: 'vet', travel: 'world' } }));

console.log(
	findAndRemove({
		kitchen: { ['gold spoons']: '900', piano: '550', notes: 'ga0r76ba22g4e' },
		cellar: { reminder: 'dog', bottle: '750' },
	})
);
