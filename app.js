let age = prompt("введіть ваш вік:");
if (age >= 18 && age <= 45) {
  console.log("Ви підходите.");
} else {
  console.log("Ви не підходите.");
}
//////////////////////////////////////////////////////////////////
let a = 6;
let b = 8;
if (a > 3 && a < 12 && b >= 5 && b < 13) {
  console.log("true");
} else {
  console.log("false");
}
/////////////////////////////////////////////////////////////////
let amount = prompt("введіть суму вашого депозиту:");
let months = prompt("введіть кількість місяців вашого депозиту:");
let interestRate;
if (months < 6) {
  interestRate = 0.15;
} else if (months >= 6 && months <= 9) {
  interestRate = 0.16;
} else {
  interestRate = 0.17;
}
let totalAmount = amount * (1 + interestRate);
console.log(
  "Через " +
    months +
    " місяців ваш депозит буде коштувати " +
    totalAmount.toFixed(2)
);
