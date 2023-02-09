console.clear();

const mArr = [1,2,3,4,5,6] // array elements

// const mArr = [{
//     name: 'Guido Van Rosson',
//     experience:20,
//     salary: 45000000
// },
// {
//     name: 'Elon Musk',
//     experience:30,
//     salary: 450000000000
// },
// {
//     name: 'Mark Zkuerberg',
//     experience:25,
//     salary: 450000000
// },
// ]

// let newArr = []

// const doubleValues = (item) =>{
//     return item*2;
// }
// for(let i=0;i<mArr.length;i++)
// {
//     // newArr.push(mArr[i]*2)

//     newArr.push(doubleValues(mArr[i]))
    
// }
let newArr = mArr.map((item,i) =>{ //(data, pos)
    console.log(`${item} at pos ${i}`)
    return item*2;
})


// let newArr = mArr.map((data) =>{ //(data, pos)
//     // console.log(`${item} at pos ${i}`)
//     // console.log(data)
//     return {
//         name:data.name,
//         experience:data.experience

//     };
// })

console.log(mArr)
console.log(newArr)