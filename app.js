const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')

yargs.version('1.1.0')

//Create add command
yargs.command({


    command:'add',
    describe:'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Note Body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        console.log(argv.titles,argv.body)
        notes.addNote(argv.title,argv.body)
    }
})

//Adding a remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)        
    }
})

yargs.command({
    command:'list',
    describe:'List out your notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read your notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv){
        notes.readNotes(argv.title)
    }
})



//add, remove, read, list
yargs.parse()
//console.log(yargs.argv)


//npm init in command line
// const validator=require('validator')
// console.log(validator.isURL('example@gmail.com'))

//npm install nodemon -g (gloal installs)
//nodemon app.js
//ctrl+c to stop nodemon





// const msg=getNotes()
// console.log(msg)
// console.log(chalk.blue.inverse('Success!'))
// console.log(process.argv[2])



//Debugging 
//node inspect app.js....
//chrome://inspect
//restart

//npm init -y
//then install whatever you want




