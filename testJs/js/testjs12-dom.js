// Permet de stocker dans la variable h1 l'élément du 
// DOM qui a pour identité h1
const h1 = document.getElementById("h1");
console.log("h1 : ", h1);

// Création d'un élément du DOM
const h2 = document.createElement("h2");
console.log("h2 : ", h2);

// Ajouter du texte à un élément du DOM
h2.textContent = "Titre de niveau 2";

// ajouter l'élément dans le DOM : ici ajout de h2 en dernier fils de body
window.document.body.appendChild(h2);

// ajout d'un span dans le titre de niveau 1
createAddDomElt("span", "test", h1);
createAddDomElt("h3", "Titre de niveau 3");

console.log("window", window.document);

function createAddDomElt (tagname, text, parentElt = document.body) {
    let element = document.createElement(tagname);
    if(text) element.textContent = text;
    parentElt.appendChild(element);
}




// Créer une fonction qui attend 3 paramètres : 
// - nature de l'élément du dom (ex : section)
// - texte contenu dans l'élément du dom
// - parent de l'élement du dom
// Cette fonction permet de créer un élément du dom, lui ajouter du texte et 
// le placer dans un élément parent.