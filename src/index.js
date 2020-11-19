
export function isPrimeNumber(num) {
	if (num > 1 && num <= 1000) {
	  for(let i = 2; i < num; i++)
	    if(num % i === 0) return `${num} is not a prime number`;
	  return `${num} is a prime number`;
	} else if (num === 0 || num === 1) {
		return `${num} is not a prime number`;
	} else {
		return "invalid number"
	}
}
