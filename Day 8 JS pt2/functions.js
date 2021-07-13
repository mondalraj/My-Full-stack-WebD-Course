// var name = "Rajib";
// var rollNo = 52;
// var college = "ADGITM";
// var age = 18;
// var city = "New Delhi";

// var name1 = "Akash";
// var rollNo1 = 20;
// var college1 = "ADGITM";
// var age1 = 19;
// var city1 = "New Delhi";

// console.log("Namaste " + name);
// console.log("Namaste " + name1);

//Function

function greet(name, age) {
    console.log(`Namaste ${name}`)
    if (age > 18) {
        console.log(`${name} is allowed to visit the mall`);
    } else {
        console.log(`${name} is not allowed to visit the mall`);
    }
}

greet("Rajib", 18);
greet("Akash", 19);
greet("Nikita", 19);
greet("Gargi", 19);


//Closure

let a = 10;
let b = 12;
let c = 100;

function add(a, b) {
    a = 20;
    console.log(a + b);

    function subtract(c, d) {
        console.log(c - d);
    }

    subtract(c, 20);

}
add(a, b);
// console.log(c);
// console.log(a);