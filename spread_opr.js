// arrays and objects are expanded

// elements in case of array
//key-value pait in case of objects

console.clear();

let mArr1 = [1,2,3,4,5,6,8,9,10]

// let mArr2 = mArr1

let mArr2 = [...mArr1]

// let mArr2 = [...mArr1]
mArr1.push(19)
 
// let mArr2 = [...mArr1]

// console.log(mArr1)
// console.log(mArr2)

// let mArr3 = mArr1.concat(mArr2)
// console.log(mArr3)

// let mArr3 = [...mArr1,...mArr2]
// console.log(mArr3)

let mArr3 = [...mArr2,...mArr1] // sequence also matters
// console.log(mArr3)
 let mArr4 = [0,...mArr1,...mArr2,10] // we can also add elements 
console.log(mArr4)
// console.log(mArr3)

// with respect to objects

// let mobj ={first_name:'A', Last_name:'B'}

// let mobj1 ={age:28}

// let mobj3 = {...mobj,...mobj1}

// console.log(mobj3) // new object with keys of mobj and mobj1

