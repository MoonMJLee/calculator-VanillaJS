// const el = function(element) {
//   if (element.charAt(0) === "#") { // If passed an ID...
//     return document.querySelector(element); // ... returns single element
//   }
//   return document.querySelectorAll(element); // Otherwise, returns a nodelist
// };

const resultInput = document.querySelector(".js-result"),
  equals = document.querySelector(".btnequals"),
  nums = document.querySelectorAll(".btnnums"),
  ops = document.querySelectorAll(".btnops"),
  reset = document.querySelector(".btnreset");
let firstValue = 0;
let secondValue = 0;
let cal = "";

function handleNumber(event) {
  if (cal === "") {
    firstValue = firstValue * 10 + Number(event.target.value);
    resultInput.innerHTML = firstValue;
  } else {
    secondValue = secondValue * 10 + Number(event.target.value);
    resultInput.innerHTML = secondValue;
  }
}

function handleEquals() {
  if (cal === "+") {
    firstValue += secondValue;
  } else if (cal === "-") {
    firstValue -= secondValue;
  } else if (cal === "*") {
    firstValue *= secondValue;
  } else if (cal === "/") {
    firstValue /= secondValue;
  }
  secondValue = 0;
  resultInput.innerHTML = firstValue;
}

function handleCalculate(event) {
  handleEquals();
  cal = event.target.value;
}

function handleClear() {
  firstValue = 0;
  secondValue = 0;
  cal = "";
  resultInput.innerHTML = 0;
}

for (let i = 0, len = nums.length; i < len; i++) {
  nums[i].addEventListener("click", handleNumber);
}

for (let i = 0, len = ops.length; i < len; i++) {
  ops[i].addEventListener("click", handleCalculate);
}

equals.addEventListener("click", handleEquals);
reset.addEventListener("click", handleClear);

// function insert(num) {
//   resultInput.value = resultInput.value + num;
// }
// function calculate() {
//   const result = eval(resultInput.value); // 식을 계산하고 result 변수에 저장
//   document.getElementById("result").value = result;
// }

// function clear() {}

// function init() {}
// init();
