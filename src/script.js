console.log("Hello World");
export function safelyConvertToNumber(possiblyNum) {
	if (typeof possiblyNum === 'symbol') {
		return 0;
	}
	const num = Number.parseFloat(possiblyNum);
	return Number.isNaN(num) ? 0 : num;
}




