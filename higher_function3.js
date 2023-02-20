function sum(number1) {
    return function(number2) {
        return number1 + number2;
    };
}

let func = sum(3);
console.log( func(5), func(1), func(2) );

// или

console.log( sum(6)(13), sum(12)(21), sum(36)(34) );