// Task details

// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
let n = 00000000000000000000000000001011;

let count = 0;
while (n) {
  count += n & 1;
  n >>= 1;
}
return count;
