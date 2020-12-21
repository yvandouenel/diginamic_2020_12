import CoopDom from "./CoopDom.js";
export default class Term  extends CoopDom {
    constructor(term) {
        super();
        this.name = term.name;
        this.id = term.id;

        // appel de la fonction render d'affichage
        this.render();
    }

    render = () => {
        console.log("Dans la fonction render de Term");
        // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const article = this.createAddDomElt(
            "button",
            this.name,
            document.querySelector("#terms"),
            {"class": "btn btn-warning m-2"}
        );
    }

}