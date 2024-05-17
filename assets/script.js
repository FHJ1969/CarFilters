//Appel du fichier JSON et définition en variable

let reponse = await fetch("/assets/filtres.json");
let filtres = await reponse.json();

//Création des cartes

let cartes = document.getElementById("cartes");

function generationCartes() {
    for (let i = 0; i < filtres.length; i++) {
        let lienBoite = document.createElement("a");
        lienBoite.href = filtres[i].lien;
        lienBoite.classList.add("boite-lien");

        let boite = document.createElement("div");
        boite.classList.add("box-carte");
        lienBoite.appendChild(boite);

        let image = document.createElement("img")
        image.src = filtres[i].image;
        image.classList.add("image-voiture")
        boite.appendChild(image)

        let titre = document.createElement("h2");
        titre.innerText = filtres[i].nom;
        titre.classList.add("texte-balise")
        boite.appendChild(titre);

        let genre = document.createElement("h3");
        genre.innerText = filtres[i].genre;
        genre.classList.add("texte-balise")
        boite.appendChild(genre);

        let prix = document.createElement("h2");
        prix.innerText = filtres[i].prix + "€";
        prix.classList.add("texte-balise")
        boite.appendChild(prix);

        cartes.appendChild(lienBoite);
    }
}

generationCartes();

//Définition des bouttons

let btnLuxe = document.getElementById("btn-luxe");
let btnSport = document.getElementById("btn-sport");
let btnVintage = document.getElementById("btn-vintage");
let btnAll = document.getElementById("btn-all");

let listeBtn = [btnLuxe,btnSport,btnVintage];

//Création des bouttons selon le filtre pressé

for (let i = 0; i < listeBtn.length; i++) {
    listeBtn[i].addEventListener("click", () => {
        // Effacer le contenu de la balise cartes
        cartes.innerHTML = "";

        // Parcourir les filtres et ajouter les nouvelles cartes
        let lienBoite = document.createElement("a");
        lienBoite.href = filtres[i].lien;
        lienBoite.classList.add("boite-lien");

        let boite = document.createElement("div");
        boite.classList.add("box-carte");
        lienBoite.appendChild(boite);

        let image = document.createElement("img")
        image.src = filtres[i].image;
        image.classList.add("image-voiture")
        boite.appendChild(image)

        let titre = document.createElement("h2");
        titre.innerText = filtres[i].nom;
        titre.classList.add("texte-balise")
        boite.appendChild(titre);

        let genre = document.createElement("h3");
        genre.innerText = filtres[i].genre;
        genre.classList.add("texte-balise")
        boite.appendChild(genre);

        let prix = document.createElement("h2");
        prix.innerText = filtres[i].prix + "€";
        prix.classList.add("texte-balise")
        boite.appendChild(prix);

        cartes.appendChild(lienBoite);
    });
}

//Exception pour le filtre btnAll qui se créér en appelant la fonction originel de la génération de cartes

btnAll.addEventListener("click", (event) => {
    cartes.innerHTML = "";
    generationCartes();
});








