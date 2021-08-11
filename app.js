// const fs=require('fs');
// fs.writeFileSync('notes.txt','hello');
// // console.log(fs.readFileSync('notes.txt'))
// console.log(fs.readFileSync('notes.txt').toString())
// fs.appendFileSync("notes.txt", " Good Morning EveryBody");
// console.log(fs.readFileSync('notes.txt').toString())
// const x =require('./data');
// console.log(x.add(4,8));
///////////////////
// const validator=require('validator')
// console.log(validator.isEmail('eman@gmail.com'))
// /////////////
// const chalk = require('chalk');



// console.log(chalk.bgMagenta('Hello world!'));
// console.log(chalk.bold('Hello world!'));
// const { describe } = require("yargs");
//v 1
// const yargs = require("yargs");
// yargs.command({
// command:'add',
// describe:'add Notes',
// handler:()=>{
// console.log('add notes')
// }
// })


// // })
// // console.log(yargs.argv)
// // yargs.parse()

// //const yargs = require("yargs");
// yargs.command({
// command:'read',
// describe:'read Notes',
// handler:()=>{
// console.log('read notes')
// }
// })

// // })
// // console.log(yargs.argv)

// // const yargs1 = require("yargs");
// yargs.command({
// command:'delete',
// describe:'delete Notes',
// handler:()=>{
// console.log('delete notes')
// }


// })
// // console.log(yargs.argv)

// // const yargs = require("yargs");
// yargs.command({
// command:'list',
// describe:'list Notes',
// handler:()=>{
// console.log('list notes')
// }


// })
// // console.log(yargs.argv)
// yargs.parse()
/////////////
const notes=require('./notes')
const yargs = require("yargs");
yargs.command({
command:'add',
describe:'add Notes',
builder:{
    title:{
    describe:'this is add title',
    demandOption:true,
    type:'string'
    },
    body:{
        describe:'this is add body',
        demandOption:true,
        type:'string'
        },

},


handler:(argv)=>{
// console.log(argv.title)
// console.log(argv.body)
notes.add(argv.title,argv.body)
}
})


// })
// console.log(yargs.argv)
// yargs.parse()

//const yargs = require("yargs");
yargs.command({
command:'read',
describe:'read Notes',
builder:{
    title:{
    describe:'this is read title',
    demandOption:true,
    type:'string'
    },
   

},
handler:(argv)=>{
    notes.read(argv.title)
    // console.log('reading notes title',argv.title)
   
}
})

// })
// console.log(yargs.argv)

// const yargs1 = require("yargs");
yargs.command({
command:'delete',
describe:'delete Notes',
builder:{
    title:{
    describe:'this is read title',
    demandOption:true,
    type:'string'
    },
   

},
handler:(argv)=>{
// console.log('deleting notes title',argv.title)
notes.del(argv.title)
}


})
// console.log(yargs.argv)

// const yargs = require("yargs");
yargs.command({
command:'list',
describe:'list Notes',
handler:(argv)=>{
    notes.list(argv)
// console.log('list notes')
}


})
console.log(yargs.argv)
// yargs.parse()