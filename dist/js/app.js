import Negociacao from "./models/negociacao.js";

//
const negociacao = new Negociacao(new Date(), 12, 234);
console.log(negociacao);
console.log(negociacao.data);
console.log(negociacao.quantidade);

// negociacao.quantidade = 200;
//console.log(negociacao);
