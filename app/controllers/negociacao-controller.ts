import Negociacao from "../models/negociacao.js";

export default class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor() {
    this.inputData = document.getElementById("data") as HTMLInputElement;
    this.inputQuantidade = document.getElementById("quantidade") as HTMLInputElement;
    this.inputValor = document.getElementById("valor") as HTMLInputElement;
  }

  adicionar() {
    const dataString: string = this.inputData.value;
    const timestamp: number = Date.parse(dataString + " 00:00:00"); // corrige bug de data no JS
    const data: Date = new Date(timestamp);

    const quantidadeString: string = this.inputQuantidade.value;
    const quantidade: number = +quantidadeString;

    const valorString: string = this.inputValor.value;
    const valor: number = +valorString;

    const negociacao = new Negociacao(data, quantidade, valor);
    console.log(negociacao);
  }
}
