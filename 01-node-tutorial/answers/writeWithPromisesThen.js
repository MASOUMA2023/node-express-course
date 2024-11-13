const { writeFile, readFile} = require("fs"). promises;

writeFile('./content/temp.txt', `this id line 1.\n`) 
 .then(() => {  
    return writeFile('./content/temp.txt', `this id line 2.\n`, {flag:'a'})   
    
 })  
 .then(() =>{
     return writeFile('./content/temp.txt', `this id line 3.\n`, {flag:'a'});
 })
 .then(() =>{
    return readFile('./content/temp.txt','utf-8' );
 })
 .then ((data)=>{
console.log('File content');
console.log(data);
 })
 .catch((error) => {  
     console.log("An error occurred: ", error)  
 })  