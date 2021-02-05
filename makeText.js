/** Command-line tool to generate Markov text. */
const fs = require('fs');
const axios = require('axios');
const markov = require('./markov');
const process = require('process');


function generateText (text) {
    let marko =  new markov.MarkovMachine(text);
    console.log(marko.makeText())
}


function makeTextFromFile (path){
    fs.readFile(`./${path}`, 'utf8', (err, data) => {
        if (err){
            console.log(err);
            process.exit(1);
        }
        
        generateText(data);
    })
}

async function makeTextFromUrl (url) {
    let res = await axios.get(url);
    generateText(res.data)

}

let args = process.argv.slice(2);


if(args[0] === 'file'){
    makeTextFromFile(args[1])
}else if( args[0] === 'url'){
    makeTextFromUrl(args[1])
}else{
    console.log('Error')
    process.exit(1)
}