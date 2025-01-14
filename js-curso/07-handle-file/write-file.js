const { error } = require("node:console");
const handleFile = require("node:fs");

//método assíncrono - (mais performático pois n usa o esqumema de aguardar para execultar uma nova tarefa, que pode gerar lentidão e atrasos no funcionamento de uma aplicação melhor);

const content = "lorem ipsum";

handleFile.writeFile("./07-handle-file/text-file.txt", content, "utf-8", (error) => {
    if (error) {
        console.log(error.message); 
        return;
    }

    console.log("created with success!");
});


//---------------------------------------------------------//-----------------------------------------------------//


//metodo síncrono de fazer (usável mas faz com que a aplicação aguarde a finalização do processo para seguir com as próximas linhas de código)
// try {
//     handleFile.writeFileSync("./07-handle-file/text-file.txt", "HI GUYS", "utf-8");
//     console.log("created with success!");
// } catch (error) {
//     console.log(error.message);   
// }