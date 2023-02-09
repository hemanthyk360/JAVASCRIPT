console.clear();

// function peerson(name,birthyear){

//     this.name=name;
//     this.year=birthyear;

//     this.getDetails = function() {
//         return "Name" + this.name + " and Age is " + (2019-this.year);
//     }
// }

class Person{
    constructor(name,birthyear){
        this.name=name
        this.year=birthyear;
    }
    getDetails = () => {
        return `Name is ${this.name} and the age is ${2023-this.year}`
    }

    add =(a,b) => a+b
}

var john = new Person('John',1988)

console.log(john.getDetails());
console.log(john.name)
console.log(john.year)

// var addition = new Person()

// console.log(addition.add(2,3))

console.log(john.add(3,5))