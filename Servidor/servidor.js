require('colors');
let http = require('http');
let express = require('express');
let bodyParser = require('body-parser')
let mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://fagner:lZxAfaoAL6VmdQPH@aulabd.cjihvk4.mongodb.net/?retryWrites=true&w=majority&appName=AulaBD';
const client = new MongoClient(uri, { useNewUrlParser: true });

let app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');


app.get('/', function(req,res){
    res.redirect('Aula_2/index.html');
})

app.get('/Cadastrar',function(req, res){
    let nome = req.query.cadastra_nome;
    let nasc = req.query.cadastra_nascimento;
    let login = req.query.cadastra_login;
    let senha = req.query.cadastra_senha;

   // salva dados no banco
   client.db("AulaBD").collection("usuarios").insertOne(
    { 
        db_nome: nome,
        db_nasc: nasc,
        db_login: login, 
        db_senha: senha 
    }, function (err) {
    if (err) {
      res.render('resposta.ejs', 
        {resposta: 'Falha', mensagem: 'Erro ao cadastrar usuário!!'})
    }else {
      res.render('resposta.ejs', 
      {resposta: 'Sucesso', mensagem: 'Usuário cadastrado com sucesso!'})
  };
   });

    // console.log(nome, nasc, login, senha);
    // res.redirect('sucesso.html')

});


app.post('/Cadastrar',function(req, res){
    let nome = req.body.cadastra_nome;
    let nasc = req.body.cadastra_nascimento;
    let login = req.body.cadastra_login;
    let senha = req.body.cadastra_senha;
    console.log(nome, nasc, login, senha);
    res.redirect('sucesso.html')
});


app.post('/Login',function(req, res){
    let login = req.body.login;
    let senha = req.body.senha;
 
   // busca um usuário no banco de dados
   client.db("AulaBD").collection("usuarios").find(
    {
        db_login: login, 
        db_senha: senha 
    }).toArray(function(err, items) {
      console.log(items);
      if (items.length == 0) { 
        res.render('resposta.ejs', 
        {resposta: 'Falha', mensagem: 'Usuário/senha não encontrado!'})
      }else if (err) {
        res.render('resposta.ejs', 
        {resposta: 'Falha', mensagem: 'Erro ao logar usuário!'})
      }else {
        res.render('resposta.ejs', 
        {resposta: 'Sucesso', mensagem: 'Usuário logado com sucesso!'})
      };
    });


});


app.get('/imprime', function(req,res){
    let qtde = req.query.qtde;
    res.render('divs.ejs', {tamanho: qtde})
})

let server = http.createServer(app);
server.listen(80)

console.log('Servidor rodando ...'.rainbow)