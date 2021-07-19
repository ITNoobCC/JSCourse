let money = 10,
    income = 'фриланс',
    addExpenses = 'интернет, такси, комуналка',
    desposit = true,
    mission = 100,
    period = 10;

console.log(typeof(money), typeof(income), typeof(desposit));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split([]));

let budgetDay = mission / 30;
console.log(budgetDay);