const credits = 23580;
const pricePerDroid = 3000;

const purchase = prompt("Какое количество дроидов Вы хотите купить?");
console.log(purchase);
let totalPrice = purchase * pricePerDroid;
let balanceCredit = credits - totalPrice;
let message;

if (purchase === null) {
  message = "Отменено пользователем!";
} else if (balanceCredit > -1) {
  message = `Вы купили ${purchase} дроидов, на счету осталось ${balanceCredit} кредитов.`;
} else message = "Недостаточно средств на счету!";

console.log(message);
