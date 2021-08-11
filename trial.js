let person={
    name:"eman",
    age:"27"
}

let personJson=JSON.stringify(person)
let fs=require('fs')
fs.writeFileSync('storingjson.json',personJson)
console.log(fs.readFileSync('storingjson.json').toString()) //read json from file
let personObj=JSON.parse(personJson)
// fs.appendFileSync('storingjson.txt',personObj)
console.log(fs.readFileSync('storingjson.json').toString())  //read json & object 
 personObj.name='ali'                                       
 console.log(personObj)                                    //reading modified object
//  fs.appendFileSync('storingjson.json',personObj)
 let personjson2=JSON.stringify(personObj)
 console.log(personjson2)                                 //
 fs.writeFileSync('storingjson.json',personjson2)
 console.log(fs.readFileSync('storingjson.json').toString())  //
//  let lastForm=console.log
