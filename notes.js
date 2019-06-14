
const fs=require('fs')
const chalk=require('chalk')

const readNotes=(title) => {
    const notes=loadNotes()
    const note=notes.find((note)=>title===note.title)

    if(note){
        console.log(chalk.white.inverse.underline(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('No note found!'))
    }
    
}

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.white.inverse('Your notes:\n'))
    notes.forEach(note => {        
        console.log(chalk.blue.inverse(note.title+'\n'))
    })
}

const addNote=(title,body)=>{
    const notes=loadNotes()
    //const duplicateNotes=notes.filter((note)=>note.title===title) 

    // const duplicateNotes=notes.filter(function(note){
    //     return note.title===title
    // })

    const duplicateNote=notes.find((note)=>{
        return title===note.title
    })
    if(!duplicateNote){    
    notes.push({
        title: title,
        body: body
    })
    console.log(chalk.green.inverse('Note added successfully!'))
    }else{
        console.log(chalk.red.inverse("Note title taken!"))
    } 
    saveNotes(notes)
    console.log(notes)
}

const removeNote=(title)=>{
    console.log('Note being removed: '+title)
    const notes=loadNotes()
    const newNotes=notes.filter((note)=>note.title!==title)
    if(newNotes.length===notes.length){
        console.log(chalk.red.inverse("No note found!"))
    }else{
        console.log(chalk.green.inverse("Note removed successfully!"))
    }
    saveNotes(newNotes)
    console.log(newNotes)

}

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        const data=JSON.parse(dataJSON)
        return data
}
    catch(e){
        return []
    }    
}

module.exports={
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}