//const validator = require('validator');
const chalk = require('chalk');
const { string } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js')

//default yargs version 1.0.0. Customiing yargs version
yargs.version('1.2.0');


//add remove read list

//Create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builer : ({
        title:{
            describe:'Note title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:"Note Body",
            demandOption:true,
            type: 'string'
        }
    }),
    handler: (argv) => {
        notes.addNotes(argv.title,argv.body);
    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builer : ({
        title:{
            describe:'note title',
            demandOption: true,
            type: 'string',
        }
    }),
    handler:(argv)=>{
        notes.removeNote(argv.title);
    }
})

//Create read command
yargs.command({
    command:'read',
    describe:'Reads a note',
    bundler:({
        title:{
            describe:'Note title',
            demandOption:true,
            type: 'string'
        }
    }),
    handler:(argv)=>{
        notes.readNote(argv.title);
    }
})

//Create list command
yargs.command({
    command:'list',
    describe:'list notes',
    handler:()=>{
        notes.listNotes();
    }
})

yargs.parse()
//console.log(yargs.argv);
