const numArr = [1,2,3,4,5,6,7]
console.clear();

const mArr = [ //opening an array
{
    name: 'Guido Van Rosson',
    experience:20,
    salary: 45000000
},
{
    name: 'Elon Musk',
    experience:30,
    salary: 450000000000
},
{
    name: 'Mark Zkuerberg',
    experience:25,
    salary: 450000000
},
{
    name: 'Zkuerberg',
    experience:45,
    salary: 450000000000
},
] // closing array

// const newArr = numArr.map(item =>{
//     return item*2    
// })

// console.log(newArr)

const resultArr = mArr.filter(item =>{
    
    console.log(item.experience) 

    return item.experience>=35
   

})
console.log(resultArr)