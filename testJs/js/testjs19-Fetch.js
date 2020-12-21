import Term from "./classes/Term.js";
import Coopernet from "./services/Coopernet.js";


// instanciation de la classe Coopernet qui perme de communiquer avec le serveur
const coop = new Coopernet("https://www.coopernet.fr");

/**
 * Chainage de promesses
 * 1 - promesse de token
 * 2 - promesse de user (uniquement si la promesse précédente est "resolve")
 */
async function getTokenUser() {
    try{
        // récupération du token
        const token = await coop.getToken();
        console.log("token", token);

        // récupération des données de l'utilisateur
        const user = await coop.getUser("y","y",token);

        // récupération des termes (rubriques)
        const terms = await coop.getTerms(user, token);
        console.log("termes de y : ", terms);

        // parcours du table terms
        for(let term of terms) {
            new Term(term);
        }
    }
    catch(error){
        console.log("Erreur attrapée : ", error)
    }
}
/**
 * Appel du token et du user de façon asynchrone
 */
getTokenUser();

/* function getToken() {
    return fetch("https://www.coopernet.fr/rest/session/token/")
        .then(function (response) {
            if (response.status !== 200) { // si ça c'est mal passé
                throw new Error("Le serveur n'a pas répondu correctement");
            } else return response.text(); // renvoie une promesse
        })
        .then(function (data) { // data correspond au retour du résolve (ici deux lignes au dessus)
            console.log("Token récupéré : ", data);
            return data;
        });
}
 */