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

function convert(amount, currency) {
  if(currency == "chf") return amount * 1.06;
  else return amount / 1.06;
}