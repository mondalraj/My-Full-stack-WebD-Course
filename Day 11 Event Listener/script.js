const div = document.querySelector('div');

div.addEventListener('click', e => {
    console.log("Button Clicked");
    div.style.color = "red";
});
