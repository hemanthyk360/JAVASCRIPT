// unpack the arrays and object into bunch of variables
console.clear();
const Name = 'Guido Van Rossom'

const nameArr = Name.split(' ')
console.log(nameArr)
console.log(typeof(nameArr)) // object


let firstname = nameArr[0]
let middlename = nameArr[1]
let lastname = nameArr[2]

console.log(firstname,"  is firstname ", middlename," is middlename",lastname," is lastname ")

// let [mname,fname,lname] = nameArr // sequence matters a lot here
// console.log(fname)
// console.log(mname)
// console.log(lname)
let [fname,mname,] = nameArr

console.log(fname)
console.log(mname)


// These concepts can also be used for objects

// const person = {
//     f_name:'Guido',
//     m_name:'Van',
//     l_name:'Rossom',
//     age:35,
//     emailid: "123@gmail.com",
//     a:10
// }
// let {l_name,age,emailid} =person //variable name should be that of the key names
// console.log(l_name)
// console.log(age)
// console.log(emailid) 
    


// let {a,b} =person // a and b are not defined as keys of an object person 
// console.log(a)
// console.log(b)


// we can create a new objects as well

// let fname="Tarek"
// let lname="Barakat"
// let p_age =26

// const person_details = {
//     first_name: fname,
//     last_name:lname,
//     Age: p_age
// }
// let {first_name,last_name,Age}=person_details
// console.log(first_name,last_name,Age)

const person_details = { fname,lname,p_age } 

console.log(person_details)