let money, time;

function start(){

    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", "");
    }

}
start();



let appData = {
  budget: money,
  timeData: true,
  expenses: {},
  income: [],
  savings: true,
  optionalExpenses: {},
  chooseExpenses: function(){
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
          console.log ("bad result");
          i--;
        }
      }
  },

    detectDayBudget: function(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },

    detectLevel: function(){
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
    },

    checkSavings: function() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", "");
        let precent = +prompt("Под какой процент?");
        appData.mothIncome = save/100/12*precent;
        alert("Доход в месяц с вашего депозита: " + appData.mothIncome);
    }
    },

    chooseOptExpenses: function(){

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
    },

    chooseIncome: function () {
        // ......................................................................................задаем функцию
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        // ......................................................................................проверяем условия
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }


};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}









