let value_1 = addNumbers(1,2);
console.log(value_1);

function addNumbers(num1, num2) {
    return num1 + num2;
    }
    
const square = (x) => x*x;
let result=square(5);
console.log(result);


function calculate(operation, x, y) {
    return operation(x, y);
    }
    function add(a, b) {
    return a + b;
    }
    function subtract(a, b) {
    return a - b;
    }
    // Using calculate as a higher-order function
    const result1 = calculate(add, 5, 3); // Result: 8
    const result2 = calculate(subtract, 10, 4); // Result: 6
    console.log(result1);
    console.log(result2);


    function multiplier(factor) {
        return function (x) {
        return x * factor;
        };
        }
        const double = multiplier(2);
        const triple = multiplier(3);
        const result3 = double(5); // Result: 10
        const result4 = triple(5); // Result: 15
        
        //Array
        let fruits = ["apple", "banana", "orange"];
        console.log(fruits[1]);

        fruits.push("grape");
        console.log(fruits);

        let removedFruit = fruits.pop();
        console.log(fruits);

        fruits.splice(1, 1, "kiwi");
        console.log(fruits);

        