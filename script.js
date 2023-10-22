// let num1 = document.getElementById("Num1");
// let num2 = document.getElementById("Num2");



// document.getElementById

// let sumEl = document.getElementById("sum-el");
// sumEl.textContent = 'Ahmed'

let result =  document.getElementById("result-el");
// result.textContent = 'Ahmed Abdul Karim';
// console.log(result)

function add() {
    let num1 = parseInt(document.getElementById("Num1").value);
    let num2 = parseInt(document.getElementById("Num2").value);
    let answer = num1 + num2;
    result.textContent = "Answer : " + answer;
    document.getElementById("Num1").value = ""
    document.getElementById("Num2").value = ""
}
function sub() {
    let num1 = parseInt(document.getElementById("Num1").value);
    let num2 = parseInt(document.getElementById("Num2").value);
    let answer = num1 - num2;
    result.textContent = "Answer : " + answer;
    document.getElementById("Num1").value = ""
    document.getElementById("Num2").value = ""
}
function Product() {
    let num1 = parseInt(document.getElementById("Num1").value);
    let num2 = parseInt(document.getElementById("Num2").value);
    let answer = num1 * num2;
    result.textContent = "Answer : " + answer;
    document.getElementById("Num1").value = ""
    document.getElementById("Num2").value = ""
}
function div() {
    let num1 = parseInt(document.getElementById("Num1").value);
    let num2 = parseInt(document.getElementById("Num2").value);
    let answer = num1 / num2;
    result.textContent = "Answer : " + answer;
    document.getElementById("Num1").value = ""
    document.getElementById("Num2").value = ""
}

// let num1 = "10";
// let temp = parseInt(num1);
// // parseInt(num1)
// console.log(temp);