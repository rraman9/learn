export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    celebrateBirthday() {
        this.age++;
    }

    // creates a bound method for every object, this refers to the
    celebrateBirthday2 = () => {
        console.log(this);
        this.age++;
    }
}
class Employee extends Person {
    static sayHello() {
        console.log('Hello');
    }
    constructor(name, age, role, dept) {
        super(name, age);
        this.role = role;
        this.dept = dept;
    }
    promote() {
        this.role = `Senior ${this.role}`;
    }
    celebrateBirthday() {
        super.celebrateBirthday();
        console.log(`Happy Birthday ${this.name}`);
    }
}
const john = new Employee("John", 33, 'developer', 'IT');
john.promote();
john.celebrateBirthday();
console.log(john);
Employee.sayHello();