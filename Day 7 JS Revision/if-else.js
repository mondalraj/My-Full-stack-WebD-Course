var profile = {
    name: "Nikita",
    email: "nikitathakur@gmail.com",
    password: "abc123",
    isLoggedIn: false
};

if(profile.isLoggedIn == true){
    console.log(`Hi ${profile.name} ! You are eligible to attempt the test`)
} else {
    console.log(`First LogIn, then attempt the test`);
}


var course = {
    name: "React Native Course",
    price: 1999,
    discount: 49
};

console.log(`CourseName: ${course.name}, Initial Price: $${course.price}`);


var discount = course.price - ((course.discount/100)*course.price);
console.log(discount);
console.log(Math.round(discount));