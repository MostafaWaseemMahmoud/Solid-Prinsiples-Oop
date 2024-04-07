// OOP

//Abctraction

// User Doesn't have depend On Property In Class He Don't want

class Employe {
  #MonthlySalary;
  constructor(name, age, BaseSalary) {
    this.name = name;
    this.age = age;
    this.BaseSalary = BaseSalary;
    this.#MonthlySalary = 1000;
  }

  #getbaseSlary() {
    let FinlaySalary = this.BaseSalary + this.#MonthlySalary;
    console.log("FinlaySalary: " + FinlaySalary);
  }

  getEmpDetails() {
    console.log(`name: ${this.name} | age: ${this.age}`);
    this.#getbaseSlary();
  }
}

Emp1 = new Employe("Mostafa", 20, 2000);
Emp1.getEmpDetails();

// Encapsulation

// User Doesn't have depend On All Properties In Class

class Programer {
  #c;
  #i;
  constructor(UserName, Id, Computersalary) {
    this.u = UserName;
    this.#i = Id;
    this.#c = Computersalary;
  }

  ConvertIdFromTextToNumber() {
    return `id: ${this.#i}`;
  }

  getComputerSalary() {
    return `Computersalary: ${parseInt(this.#c) - parseInt(this.#i)} EGP`;
  }
}

let programerOne = new Programer("Abdelhamed", 2, "12 Gneh");

console.log(`Name: ${programerOne.u}`);
console.log(programerOne.ConvertIdFromTextToNumber());
console.log(programerOne.getComputerSalary());

// Polymorphism

// OverRiding

// Two Methonds By Same Name But Onthor Function

class animal {
  AnimalSound() {
    console.log("Animal Make Sound");
  }
}

class dog extends animal {
  AnimalSound() {
    console.log("Dog Make Sound");
  }
}

class cat extends dog {
  AnimalSound() {
    console.log("cat Make Sound");
  }
}

// OverLoading

// Two Functions By Same Name But Onthor Params

function mostafa(name) {
  console.log("name " + name);
}

function mostafa(Number, name) {
  console.log("Number " + Number);
  console.log("Number Of Name" + name);
}

mostafa("mostafa");
console.log("###############");
mostafa(12, 12);

// Inheritance

// Child Class Extend parent Class oR Parent Class Extends Child Class

class Parent {
  constructor(name) {
    this.name = name;
    console.log("name: ", this.name);
  }
}

class Child extends Parent {}

Child1 = new Child("mostafa");

// Solid Principles

// Single Responsilty Principle

// The Single Class Has One Method To do

class ConvertTextToNumber {
  constructor(text) {
    this.text = text;
  }
  ConvertTextToNumber() {
    return parseInt(this.text);
  }
}

text = new ConvertTextToNumber("20 Gneh");

class ShowNumber {
  constructor() {
    this.Number = text.ConvertTextToNumber();
  }

  showFinaly() {
    console.log(this.Number);
  }
}

Finaly = new ShowNumber();

Finaly.showFinaly();

// Open Closed Principles

// - classes should be open for Extend but  closed for Edit.

class Printer {
  constructor(content) {
    this.content = content;
  }

  print() {
    console.log(this.content);
  }
}

class Formatter {
  format(content) {
    return content;
  }
}

class FormattedPrinter extends Printer {
  constructor(content, formatter) {
    super(content);
    this.formatter = formatter;
  }

  print() {
    const formattedContent = this.formatter.format(this.content);
    console.log(formattedContent);
  }
}

const plainTextPrinter = new Printer("MOSTAFA SASA.");
plainTextPrinter.print();

// Liskov Subtitution Principle

class Bird {
  fly() {
    return "Flying high";
  }
}

class Duck extends Bird {
  quack() {
    return "Quack quack";
  }
}

function performFlight(animal) {
  return animal.fly();
}

const bird = new Bird();
const duck = new Duck();

console.log(performFlight(bird));
console.log(performFlight(duck));

// Interface Segregation Principles

//Clients should not be forced to depend on interfaces they do not use.

class Programer1 {
  #c;
  #i;
  constructor(UserName, Id, Computersalary) {
    this.u = UserName;
    this.#i = Id;
    this.#c = Computersalary;
  }

  ConvertIdFromTextToNumber() {
    return `id: ${this.#i}`;
  }

  getComputerSalary() {
    return `Computersalary: ${parseInt(this.#c) - parseInt(this.#i)} EGP`;
  }
}

let programerOneOne = new Programer1("Abdelhamed", 2, "12 Gneh");

console.log(`Name: ${programerOne.u}`);
console.log(programerOne.ConvertIdFromTextToNumber());
console.log(programerOne.getComputerSalary());

//Dependency Inversion Principle

//	   -  High-level modules should not depend on low-level modules but it need to have depend on all childs it need.

function personal(task) {
  console.log(`Task Is On Prosses: ${task}`);
}

function taskProsses(taskFunction) {
  this.prosses = taskFunction;
}

const person = new taskProsses(personal);

person.prosses(`Make tea`);
