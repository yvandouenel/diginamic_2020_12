import CoopDom from "./CoopDom.js";
export default class Card extends CoopDom {
    constructor(question, answer, column) {
        super();
        this.question = question;
        this.answer = answer;
        this.column = column;

        // construction du dom de la carte
        this.render();
    }
    render = () => {
        console.log("Dans la fonction render de Card");
        // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const article = this.createAddDomElt(
            "article",
            "",
            this.column.domElements.section_cards
        );
        // Ici, il faut maintenant créer les élément du dom qui constituent une carte
        // soit pour commencer l'affichage de la question en h3
        // l'affichage de la réponse en paragraphe. Ces deux derniers éléments 
        // sont les fils direct de l'élément du dom "article"
        const question = this.createAddDomElt(
            "h3",
            this.question,
            article
        );
        const answer = this.createAddDomElt(
            "p",
            this.answer,
            article
        );

        // Il faut maitenant créer un bouton de suppression de la carte
        // et gérer l'événement click sur ce bouton en appelant la 
        // méthode removeCard de la class Column

    }
}