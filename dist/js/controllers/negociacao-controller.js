import Negociacao from "../models/negociacao.js";
export default class NegociacaoController {
    inputData;
    inputQuantidade;
    inputValor;
    constructor() {
        this.inputData = document.getElementById("data");
        this.inputQuantidade = document.getElementById("quantidade");
        this.inputValor = document.getElementById("valor");
    }
    adicionar() {
        const dataString = this.inputData.value;
        const timestamp = Date.parse(dataString + " 00:00:00"); // corrige bug de data no JS
        const data = new Date(timestamp);
        const quantidadeString = this.inputQuantidade.value;
        const quantidade = +quantidadeString;
        const valorString = this.inputValor.value;
        const valor = +valorString;
        const negociacao = new Negociacao(data, quantidade, valor);
        console.log(negociacao);
    }
}
