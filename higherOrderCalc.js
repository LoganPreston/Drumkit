/*higher order functions*/
function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function remainder(num1,num2){
    return num1%num2;
}

function intDivide(num1,num2){
    return Math.floor(num1/num2);
}

function calculator(num1,num2,operator){
    return operator(num1,num2);
}