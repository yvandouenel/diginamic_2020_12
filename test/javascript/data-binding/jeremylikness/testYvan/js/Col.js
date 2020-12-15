export default class Col {
    constructor() {
        this.render();
    }
    render = () => {
        const col_dom_section = document.createElement("section");
        col_dom_section.setAttribute("id","col-1")
        const col_dom_button = document.createElement("button");
        col_dom_button.textContent = "Ajouter une carte";
        col_dom_section.appendChild(col_dom_button);
        document.body.appendChild(col_dom_section);

    }
}