const body = document.body;
// body.append("Hello Aakash");

const div = document.createElement('div');
body.append(div);

div.innerText = "Heelo Akash";

const del = document.querySelector('.abc');
del.remove();


const span = document.createElement('span');
body.append(span);
span.innerText = "It is morning outside";

span.classList.add("active");
span.classList.add("demo");

span.style.backgroundColor = "yellow";