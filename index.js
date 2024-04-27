import express from 'express';

const host = '0.0.0.0';
const porta = 3000;
const app = express();

function retornaPaginaInicial(requisicao, resposta){
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Página Incial</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Página Inicial</h1>');
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
};
function enviarDinheiro(requisicao, resposta){
    let valorDesejado = requisicao.query.valor;
    if(!valorDesejado){
        valorDesejado = 0;
    }
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Oferta de dinheiro</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    if(valorDesejado > 0){
        resposta.write('<h1>Toma aqui seus R$ ' + valorDesejado + '</h1>');
    }
    else{
        resposta.write("<h1>Informe o parâmetro valor na url: http://localhost:3000/dinheiro?valor=100</h1>");
    }
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
};
function converterCelsius(requisicao, resposta){
    let grauCelsius = requisicao.query.grausCelsius;
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Conversor de graus celsius para farenheit</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    if(grauCelsius){
        const resultado = (grauCelsius * (9/5)) + 32;
        resposta.write('<h1>' + grauCelsius + ' graus celsius = ' + resultado + 'graus em farenheit</h1>');
    }
    else{
        resposta.write('<h1>Informe o parâmetro graus celsius na url: http://localhost:3000/conversor?grausCelsius=0</h1>');
    }
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
};
app.get("/", retornaPaginaInicial);
app.get("/dinheiro", enviarDinheiro);
app.get("/conversor", converterCelsius);
app.listen(porta, host, () => {
    console.log("Servidor esta executando em http://" + host + ":" + porta);
});