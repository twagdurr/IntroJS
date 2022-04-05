// sign up form

// name, age, address

// let married = false;
let person = {
    name: "John",
    age: 25,
    address: "123 Main Street"
}

let person2 = {
    name: "Sally",
    age: 23,
    address: "4321 Broadway Street",
    friends: ['Jackie', 'Oliver', "Neil"]
}

console.log(person2)

// add married to person 2
person2.married = false;
console.log(person2)

// // person is an object
// console.log(typeof (person))

// // married is boolean
// console.log(typeof (married))

//Prints John
console.log(person.name)

//Print John is 25 years old and lives at 123 Main Street
// // back tick - top row ``. Works same as ""
// console.log(`${person.name} is ${person.age} years old and lives at ${person.address}`);

// //Same thing for person2
// console.log(`${person2.name} is ${person2.age} years old and lives at ${person2.address}`);

//Array (still an object)
let people = [person, person2];
// console.log(typeof (people));

// console.log(people[1])
console.log(people[1].name)

people.forEach(p => {
    console.log(p.name);
})

people.forEach(p => {
    console.log(`${p.name} is ${p.age} years old and lives at ${p.address}`);
})