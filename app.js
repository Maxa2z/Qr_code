import qr from "qr-image";
import fs from "fs";
import inquirer from "inquirer";

inquirer
.prompt([
    {message:'Enter is your url?',
    name:'url'},
])
.then((answers)=>{
    let url = answers.url;
    let qrcode = qr.image(url);
    qrcode.pipe(fs.createWriteStream("your_qrcode.png"));
})
.catch((error)=>{
    if(error.isItyError){
        console.log("Prompt couldn't be rendered in the current environment");
    }
    else{
        console.log("Something else went wrong");
    }
});
