let money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: true,
  expenses: {},
  income: [],
  savings: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", "");
  let b = prompt("Во сколько обойдется?", "");

  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    console.log("DONE!");
    appData.expenses[a] = b;
  } else {
    alert (money);
    alert (time);
  }

  appData.moneyPerDay = appData.budget / 30;
}

alert("Ежедневный бюджет: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка :( ");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка...");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка!");
} else {
  console.log("Произошла ошибка.");
}
