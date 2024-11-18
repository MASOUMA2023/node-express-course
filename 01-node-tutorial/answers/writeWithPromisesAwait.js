const {writeFile, readFile} = require("fs"). promises;
async function writer() {
    try { 
        await writeFile('./content/temp.txt', `this is line 1.\n`);
        await writeFile('./content/temp.txt',  `this is line 2.\n`,{flag:'a'});
        await writeFile('./content/temp.txt', `this is line 3.\n`, {flag:'a'});
        console.log('written successfully')
    } catch(err){
console.log('error writing to file:',err);
    }
}

async function reader(){
    try{
        const data = await readFile('./content/temp.txt', 'utf-8');
        console.log('File content:');
        console.log(data);
    } catch(err){
        console.log('Error reading file:',err);
    }
}

async function readWrite(){
    await writer();
    await reader();

}
readWrite();