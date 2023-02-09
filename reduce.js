console.clear();


const arr = [11,12,13,14,15,16]

// arr.reduce((acc, item)=>{
//     console.log(item)
//     console.log(acc)
// },1)


// arr.reduce((acc, item)=>{
//     console.log(item)
//     console.log(acc)
//     return acc+1
// })

const mArr = [{
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
]

const result = mArr.reduce((acc, item)=>{
    console.log(item)
    // console.log(acc)
     return acc+item.experience
},0)

console.log(result) // at the end it will show the summation