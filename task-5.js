const countryName = "Индия";

const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В вашей стране доставка недоступна.";
const CHINA = "Китай";
const CHILE = "Чили";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
  switch (country) {
    case CHINA:
      price = 100;
      break;

    case CHILE:
      price = 250;
      break;

    case AUSTRALIA:
      price = 170;
      break;

    case INDIA:
      price = 80;
      break;

    case JAMAICA:
      price = 120;
      break;

    default:
      message = alert(NO_DELIVERY);
  }
}
if (price > 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);
