import Negociacao from "./negociacao.js";

export default class listaNegociacoes {
  private listaNegociacoes: Negociacao[] = [];

  adicionarNaListaNegociacoes(negociacao: Negociacao): void {
    this.listaNegociacoes.push(negociacao);
  }

  getListaNegociacoes(): Negociacao[] {
    return this.listaNegociacoes;
  }
}
