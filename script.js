console.log(`___________________ Exercise 1 ___________________`);
("use strict");

class Worker {
  constructor(firstName, secondName, rate, days) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
  }
  get name() {
    return this.firstName;
  }
  get surname() {
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
let worker2 = new Worker("Volodymyr", "Zelenski", 30, 31);
console.log(worker2.name);
console.log(worker2.surname);
console.log(`Ставка`);
console.log(worker2.rate);
console.log(`Кількість відпрацьованих днів`);
console.log(worker2.days);
console.log(`Зарплата:`);
console.log(worker2.getSalary());

console.log(`**********Worker 3**********`);
let worker3 = new Worker("Verka", "Serdiuchka", 100, 31);
console.log(worker3.name);
console.log(worker3.surname);
console.log(`Ставка`);
console.log(worker3.rate);
console.log(`Кількість відпрацьованих днів`);
console.log(worker3.days);
console.log(`Зарплата:`);
console.log(worker3.getSalary());

console.log(`___________________ Exercise 2 ___________________`);

// Реалізуйте клас MyString, який матиме наступні методи: метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(), який параметром приймає рядок, а повертає цю ж рядок, зробивши її першу букву заголовної та метод ucWords(), який приймає рядок і робить капіталізації першої літери кожного слова цього рядка. Використовує cучасний class.

class MyString {
  // параметром приймає рядок, а повертає її в перевернутому вигляді
  reverse(stringReverse) {
    return stringReverse.split("").reverse().join("");
  }

  //параметром приймає рядок, а повертає цю ж рядок, зробивши її першу букву заголовної
  ucFirst(stringFirstUp) {
    if (typeof stringFirstUp !== "string") return "";
    return stringFirstUp.charAt(0).toUpperCase() + stringFirstUp.slice(1);
  }

  // приймає рядок і робить капіталізації першої літери кожного слова цього рядка
  ucWords(allWordSrtUp) {
    return allWordSrtUp.replace(/(?:^|\s)(\S)/gu, (m) => m.toUpperCase());
  }
}

const str = new MyString();
console.log(str.reverse("IVAN"));
console.log(str.ucFirst("arsenal"));
console.log(str.ucWords("arsenal arsenal arsenal"));

console.log(`___________________ Exercise 3 ___________________`);

class CoffeeMake {
  constructor(сlassOfCoffy, typOfCoffee) {
    this.сlassOfCoffy = сlassOfCoffy;
    this.typOfCoffee = typOfCoffee;
  }
  on() {
    console.log("Привіт! Яку каву бажаєш?");
    console.log("...замовлення прийняте, очікуйте будь ласка");
  }
  off() {
    console.log("Cмачного!");
  }
}

console.log(
  `************************ Drip Coffee Machine ************************`
);

class DripCoffeeMachine extends CoffeeMake {
  constructor(сlassOfCoffy, typOfCoffee, typeOfSugar){
    super(сlassOfCoffy, typOfCoffee);
    this.typeOfSugar = typeOfSugar;
  }
  makingCoffee(){
    console.log(
      `Ваше ${this.сlassOfCoffy} на ${this.typOfCoffee}, з ${this.typeOfSugar} цукром, готове`
    );
  }
}

let yourCoffee = new DripCoffeeMachine("лате", "арабіці", "тростинним");
yourCoffee.on();
yourCoffee.makingCoffee();
yourCoffee.off();

console.log(
  `*********************** Cornish Coffee Machine **********************`
);

class CornishCoffeeMachine extends CoffeeMake {
  constructor(сlassOfCoffy, typOfCoffee, temperature){
    super(сlassOfCoffy, typOfCoffee);
    this.temperature = temperature;
  }
  makingCoffee2(){
    console.log(
      `Ваше ${this.сlassOfCoffy} на ${this.typOfCoffee}, приготовне на температурі води ${this.temperature} С°, готове`
    );
  }
}

let yourCoffeeCornish = new CornishCoffeeMachine("капучіно", "рабусті", "90");

yourCoffeeCornish.on();
yourCoffeeCornish.makingCoffee2();
yourCoffeeCornish.off();

console.log(
  `*********************** Original Coffee Machine **********************`
);

class OriginalCoffeeMachine extends CoffeeMake {
  constructor(сlassOfCoffy, typOfCoffee, temperature, filter1){
    super(сlassOfCoffy, typOfCoffee);
    this.temperature = temperature;
    this.filter1 = filter1;
  }
  makingCoffee3(){
    console.log(
      `Ваше ${this.сlassOfCoffy} на ${this.typOfCoffee}, приготовне на температурі води ${this.temperature} С° та ${this.filter1} фільтрі, готове`
    );
  }
}

let originalCoffeeCornish = new OriginalCoffeeMachine(
  "ристретто",
  "ексцельзі",
  "110",
  "паперовому"
);

originalCoffeeCornish.on();
originalCoffeeCornish.makingCoffee3();
originalCoffeeCornish.off();
