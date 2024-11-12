const { writeFile } = require('fs')
console.log("at start");
writeFile('./temporary/output.txt', "This is line 1\n", (err,result) =>{
    console.log("at point 1");
    if (err){
        console.log("this error happend:",err);
        return;
    } 
        writeFile('./temporary/output.txt', "This is line 2\n",{flag:'a'}, (err,result) =>{
            console.log("at point 2");
            if (err){
                console.log("this error happend:",err);
                return;
            }
            
            writeFile('./temporary/output.txt', "This is line 3\n", {flag:'a'}, (err,result) =>{
            console.log("at point 3");
            if (err){
                console.log("this error happend:",err);
                return;
            }
        console.log("at end")
});
        });
    });

