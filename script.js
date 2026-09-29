let numeroQuestion = 1;
let choix = null;

const questions = [
    "Maman, tu penses qu’il faut toujours croire en ses rêves ?",
    "Est-ce qu’on peut toujours recommencer, même après un échec ?",
    "Selon toi, qu’est-ce qui compte le plus dans la vie ?"
];

const question = document.getElementById("question");
const texteQuestion = document.getElementById("texteQuestion");
const boutonOui = document.getElementById("reponseOui");
const boutonNon = document.getElementById("reponseNon");
const boutonContinuer = document.getElementById("continuer");
const final = document.getElementById("final");
const musique = document.getElementById("musique");

function choisir(bouton) {

    choix = bouton.textContent;

    boutonOui.classList.remove("selectionne");
    boutonNon.classList.remove("selectionne");

    bouton.classList.add("selectionne");
    boutonContinuer.disabled = false;
}

boutonOui.addEventListener("click", function() {
    choisir(boutonOui);
});

boutonNon.addEventListener("click", function() {
    choisir(boutonNon);
});


boutonContinuer.addEventListener("click", function() {

    if (choix === null) {
        return;
    }

    if (numeroQuestion < 3) {

        numeroQuestion++;
        choix = null;
        boutonContinuer.disabled = true;

        texteQuestion.textContent = questions[numeroQuestion - 1];

        boutonOui.classList.remove("selectionne");
        boutonNon.classList.remove("selectionne");

        if (numeroQuestion === 3) {

            boutonOui.textContent = "Famille";
            boutonNon.textContent = "Argent";

            boutonContinuer.textContent = "Voir la suite";
        }

    } else {

        question.style.display = "none";
        final.style.display = "block";
        pluieDeCoeurs();

        musique.play();
    }
});
function boutonNonAccueil() {
    const boutonNon = document.getElementById("non");

    boutonNon.textContent = "Même pas un petit peu ? 🥺";

    boutonNon.style.transform = "translateX(20px)";
}
function pluieDeCoeurs() {

    const conteneur = document.getElementById("coeurs");

    for (let i = 0; i < 35; i++) {

        const coeur = document.createElement("div");

        coeur.classList.add("coeur");
        coeur.textContent = "❤️";

        coeur.style.left = Math.random() * 100 + "%";
        coeur.style.animationDuration = (3 + Math.random() * 4) + "s";
        coeur.style.animationDelay = Math.random() * 2 + "s";

        conteneur.appendChild(coeur);

        setTimeout(() => {
            coeur.remove();
        }, 8000);
    }
}