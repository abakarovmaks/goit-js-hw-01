const ADMIN_PASSWORD = "jqueryismyjam";

const password = prompt("Пожалуйста, введите свой пароль:");
console.log(password);
let message;

if (password === null) {
  message = "Отменено пользователем!";
  console.log(message);
} else if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
  console.log(message);
} else {
  message = "Доступ запрещён, неверный пароль!";
  console.log(message);
}

alert(message);
