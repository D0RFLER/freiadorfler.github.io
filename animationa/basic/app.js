let message = "Hello World!";
console.log(message);

//data types
let nameOfPerson = "John";                                       //string
let age = 25;                                                    //number
let isMarried = false; //true                                    //boolean
let fruits = ["apple", "banana", "mango"];                       //array
let person = {                                                   //object   Objekter er en samling af værdier, og disse værdier er nøgler og værdier. De kan blive brugt til cards med værdier som: navn, pris, størrelse mm.
        firstName:  "John", 
        lastName: "Adams", 
        age:25
};

let sum = age + 5;                                               //addition
console.log(sum);                                                //15

let concat = "Hello" + " " + nameOfPerson;                       //concatenation
console.log(concat);                                             //Hello World   Man ka bruge [] til at definere hvilken en i en array.


let temperature = 27;

if (temperature > 25) {
    console.log("It's hot outside!");
}

else if (temperature == 25) {
    console.log("It's pleasent outside!");
}

else {
    console.log("It's cold outside!");
}



for (let i = 0; i < 10; i++) {
    console.log("tal:" + i);
}

//function
function greet() {
    console.log("Hello World!");
}

greet();

const calculate = () => {

return 3 + 4 

}