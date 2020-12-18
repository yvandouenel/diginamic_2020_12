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
    }
}