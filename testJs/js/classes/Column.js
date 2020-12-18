import CoopDom from "./CoopDom.js";

export default class Column extends CoopDom {
    constructor(title) {
        super();
        this.title = title;
        this.cards = []; 

        // Appel de la méthode qui va afficher la colonne
        this.domElements = this.render();

        // Gestion des événements
        this.domElements.button.onclick = function() {
            console.log("click sur le bouton d'ajout d'une carte");
        }
        
    }
    render = () => {
        // on va créer des éléments du DOM
        // this.createAddDomElt("div", "texte", document.getElementById("main"));
        // Créer ici : une section sans texte qui correspond à la colonne
        // puis un titre de niveau 2 avec le titre de la colonne
        // puis un bouton "ajouter une carte"
        const section = this.createAddDomElt("section", "", document.getElementById("main"),{"class":"column"});
        const title = this.createAddDomElt("h2", this.title, section);
        const button = this.createAddDomElt("button", "Ajouter une carte", section);

        return {
            "section": section,
            "title": title,
            "button": button
        };
    }
}