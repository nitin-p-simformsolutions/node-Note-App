const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your text...'
}

const addNotes = (title,body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note)=>{
    //     return note.title === title;
    // })
    const duplicateNote = notes.find((note)=>{
        return note.title === title;
    })
    //console.log(duplicateNotes);
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.bgCyanBright.bold('New Notes Added'));
    }else{
        console.log(chalk.bgRed('Note title taken'));
    }
}

const removeNote = (title)=>{
    const notes = loadNotes();
    const itemToKeep = notes.filter((note)=>{
        return note.title !== title;
    });
    if(itemToKeep.length < notes.length){
        saveNotes(itemToKeep);
        console.log(chalk.bgGreen('Notes Removed'));
    }else{
        console.log(chalk.bgRed.bold('No note found'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes :'));
    notes.forEach(note => {
        console.log(chalk.greenBright('Title : ')+note.title+" and"+chalk.greenBright(' Description : ')+note.body);
    });
}

const readNote = (title) =>{
    const notes = loadNotes();
    const note = notes.find((note)=>note.title === title);
    if(note){
        console.log(chalk.greenBright('Title : ')+note.title+chalk.greenBright(' Description : ')+note.body);
    }else{
        console.log(chalk.red.inverse('unable to find note'));
    }
    
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json',data);
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
    
}

module.exports = {
    getNotes:getNotes,
    addNotes:addNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote,
};










//From app.js for demo 
// const name = 'nitin';
//console.log(add(5,4));
//console.log(chalk.bgGreenBright(getNotes()));
// console.log(chalk.bold.bgCyanBright('Success!!!'));

// console.log(validator.isEmail('foo@bar.com'));
// console.log(validator.isURL('https://ead.io'));

// console.log(chalk.greenBright('hello from chalk'));