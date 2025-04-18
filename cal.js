
/*
let sumEL=document.getElementById("sum_el");
let sumE1=document.getElementById("sum-e1");
let sumE2=document.getElementById("sum-e2");
let sumE3=document.getElementById("sum-e3");
//let result="";
//let calva=[num1,num2];


//function solve(num1,num2){
    


//}
// Function to perform calculations
function solve(operator) {
    let num1 = parseFloat(sumE1.value); // Convert input to number
    let num2 = parseFloat(sumE2.value);

    if (isNaN(num1) || isNaN(num2)) {
        sumEL.textContent = "Please enter valid numbers.";
        return;
    }

    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operation";
    }

    sumEL.textContent = "Result: " + result;
}
    */
let sumEL = document.getElementById("sum_el");
let sumE1 = document.getElementById("sum-e1");
let sumE2 = document.getElementById("sum-e2");

// Function to perform calculations
function solve(operator) {
    let num1 = parseFloat(sumE1.value); // Convert input to number
    let num2 = parseFloat(sumE2.value);

    if (isNaN(num1) || isNaN(num2)) {
        sumEL.textContent = "Please enter valid numbers.";
        return;
    }

    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operation";
    }

    sumEL.textContent = "Result: " + result;
}
