import './botao.css';


class botao {

    constructor () {
        this.title = '';
    }

    setTitle(t) {
        this.title = t;
    }


render() {
    return `
           <button class="botao">`+this.title+` </button>
           `; 
}

}


export default botao;