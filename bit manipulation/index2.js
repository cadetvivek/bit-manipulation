// A naive approach to check if a number has bits in alternate patterns:
function hasAlternateBits(num) {
  let prevBit = num & 1;
  num = num >> 1;
  while (num > 0) {
    let currBit = num & 1;
    if (currBit === prevBit) {
      return false;
    }
    prevBit = currBit;
    num = num >> 1;
  }
  return true;
}

// Example usage
let num = 10;
if (hasAlternateBits(num)) {
  console.log("Yes");
} else {
  console.log("No");
}
