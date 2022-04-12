// sendPost().then(() => 
//         console.log("Tudo OK")
//     ).catch(errType =>
//         console.log("Deu ruim: " + errType)
// );
main();
waitMessage();

console.log("Recebemos seu post e estamos analisando");

async function main(){
    try {
        await sendPost();
        console.log("Tudo OK");
    } catch (err) {
        console.log("Ocorreu um erro: " + err)
    }
}

function sendPost () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("-------------------");
            console.log("Análise concluída!");
            console.log("-------------------");
            const err = true;
            if (!err) {
                resolve(); //So se pode passar somente um (string, objeto ...)
            }
            else {
                reject("Estamos passando por manutenção");
            }
        }, 4000);
    })
}

function waitMessage () {
    setTimeout( _ => 
        console.log("Seja paciente estamos trabalhando nisso")
        ,2000)
}