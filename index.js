const express = require("express"); //importando o módulo
const app = express();

//estou dizendo para o Express usar o EJS com view engine. Na pasta views ficarão salvo todos os meus arquivos HTMl
app.set('view engine', 'ejs');

//definindo as rotas
app.get("/", (req,res)=>{ //fiz uma anotação na aula 25 sobre os parâmetros
    var nome = "Wilson";
    var lang = "JavaScript";
    var exibirMsg = true;

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Fanta", preco: 5},
        {nome: "Leite", preco: 1.45},
    ]
    //res.send("Bem vindo ao meu site");
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Nenhuma por enquanto",
        inscritos: 80,
        msg: exibirMsg,
        produtos: produtos
    }); //agora estou usando o EJS para desenhar meu html
});

//colocando a aplicação para rodar com o nodemon(no terminal coloquei nodemon index.js que é o nome do meu arquivo)
app.listen(8080, ()=>{
    console.log("App rodando");
});

//Configuramos o EJS no exprees