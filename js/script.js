/* ARRAY DI OGGETTI */
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

/* SELEZIONA LA SECONDA COL */
const secondaCol = document.getElementById('seconda-col');


for (let i=0; i < images.length; i++){

    /* CREA CARD NEL HTML */
    const card = document.createElement('card');

    /* AGGIUNGI LA CLASSE CARD */
    card.classList.add('card');
 
   /*  AGGIUNGI L'HTML */
    card.innerHTML = `
        <img src="${images[i].image}" alt="">
         <div class="ms-card-title">
            <h1>${images[i].title}</h1>
            <h2>${images[i].text}</h2>
        </div>
    `;
    
    /* APPENDI CARD ALLA SECONDA COL */
    secondaCol.append(card);

};



