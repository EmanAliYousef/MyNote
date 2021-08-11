const fs=require('fs')
const { title } = require('process')

const AddNotes=(title,body)=>{
    const notes=loadNotes()
    const duplicateTitles=notes.filter((notes)=>{
        return notes.title===title
    })
    if(duplicateTitles.length===0){
    notes.push({
        title,
        body,
    })
    console.log(notes)

    saveNotes(notes)
    console.log('succeeded to add new title')
}
else{
    console.log('Error  duplicated title')
}
}


const loadNotes=()=>{

    try{
       const data= fs.readFileSync('notes.json').toString()
       return JSON.parse(data)
    }
    catch(e){
        return []
    }
}

const saveNotes=(notes)=>{
    const savedata=JSON.stringify(notes)
    console.log(savedata)
    fs.writeFileSync('notes.json',savedata)

}
//////////////////////////////
//////remove notes/////////// 
const removeNotes=(title)=>{
    const notes=loadNotes()
    const notesToKeep=notes.filter((note)=>{
        return note.title !==title
    })
    console.log(notesToKeep)
    saveNotes(notesToKeep)
}
//////////////////////////////////
///////list Notes/////////////////
const listNotes=(()=>{
    const notes=loadNotes()
    notes.forEach(element => {
        console.log(element.title)
        // return notes.element
        
    });
    // console.log(notes)
    // saveNotes(notes)
    
})
/////////////////////////////////
//read notes//////////
const readNotes=((title)=>{
    const notes=loadNotes()
    const note=notes.find((note)=>{
         return note.title===title
    })
     console.log(note)
    
    if(note){
        console.log(note)  //variable name
        console.log(note.title)
        console.log(note.body)
    }


})
///////////////////////////
// const removeNotes=(title)=>{
//     const notes=loadNotes()
//     notes.shift({
//         title
//     })
//     // const notesToKeep=notes.filter((note)=>{
//     //     return note.title !==title
//     // })
//     console.log("successfully deleted")
//     saveNotes(notes)
// }

module.exports={
    add:AddNotes,
    del:removeNotes,
    list:listNotes,
    read:readNotes
  
}