function messageGlitch(txt) {
	let regex = /\d+/gi;
	let alpha = 'abcdefghijklmnopqrstuvwxyz';
	return txt.replace(regex, (x) => alpha[x - 1]);
}
console.log(messageGlitch("T21e19d1y's m1r11e20i14g m5e20i14g w9l12 14o23 2e i14 20h5 3o14f5r5n3e r15o13."));
