const box = document.querySelector('.search');

box.addEventListener('click', (e)=>{
    box.classList.toggle('active');
    console.log("clicked")
});