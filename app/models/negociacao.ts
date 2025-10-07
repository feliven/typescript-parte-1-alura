export default class Negociacao {
  constructor(private readonly data: Date, private readonly quantidade: number, private readonly valor: number) {
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  getData(): Date {
    return this.data;
  }

  getQuantidade(): number {
    return this.quantidade;
  }

  getValor(): number {
    return this.valor;
  }

  getVolume(): number {
    return this.quantidade * this.valor;
  }
}
