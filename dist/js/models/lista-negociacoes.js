export default class listaNegociacoes {
    listaNegociacoes = [];
    adicionarNaListaNegociacoes(negociacao) {
        this.listaNegociacoes.push(negociacao);
    }
    getListaNegociacoes() {
        return this.listaNegociacoes;
    }
}
