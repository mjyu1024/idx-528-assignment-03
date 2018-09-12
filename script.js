var name = "Mike";
var age = 24;

console.log( age * 5 );

var last_name = "Liu";

 console.log( name + " " + last_name );

 var fruits = [];
 fruits.push( 
     "Apples",
     "Oranges",
     "Pears",
     "Bananas",
     "Cherries",
    );

console.log(fruits);

console.log(fruits[0]);

var x = fruits.length;
var y = 1;

console.log( fruits[x - y] );

var animal_a = {
    type: "cat",
    age: "6",
    name: "Fry",
    speak: "Meow!",
};

var animal_b = {
    type: "dog",
    age: "3",
    name: "Mabel",
    speak: "Wooooof!",
};

animal_b.is_outdoor = true;

console.log( animal_b.name + " " + animal_b.age );

