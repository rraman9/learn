const nums1 = [1,2,3,4];
const nums1Copy = [...nums1];
nums1Copy[2]=55;
nums1Copy[3]++;
console.log(nums1);
console.log(nums1Copy);

const persons = [
    {name: 'A', age: 20},
    {name: 'B', age: 25},
    {name: 'C', age: 30},
];
const persons1 = [...persons];
persons1[1].age= 35;
persons1DeepCopy = persons.map(person => {
    return {
        ...person
    }
});
persons1DeepCopy[1].age = 45;
console.log(persons);
console.log(persons1);
console.log(persons1DeepCopy);