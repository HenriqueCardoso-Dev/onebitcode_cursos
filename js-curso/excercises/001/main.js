import moduleFunctions from "./services.mjs";

function runApp() {
    console.log('starting...');

    try {
        console.log(`moduleFunctions.createFile("conteúdo inicial do arquivo './text-file.txt' criado com fs do node.js");`);        
        moduleFunctions.createFile("conteúdo inicial do arquivo './text-file.txt' criado com fs do node.js");
        console.log(`readFile() => `+moduleFunctions.readFile());
    } catch (err) {
        console.log(err);
    } 
    
}

runApp();