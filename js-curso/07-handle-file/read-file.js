const handleFile = require("node:fs");

try {
    let data = handleFile.readFileSync("./07-handle-file/text-file.txt", "utf-8");
    console.log(data.toString());
} catch (error) {
    console.log(error.message);
}