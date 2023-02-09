console.clear();

const ssum = (n1, n2) => console.log(n1+n2);


const sums = (...args) => { //const sums = (num1, num2, ...args)
                                // console.log(num1)
                                // console.log(num2)
                                // console.log(args)
    let sum = 0
    for(let i=0; i<args.length;i++)
    {
        sum+=args[i]
    }
    // console.log(sum);
    return sum
}
//console.log(args);
// rest operator should be always at the end 
// if you specify it at the beginning then it will give you an error
// const sums = (....args, num1, num2)

// console.log(ssums(1,2,3,4,5)) // add the respective elements 
console.log(sums(1,2,3,4,5)) // elements are saved as array elements