const express = require("express"); //importando o módulo
const app = express();

//estou dizendo para o Express usar o EJS com view engine. Na pasta views ficarão salvo todos os meus arquivos HTMl
app.set('view engine', 'ejs');
app.use(express.static('public'));

//definindo as rotas
app.get("/", (req,res)=>{ //fiz uma anotação na aula 25 sobre os parâmetros
        
});

app.get("/perguntar", (req,res)=> {
    res.render("perguntar");
});

//colocando a aplicação para rodar com o nodemon(no terminal coloquei nodemon index.js que é o nome do meu arquivo)
app.listen(8080, ()=>{
    console.log("App rodando");
});

