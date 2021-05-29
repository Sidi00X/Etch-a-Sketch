const first = document.querySelector('.container');
let boxes = document.querySelectorAll('.grid');

for (i = 0; i < 20; i++) {
    let div = document.createElement('div');
    div.classList.add('grid')
    div.textContent = i+1;
    first.appendChild(div);
}


boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'blue';
    });
});
