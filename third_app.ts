// let a:boolean=true

// let b:string="Hemanth"

// var k:number=12323232

// var n:number=12.232

// console.log(a,b,k,n)
enum LanguageKnown{'English', 'Malay', 'Chinese','Tamil'}
export {LanguageKnown}

let Student21 = {
    Name:"Hemanth",
    Age:30,
    Phone:12345678,
    Address:"KL",
    languages:LanguageKnown[0]
}

let listofstudents = [{Name: "Adrian", Age:23, Phone:1902323, Address:"KL"},
    {Name: "Anas Zaki", Age:22, Phone:987628323, Address:"KL"},
    {Name: "Hemawathy", Age:21, Phone:18478323, Address:"KL"},
    {Name: "Rohan", Age:20, Phone:111128323, Address:"KL"}]

listofstudents.push(Student21)

console.log(listofstudents)

// for (let index = 0; index < listofstudents.length; index++) {
//     const element = listofstudents[index];
//     console.log(element)
// }