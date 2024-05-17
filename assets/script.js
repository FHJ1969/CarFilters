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

//Définition des bouttons et appel des cartes selon les bouttons pressé

let btnLuxe = document.getElementById("btn-luxe");
let btnSport = document.getElementById("btn-sport");
let btnVintage = document.getElementById("btn-vintage");
let btnAll = document.getElementById("btn-all");

btnLuxe.addEventListener("click", (event) => {
    // Effacer le contenu de la balise cartes
    cartes.innerHTML = "";

    // Parcourir les filtres et ajouter les nouvelles cartes
            let lienBoite = document.createElement("a");
            lienBoite.href = filtres[0].lien;
            lienBoite.classList.add("boite-lien");

            let boite = document.createElement("div");
            boite.classList.add("box-carte");
            lienBoite.appendChild(boite);

            let image = document.createElement("img")
            image.src = filtres[0].image;
            image.classList.add("image-voiture")
            boite.appendChild(image)

            let titre = document.createElement("h2");
            titre.innerText = filtres[0].nom;
            titre.classList.add("texte-balise")
            boite.appendChild(titre);

            let genre = document.createElement("h3");
            genre.innerText = filtres[0].genre;
            genre.classList.add("texte-balise")
            boite.appendChild(genre);

            let prix = document.createElement("h2");
            prix.innerText = filtres[0].prix + "€";
            prix.classList.add("texte-balise")
            boite.appendChild(prix);

            cartes.appendChild(lienBoite);
});

btnSport.addEventListener("click", (event) => {
    // Effacer le contenu de la balise cartes
    cartes.innerHTML = "";

    // Parcourir les filtres et ajouter les nouvelles cartes
        let lienBoite = document.createElement("a");
        lienBoite.href = filtres[1].lien;
        lienBoite.classList.add("boite-lien");

        let boite = document.createElement("div");
        boite.classList.add("box-carte");
        lienBoite.appendChild(boite);

        let image = document.createElement("img")
        image.src = filtres[1].image;
        image.classList.add("image-voiture")
        boite.appendChild(image)

        let titre = document.createElement("h2");
        titre.innerText = filtres[1].nom;
        titre.classList.add("texte-balise")
        boite.appendChild(titre);

        let genre = document.createElement("h3");
        genre.innerText = filtres[1].genre;
        genre.classList.add("texte-balise")
        boite.appendChild(genre);

        let prix = document.createElement("h2");
        prix.innerText = filtres[1].prix + "€";
        prix.classList.add("texte-balise")
        boite.appendChild(prix);

        cartes.appendChild(lienBoite);
});

btnVintage.addEventListener("click", (event) => {
    // Effacer le contenu de la balise cartes
    cartes.innerHTML = "";

    // Parcourir les filtres et ajouter les nouvelles cartes
        let lienBoite = document.createElement("a");
        lienBoite.href = filtres[2].lien;
        lienBoite.classList.add("boite-lien");

        let boite = document.createElement("div");
        boite.classList.add("box-carte");
        lienBoite.appendChild(boite);

        let image = document.createElement("img")
        image.src = filtres[2].image;
        image.classList.add("image-voiture")
        boite.appendChild(image)

        let titre = document.createElement("h2");
        titre.innerText = filtres[2].nom;
        titre.classList.add("texte-balise")
        boite.appendChild(titre);

        let genre = document.createElement("h3");
        genre.innerText = filtres[2].genre;
        genre.classList.add("texte-balise")
        boite.appendChild(genre);

        let prix = document.createElement("h2");
        prix.innerText = filtres[2].prix + "€";
        prix.classList.add("texte-balise")
        boite.appendChild(prix);

        cartes.appendChild(lienBoite);
});

btnAll.addEventListener("click", (event) => {
    cartes.innerHTML = "";
    generationCartes();
});








