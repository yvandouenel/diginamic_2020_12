
import CoopDom from "./CoopDom.js";

export default class Board extends CoopDom {
    constructor(title, columns) {
        super();
        this.title = title;
        this.columns = columns;
    }
}