// Math operations
// numbers without decimal places are called integer numbers
// numbers with decimal places are call floats.

console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);
console.log(10 % 4);
// % gives the remainder of the division.
// if we divide 10 by 4 there's a remainder of 2 which cannot be divided by 4

console.log(10 + 3 - 5 * 10);
// result = -37
// JS obeys the PEMDAS rule

let sum = 10 + 3 - 5 * 10;
console.log(sum);

sum = 10 * 4;
console.log(sum);
// we can even overwrite the result of the sum variable by assigning another math operation to it like this.

sum = sum + 1;
console.log(sum);
// this is also valid.
// final result of sum = 40 + 1 = 41
// This is possible because JS will always evaluate and execute the "right side" of the equal sign first.

sum++;
console.log(sum);
// this means sum = sum + 1

sum--;
console.log(sum);
// this means sum = sum - 1

sum += 5;
console.log(sum);
// this means sum = sum + 5

sum -= 5;
console.log(sum);
// this means sum = sum -5

sum *= 5;
console.log(sum);
// this means sum = sum * 5

sum /= 5;
console.log(sum);
// this means sum = sum / 5
