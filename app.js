/* TUTORIAL 1 */
/* HOW TO: REQUIRE and EXPORT */
// const tutorial = require('./tutorial'); // ./ means it's in the same folder
// console.log(tutorial.sum(2,5)); //prints out 'what' tutorial is holding
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

/* TUTORIAL 2 */
/* HOW TO: EVENT EMITTER */
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();//Create new instance of eventEmitter
//
// eventEmitter.on('tutorial', (num1,num2)=>  {
//   console.log('tutorial event has occured:' + (num1 + num2));
// });//2 Arguments: First, listener you want to attach.
//                               //Second arg: Function you want to execute when event occurs.
//
// eventEmitter.emit('tutorial', 5,6);//Emits a tutorial event
//
// class Person extends EventEmitter{
//   constructor(name){
//     super();
//     this._name = name;
//
//   }
//
//   get name(){
//     return this._name;
//   }
// }
//
// var pedro = new Person('Pedro');
// var diana = new Person('Diana');
// //EVENT LISTENER
// pedro.on('name', ()=>{
//   console.log('My name is: ' + pedro.name);
// });
//
// diana.on('name', ()=>{
//   console.log('My name is: ' + diana.name);
// });
//
// //EMITS ABOVE EVENT
// pedro.emit('name');
// diana.emit('name');


//TUTORIAL 3
//HOW TO: readline module
// const readline = require('readline');
// const rl = readline.createInterface({input : process.stdin,
//                           output: process.stdout}); //create readline interface
//                                             //{] takes 2 properties
// var num1 = Math.floor((Math.random() * 10) + 1);
// var num2 = Math.floor((Math.random() * 10) + 1);
// var answer = num1 + num2;
//
// rl.question('What is ${num1} + ${num2} \n?', (userInput)=>{
//   if(userInput.trim() == answer){
//     console.log('condition met');
//     rl.close();
//   }else{
//     rl.setPrompt('Incorrect response, try again.\n');
//     rl.prompt();
//     rl.on('line',(userInput)=>{
//       if(userInput.trim() == answer)
//       rl.close();
//       else{
//         rl.setPrompt('Your answer of ${userInput} is wrong, try again');
//         rl.prompt();
//       }
//     });
//   }
// });//(userInput) gets user input
//
// rl.on('close'),()=>{ //THIS will only trigger when close() (line 62) is called
//   console.log('CORRECT!');
// };

//TUTORIAL 4
//HOW TO: FILE SYSTEM module
// const fs = require('fs');

//CREATING A FILE
// fs.writeFile('example.txt', "this is an example", (err)=>{ //(err) is callback in case somethin
//                                                             //goes wrong. I think kind of
//                                                             //like an error handler.
//   if(err)
//     console.log(err);
//   else
//     console.log('File successfully created');
//     fs.readFile('example.txt','utf8',(err, file)=>{
//       if(err)
//         console.log(err);
//       else
//         console.log(file);
//     }); //arg1: name of file, arg2: encoding type, arg3: callback
// });

//RENAME A FILE
// fs.rename('example.txt', 'example2.txt', (err)=>{
//   if(err)
//     console.log(err);
//   else {
//     console.log('Successfully renamed the file!')
//   }
// });

//APPEND DATA TO FILE
// fs.appendFile('example2.txt', 'some data being appended', (err)=>{
//   if(err)
//     console.log(err);
//   else {
//     console.log('successfully appended data to file!');
//   }
// } ); //arg1: name of file, arg2: data, arg3: callback

//DELETE A FILE
// fs.unlink('example2.txt', (err)=>{
//   if(err)
//     console.log(err);
//   else
//     console.log('successfully deleted the file');
// });

//TUTORIAL 5
//PART 2 of FILE SYSTEM MODULE (FOLDERS)
//mkdir, unlink, rmdir, readdir
// const fs = require('fs');
// fs.mkdir('tutorial', (err)=>{
//   if(err)
//     console.log(err);
//   else
//     //console.log('successfully created the folder!');
//     //Create a file into the newly created folder
//     fs.writeFile('./tutorial/example.txt', '123', (err)=>{
//       if(err)
//         console.log(err);
//       else
//         console.log('Successfully created example.txt');
//     });
// });

//Remove file from within a folder
// fs.unlink('./tutorial/example.txt',(err)=>{
//   if(err)
//     console.log(err);
//   else {
//     console.log('Successfully deleted example.txt');
//   }
// });
//
// //Cannot remove folder with file in it
// fs.rmdir('tutorial',(err)=>{
//   if(err)
//     console.log(err);
//   else {
//     console.log('Successfully deleted');
//   }
// });

//Remove all files within a folder
// fs.readdir('example',(err,files)=>{ //files is array with name of files
//   if(err)
//     console.log(err)
//   else
//     for(let file of files){
//       fs.unlink('./example/' + file,(err)=>{
//         if(err)
//           console.log(err);
//         else {
//           console.log('successfully deleted ' + file);
//         }
//       })
//     }
// });

//TUTORIAL 6
//READ WRITE STREAM
//WHY USE readStream OVER readFile?
//e.g 3GB txt file.
//readFile will give an error saying the file
//size is greater than possible buffer

//const fs = require('fs');
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt');
// //event LISTENER
// //why chunk?
// //so that we can start writing while reading
// //we dont have to finish reading to write
// //into the new file(?)
// readStream.on('data', (chunk)=>{
//   //console.log(chunk);
//   writeStream.write(chunk); //write to new file as read
// });

//TUTORIAL 7
//PIPES AND CHAINING
//Pipes allow streams to be sent to a destination
//Pipes need Source(read) and Destination(write).
// const fs = require('fs');

//zlib is for compression of files
// const zlib = require('zlib');

//transform stream - takes input from read, then manipulates DATA
//in this case is COMPRESS. (Makes a zip)
//const gzip = zlib.createGzip();


// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example2.txt.gz');
// const writeStream = fs.createWriteStream('uncompress.txt');
// //Uncompress then write it
// readStream.pipe(gunzip).pipe(writeStream);

//TUTORIAL 8
//HTTP SERVER
// const http = require('http');
// const server = http.createServer((req, res)=>{
//   if(req.url === '/'){
//     res.write('Hello world from nodejs');
//     res.end();
//   } else {
//     res.write('using some other domain');
//     res.end();
//   }
// });
//
// server.on('listening',(err)=>{
//     console.log('ok, server is running');
// });
//
// server.listen(80);
/*TO KILL A PORT/PROCESS ON WINDOWS AND SOLVE
 "EADDRINUSE: :::80
 open cmd:
 netstat -ano
 find the local address port and PID
 then taskkill /f /im [PID]"*/

 //TUTORIAL 9
 //SERVE STATIC FILES USING HTTP AND FILE SYSTEM module
 // const http = require('http');
 // const fs = require('fs');
 // http.createServer((req,res)=>{
 //   const readStream = fs.createReadStream('./index.html');//Read file
 //   res.writeHead(200, {'Content-type': 'text/html'});//Type of file read
 //   readStream.pipe(res);//Pipe read data into response
 // }).listen(3000);

//TUTORIAL 10
//CREATE PACKAGE.json using npn init
//json file will hold all meta data for project. e.g name, version number etc
//CMD: npm init
//default name of package is name of folder, if so, [ENTER]
//ENTRY POINT: Lets us know which file is used to start node application.
//e.g website, upload to a server, it wil let server that it's the entry POINT

//TUTORIAL 11
//INSTALLING EXTERNAL PACKAGES AND INCLUDING IN OUR project
//NODE PACKAGE MANAGER
//PACKAGES: Reusable code that we can include in our own app, folder with one or more modules
//Packages available at https://www.npmjs.com/
//npn i [packagename]

// const _ = require('lodash');
// let example = _.fill([1,2,3,4,5], "banana", 0,5)//arg1: array, arg2, value, arg3:start index, arg4: end index
// console.log(example);

//uninstalling package
//cmd: npm uninstall [packagename]

//TUTORIAL 12
//SEMANTIC VERSIONING
