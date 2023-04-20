function convertToRoman(num) {
  const romanSymbols = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };

  let romanNumeral = '';

  for (let key in romanSymbols) {
    while (num >= key) {
      romanNumeral += romanSymbols[key];
      num -= key;
    }
  }

  return romanNumeral;
}

console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
