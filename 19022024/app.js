// let myString = "meow-meow";
// let myNumber = 812;
// let myBoolean = false;
// let myArray = ["meow", "there", 72, true];
// let myObject = {firstName: "Dorfler"};

// console.log("this is my data:", myString);

// //operators + - * / % ++ -- += -= *= /= %= == === != !== > < >= <= && || !
// let x = 5;
// let y = 2;

// let z = x + Number(y);
// console.log(z);

// //OPGAVE 1

//     var numKids  = 2;
//     var partner  = 'That girl';
//     var geolog = 'Sumplace warm';
//     var jobTitle = 'leisurable larry';

// let future = 'You will be a ' + jobTitle + ' in ' + geolog + ', and married to ' +
//    partner + ' ' + ' with ' + numKids + ' kids.';
// console.log(future);

// //OPGAVE 2

// var birthYear = 2003;
// var futureYear  = 2024;
// var age  = futureYear - birthYear;
// console.log('I will be either ' + age + ' or ' + (age - 1));


// //OPGAVE 3
// var age = 20;
// var maxAge = 100;
// var numPerDay = 2;
// var totalNeeded = (numPerDay * 365) * (maxAge - age);
// var message = 'You will need ' + totalNeeded + ' cups of coffey to last you until the ripe old age of ' + maxAge;
// let currentAge = 34;
// let maxAge = 100;
// let numPerDay = 2;
// let totalNeeded = (numPerDay * 365) * (maxAge - currentAge);
// let message = `You will need ${totalNeeded} cups of coffey to last you until the ripe old age of ${maxAge}`;
// console.log(message);

// ____________________________________________________________________________________________
// let temperature = prompt ("What's the temperature outside today?");

// if (temperature < 10) {
//     console.log("Stay inside!");
// }

// else if (temperature == 10) {
//     console.log("It's temperated!");
// }

// else {
//     console.log("Go outside!");
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// let i = 0;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// function testFunction () {
//     console.log("Test");
// }
//Ældre metode 

// let testFunction = () => {
//     console.log("test");
// }

// testFunction();
// // Nyere metode. Hvis man spørger CGBT så bed den om a "redo inmodern js", så det ikke er den ældre metode

// let greet = (firstname) => {
//     console.log(`Ello ${firstname}!`);
// }

// greet(prompt("What's your name?"));
// ____________________________________________________________________________________________

//OPGAVE 1 - TORSDAG (WHAT'S NUMBER IS GREATER?)

// let greaterNum = (num1, num2) => {
//     if (num1 > num2) {
//         return num1;
//     }
//     else {
//         return num2;
//     }
// }

// let num1 = 5;
// let num2 = 10;

//OPGAVE 2 - TORSDAG (THE WORLD TRANSLATOR)

// function helloWorld (language) 
//     if (language == "danish") {
//         return "Hej Verden";
//     }
//     else if (language == "german") {
//         return "Hallo Welt";
//     } 
// ____________________________________________________________________________________________
// DYNAMISK KODE TIL PORTFOLIO - SKAL VÆRE DER ELLERS DUMPER MAN >8U

const myArray = ['Apple', 'Banana', 'Cherry',];

// 1. Using forEach with an array
myArray.forEach(item=> {
    console.log(item);
});

// myArray.forEach(item=> {
//     console.log(item);
// }); - referrence dimmer 

//Hvis man skal styre om det er noeget man har på lager eller på tilbud, så er det svært at styre bare ved
// kun at bruge en array. 

// {
// //Dette er en måde at sætte info op for et klassisk produkt kort :)
// tittle:"Product 1",
// description:  "This is the descriprion of product 1",
// image: "img1.jpg",
// price: 19.99,
// category: "Random stuff"
// }

const products = [
    {
tittle:"Product 1",
description:  "This is the descriprion of product 1",
image: "img1.jpg",
price: 19.99,
category: "Random stuff"
}, 
    {
tittle:"Product 2",
description:  "This is the descriprion of product 1",
image: "img1.jpg",
price: 59.99,
category: "Stuff for the kitchen"},
    {
tittle:"Product 3",
description:  "This is the descriprion of product 1",
image: "img1.jpg",
price: 9.99,
category: "Random stuff"   
    }
]; //Dette er en klassiske stryktur for næsten alt online. Så dette kunne være et produkt - hvis 
//man vil have flere laver man et komma bag } og sætter det næste produkt ind. 

// products.forEach(product => {
//     console.log(product.tittle)
// })
//I ens browser burde man kunne se dybre information omkring produktet i consolen.

myArray.forEach(item=> {
    console.log(`Title: ${product.tittle} - Price: ${product.price}`);
}); //Metode så man an se vigtig info gennem consolen.

//HEr skal vi fortælle Java Script at vi vil have HTML card lavet. De vil være grimme pga der mangler 
//css... Det kan findes på Kristians GitHub.

const createCard = (product) => {
    return `
    <div class="card">
        <h4>${product.tittle}</h4>
        <h2>${product.description}</h2>
            <img src="${product.image}" alt="${product.tittle}">
        <p>Price: £${product.price}</p>
        <p>Category: ${product.category}</p>
    </div>
    `; //Alt HTML skal skrives mellem de to `
    //Alt skal være i samme kategori. Så hvis man har brugt item i stedet for, skal det gså stå over. 
}; 

// products.forEach(product => {
//     console.log(createCard(product))
//     //Man skal placere hvert produkt ind i create card for at få dem til at lave HTML kort.
// }); 

const productContainer = document.querySelector('.row'); 
//Her bliver systemet fortalt den skal snakke med HTML row'en.

products.forEach(product => {

    productContainer.innerHTML += createCard(product);
    //Her bliver der fortalt at den skal tilføje et nyt kort til row'en.

});

//___________ KATEGORIER PÅ PRODUKTER / filtering _____________________________________________________

const filterProducts = products.filter(product => product.category == "Random stuff");
//Her bliver der lavet en filter funktion. Denne funktion vil filtrere alle produkterne og kun vise dem
    console.log(filterProducts);

    filterProducts.forEach(product => {
        productContainer.innerHTML += createCard(product)
    });

// Hvis man ønsker at have ting uunder flere kategorier, så skal man sætt ederes kategori som en array.