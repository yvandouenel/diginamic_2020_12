// gérer la soumission du formulaire
const form = document.querySelector("form");

form.onsubmit = function(event) {
  event.preventDefault();
  console.log("Formulaire soumis");
  // récupération de la valeur entrée dans le champ des euros
  const euros = document.querySelector("#euro").value;
  console.log("valeur en euro : ", euros);

  const fch = convert(euros, "chf");

  // Affectation de la valeur calculée à l'input des fch
  document.querySelector("#chf").value = fch;

}

// gestion de la modification des inputs
// récupération des élément du DOM qui correspondent aux inputs 
// avec query selector par exemple


// affectation d'une fonction gestionnaire d'événement (input)
// qui va appeler la fonction convert et qui va modifier
// l'input des francs suisse (chf) ou l'input des euros 


function convert(amount, currency) {
  if(currency == "chf") return amount * 1.06;
  else return amount / 1.06;
}