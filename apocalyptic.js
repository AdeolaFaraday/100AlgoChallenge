function apocalyptic(n) {
	let mutl = String(BigInt(Math.pow(2, n))).split('');
	let days = 0;
	for (let i = 0; i <= mutl.length; i++) {
		if (mutl[i] == '6' && mutl[i + 1] == '6' && mutl[i + 2] == '6') {
			days = i;
			break;
		}
	}
	return Number(days) > 0 ? `Repent! ${days} days until the Apocalypse!` : 'Crisis averted. Resume sinning.';
}

console.log(apocalyptic(109));
console.log(apocalyptic(220));
