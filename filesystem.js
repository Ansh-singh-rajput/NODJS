const f = require('fs')
//console.log
//Async
// f.readFile(__dirname + "/user.txt" , "utf-8" ,(err , data) => {
//     if (err) throw err;
//     console.log(data);
// });

// console.log("hello world");

//Sync 
const data = f.readFileSync(__dirname + "/user.txt" , "utf-8");
console.log(data);
console.log("hello");

try{
    const data = f.readFileSyn(__dirname + "/user.txt", "utf-8");
    console.log(data);
} catch (error){
    console.log(error);
}

console.log("hello gwalior");
console.log("hello gwalior people ");





 