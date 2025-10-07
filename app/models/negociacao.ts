export default class Negociacao {
  private data: Date;
  private quantidade: number;
  private valor: number;

  constructor(data: Date, quantidade: number, valor: number) {
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  getData() {
    return this.data;
  }

  getQuantidade() {
    return this.quantidade;
  }

  getValor() {
    return this.valor;
  }

  getVolume() {
    return this.quantidade * this.valor;
  }
}
