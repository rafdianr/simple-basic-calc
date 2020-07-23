function mul() {
  num1 = parseFloat(document.getElementById("firstNumber").value);
  num2 = parseFloat(document.getElementById("secondNumber").value);
  document.getElementById("result").innerHTML = `${num1} x ${num2} = ${num1*num2}`;
}

function div() {
  num1 = parseFloat(document.getElementById("firstNumber").value);
  num2 = parseFloat(document.getElementById("secondNumber").value);
  document.getElementById("result").innerHTML = `${num1} / ${num2} = ${num1/num2}`;
}

function add() {
  num1 = parseFloat(document.getElementById("firstNumber").value);
  num2 = parseFloat(document.getElementById("secondNumber").value);
  document.getElementById("result").innerHTML = `${num1} + ${num2} = ${num1+num2}`;
}

function sub() {
  num1 = parseFloat(document.getElementById("firstNumber").value);
  num2 = parseFloat(document.getElementById("secondNumber").value);
  document.getElementById("result").innerHTML = `${num1} - ${num2} = ${num1-num2}`;
}