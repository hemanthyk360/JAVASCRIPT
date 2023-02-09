console.clear();
const mArr = [-10,-2,-3,4,-5,-6] // array elements
const mArr1 = [1,3,5,7,4,6,8,10] 

// const result = mArr1.find(item =>{
//     // return true // first element is retrieved
//     // return false// no element matched or not found - undefined
//     return item %2==0 && item>=0
// })

const res = mArr.findIndex(item => {
   return (
            item%2==0 && item>0
        
            )
})

console.log(res)
// console.log(result)