/**
 * Fonction constructeur de Card
 * @param {string} question 
 * @param {string} answer 
 */
function Card(question, answer) {
    // propriétés
    this.question = question;
    this.answer = answer;

    // Propriété qui a pour type "function". On l'appelle alors "Méthode"
    this.dumpQuestionAnswer = () => {
        console.log(`Question : ${this.question} - Réponse : ${this.answer}`);
    }
}
// Quand on utilise "new", c'est que l'on crée une instance
const c1 = new Card("Nom de l'inventeur du web ?", "Tim Berners-Lee");

// Atteindre les propriétés
console.log(c1.question);
console.log(c1.answer);
// Appel des méthodes
c1.dumpQuestionAnswer();