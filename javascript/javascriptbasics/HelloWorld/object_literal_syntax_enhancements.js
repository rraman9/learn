const name = 'John';
const email='john@doe.com';
const spouse = 'wife';
const john = {
    //name: name is same as below
    name,
    mail: email,
    age:43,
    [spouse]: 'Jane',
    celebrateBirthday() {
        this.age++;
    }
}
// Instead of setting john[spouse]='Jane'
john.celebrateBirthday()
console.log(john)