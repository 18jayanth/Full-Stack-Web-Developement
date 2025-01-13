
//1. Use the inquirer npm package to get user input.

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        name: "url",
        message: "Enter the URL",
    },
])
.then((answers) => {
  // Use user feedback for... whatever!!
  
  const url=answers.url;
var qr_png = qr.image(url);
qr_png.pipe(fs.createWriteStream('i_love_qr.png'));
fs.writeFile("URL.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
})
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});
/*
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
*/

 

/*
3. Create a txt file to save the user input using the native fs node module.

import { input } from '@inquirer/prompts';
// Or
// import input from '@inquirer/input';
import inquirer from 'inquirer';

const answer = await input({ message: 'Enter the Url' });
import qr from "qr-image"; // QR code generation
import  QRCode from 'qrcode'

QRCode.toDataURL(answer, function (err, url) {
  console.log(url)
})
import fs from "fs"; 
fs.writeFile("message.txt",QRCode.toDataURL(answer, function (err, url) {
    
  }), (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
}); 
fs.readFile("message.txt","utf8", (err,data) => {
    if (err) throw err;
    console.log(data);
});// File system access */
