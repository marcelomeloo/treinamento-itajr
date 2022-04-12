const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Home Page"); //So se pode enviar a resposta uma unica vez numa unica rota
});

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.get("/profile/:username", (req, res) => {
    const username = req.params.username.replace("_", " ")
    res.send("Olá " + username)
});

//Ultima coisa que se faz
app.listen(4000, function(erro){
    if(erro)
        console.log("Ocorreu um erro")
    else 
        console.log("Servidor iniciado com sucesso!")
    }
)
