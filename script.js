// Реалізуйте клас Worker(Працівник), який буде мати такі властивості: firstName(ім'я), secondName (прізвище), rate(ставка за день роботи), days(кількість відпрацьованих днів). Також клас повинен мати метод getSalary(), який буде виводити зарплату працівника. Зарплата - це множення ставки rate на кількість відпрацьованих днів days.

"use strict";

class Worker {
  constructor(firstName, secondName, rate, days) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
  }
  get name(){
    return this.firstName;
  }
  get surname(){
    return this.secondName;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

let worker = new Worker("Ivan", "Ivanov", 10, 31);
console.log(worker.name);
console.log(worker.surname);
console.log(`Ставка`);
console.log(worker.rate);
console.log(`Кількість відпрацьованих днів`);
console.log(worker.days);
console.log(worker.getSalary());

console.log(`**********Worker 2**********`);
let worker2 = new Worker('Volodymyr', 'Zelenski', 30, 31)
console.log(worker2.name);
console.log(worker2.surname);
console.log(`Ставка`);
console.log(worker2.rate);
console.log(`Кількість відпрацьованих днів`);
console.log(worker2.days);
console.log(`Зарплата:`);
console.log(worker2.getSalary());

console.log(`**********Worker 3**********`);
let worker3 = new Worker('Verka', 'Serdiuchka', 100, 31)
console.log(worker3.name);
console.log(worker3.surname);
console.log(`Ставка`);
console.log(worker3.rate);
console.log(`Кількість відпрацьованих днів`);
console.log(worker3.days);
console.log(`Зарплата:`);
console.log(worker3.getSalary());

