import moduleFunctions from "./services.mjs";

function runApp() {
    console.log('starting...');

    try {
        console.log(`moduleFunctions.createFile("conteúdo inicial do arquivo './text-file.txt' criado com fs do node.js");`);
        moduleFunctions.createFile("conteúdo inicial do arquivo './text-file.txt' criado com fs do node.js");
        moduleFunctions.readFile();

        setTimeout(() => {
            console.log(`moduleFunctions.createFile("Conteúdo modificado")`);
            moduleFunctions.createFile("Conteúdo modificado");
            moduleFunctions.readFile();
        }, 1000);

        setTimeout(() => {
            moduleFunctions.deleteFile();
        }, 2000);

    } catch (err) {
        console.log(err);
    } 
    
}

runApp();