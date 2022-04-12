const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let DB = {
    books: [
        {
            id: 23,
            title: "1984",
            year: 1949,
            author: "George Orwell"
        },
        {
            id: 65,
            title: "Outliers",
            year: 2008,
            author: "Malcom Gladwell"
        },
        {
            id: 2,
            title: "5 segundos",
            year: 2018,
            author: "Augusto Lins"
        }
    ]
}

app.get("/all_books", (req, res) =>{
    res.statusCode = 200;
    res.json(DB.books);
});

app.get("/book/:id", (req, res) =>{
    const id = parseInt(req.params.id);

    if(isNaN(id)){
        res.sendStatus(400);
    }
    else{
        const book = DB.books.find(b => b.id == id);

        if(book == undefined){
            res.sendStatus(404);
        }
        else{
            res.statusCode = 200;
            res.json(book);
        }
    }
});

app.get("/book", (req, res) => {
    res.send(`
        <form action="" method="post">
            <label for="title">Título:</label>
            <input type="text" name="title" id="">
            <br><br>
            <label for="year">Ano:</label>
            <input type="number" name="year" id="">
            <br><br>
            <label for="author">Autor:</label>
            <input type="text" name="author" id="">
            <br><br>
            <button type="submit">Enviar</button>
        </form>   
    `)
})

app.post("/book", (req, res) =>{
    const {title, year, author} = req.body;

    DB.books.push({
        id: 900,
        title,
        year,
        author
    })

    console.log(DB.books)
    res.statusCode = 200;
    res.send("Dados armazenados no DB! Obrigado")
});

app.delete("/game/:id", (req,res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)){
        res.sendStatus(400);
    }
    else{
        const index = DB.books.findIndex(b => b.id == id);

        if(index == -1){
            res.sendStatus(404);
        }
        else{
            DB.books.splice(index, 1);
            res.statusCode = 200;
        }
    }
});

app.put("/book/:id", (req, res) =>{
    const id = parseInt(req.params.id);

    if(isNaN(id)){
        res.sendStatus(400);
    }
    else{
        const book = DB.books.find(b => b.id == id);

        if(book == undefined){
            res.sendStatus(404);
        }
        else{
            const {title, year, author} = req.body;

            if(title != undefined)
                book.title = title;
            if(year != undefined)
                book.year = year;
            if(author != undefined)
                book.author = author;

            res.statusCode = 200;
            res.json(DB.books);
            console.log(DB.books)
        }
    }
});

app.listen(4000, () => console.log("Server started"))