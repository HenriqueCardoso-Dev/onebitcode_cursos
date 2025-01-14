import fs from "node:fs";

const handleFile =  fs;

const exists = handleFile.existsSync("./text-file.txt");

function createFile (content) {
    handleFile.writeFile("./text-file.txt", content, "utf-8", (err) => {
        if (err) {
            console.log(err.message);
            return
        }
        console.log('created with success!');
    })
}

function readFile () {
    if (exists === true) {
        handleFile.readFile('./text-file.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log(err.message);
                return
            }
            console.log(data.toString()); 
        })
    } else {
        console.log("file is not exists!");
        
    }
}

function deleteFile() {
    if (exists === true) {
        handleFile.unlink('./text-file.txt', (err) => {
            if (err) {
                console.log(err.message)
                return;
            }

            console.log('File is deleted!!!');
        })
    } else {
        console.log("file is not exists!");
    }
}

export default {createFile, readFile, deleteFile}
