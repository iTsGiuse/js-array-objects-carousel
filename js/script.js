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

/* SELEZIONA LA PRIMA E LA SECONDA COL */
const primaCol = document.getElementById('prima-col');
const secondaCol = document.getElementById('seconda-col');
let counter = 0;

/* CREAZIONE BUTTON SU + EVENTO */
const buttonSu = document.createElement('div');
buttonSu.classList.add('btn', 'p-1', 'cerchio-su');
buttonSu.innerHTML= `&#8593`;

buttonSu.addEventListener('click', function() {
  
    if (counter > 0) {
        counter--;
        primaCol.innerHTML = `
        <img src="${images[counter].image}" alt="foto">
            <div class="ms-card-title">
                <h5 class="text-end">${images[counter].title}</h5 >
                <p >${images[counter].text}</p>
            </div>
        `; 
      } 

    
});

/* CREAZIONE BUTTON GIU + EVENTO */
const buttonGiu = document.createElement('div');
buttonGiu.classList.add('btn', 'p-1', 'cerchio-giu');
buttonGiu.innerHTML= `&#8595`;

buttonGiu.addEventListener('click', function() {

    if (counter < images.length - 1) {
        counter++;
        primaCol.innerHTML = `
        <img src="${images[counter].image}" alt="foto">
            <div class="ms-card-title d-block">
                <h5 class="text-end">${images[counter].title}</h5 >
                <p >${images[counter].text}</p>
            </div>
        `; 
      }

});

/* CICLO PER LA CREAZIONE CARD */
for (let i=0; i < images.length; i++){

    /* CREA CARD NEL HTML */
    const card = document.createElement('card');

    /* AGGIUNGI LA CLASSE CARD */
    card.classList.add('card');
 
   /*  AGGIUNGI L'HTML */
    card.innerHTML = `
        <img src="${images[i].image}" alt="Image">
         <div class="ms-card-title">
            <h1>${images[i].title}</h1>
            <h2>${images[i].text}</h2>
        </div>
    `;
    
    /* APPENDI CARD ALLA SECONDA COL */
    secondaCol.append(card);

    /* APPENDI BUTTON ALLE CARD */
    card.append(buttonGiu);
    card.append(buttonSu);

};



