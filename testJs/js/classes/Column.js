import CoopDom from "./CoopDom.js";

export default class Column extends CoopDom {
    constructor(title) {
        super();
        this.title = title;
        this.cards = []; 

        // Appel de la méthode qui va afficher la colonne
        this.render();
    }
    render = () => {
        // on va créer des éléments du DOM
        this.createAddDomElt("div", "texte", document.body);
    }
}