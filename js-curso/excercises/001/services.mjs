import { error } from "node:console";
import fs from "node:fs";

function createFile (content) {
    fs.writeFile("./text-file.txt", content, "utf-8", (err) => {
        if (err) {
            return error(err.message);
        }
        return console.log('created with success!');
    })
}

function readFile () {
    if (fs.existsSync("./text-file.txt") === true) {
        fs.readFile('./text-file.txt', 'utf-8', (err, data) => {
            if (err) {
                return error(err.message);
            }
            return console.log(`readFile() => "${data}"`); 
        })
    } else {
        return error("file is not exists!");
    }
}

function deleteFile() {
    if (fs.existsSync("./text-file.txt") === true) {
        fs.unlink('./text-file.txt', (err) => {
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
