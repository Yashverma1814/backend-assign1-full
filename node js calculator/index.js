const arguments = process.argv;
const crypto = require('crypto');

if (arguments[2] === 'add') {
    const a = parseInt(arguments[3]);
    const b = parseInt(arguments[4]);
    console.log(`Addition value : ${a + b}`);
}
else if (arguments[2] === 'sub') {
    const a = parseInt(arguments[3]);
    const b = parseInt(arguments[4]);
    console.log(`Substraction value : ${a - b}`);
}

else if (arguments[2] === 'divide') {
    const a = parseInt(arguments[3]);
    const b = parseInt(arguments[4]);
    console.log(`Division value : ${a / b}`);
}

else if (arguments[2] === 'mult') {
    const a = parseInt(arguments[3]);
    const b = parseInt(arguments[4]);
    console.log(`Multiplication value : ${a * b}`);
}

else if (arguments[2] === 'sin') {
    const a = parseInt(arguments[3]);
    console.log(`Sine value ${Math.sin(a)}`);
}
else if (arguments[2] === 'cos') {
    const a = parseInt(arguments[3]);
    console.log(`Cosec value: ${Math.cos(a)}`);
}

else if (arguments[2] === 'tan') {
    const a = parseInt(arguments[3]);
    console.log(`Tangent value : ${Math.tan(a)}`);
}

else if (arguments[2] === 'random') {
    console.log(`Your Random Number is : ${crypto.randomInt(0, 1000)}`);
}
else {
    console.log('please enter a valid request to get response');
}