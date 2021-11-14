// HTTP
const http = require('http');

//Create Server - Listen(utilizado dentro do método createServer)
http.createServer(function(requisicao,resposta){

    //ROUTING - respostas diferentes dependendo da solicitação   

    //Método writeHead
    //código protocolo HTTP - 
    //tipo de conteúdo resposta(texto sem formatação, HTML e JSgit pull origin master --allow-unrelated-historiesON
    //
    resposta.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});

        switch(requisicao.url){
            case "/":
                resposta.end("Você está na página home!");
                break;
            case "/contato":
                resposta.end("Você está na página contato!");
                break;
            default:
                resposta.end("Você está no nosso servidor!");
                break;
        }

    //Método end
    //Recebe o corpo do conteúdo desejado para envio
    //Fecha o ciclo da nossa resposta
    //Deve ser sempre uma string
    //resposta.end("Meu primeiro servidor com Node");

}).listen(3000,"localhost");