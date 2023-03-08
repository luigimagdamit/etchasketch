const body = document.querySelector('body');
body.setAttribute('style', 'background-color: #fff8e9')
const container = document.querySelector('#container');
container.setAttribute('style', 'text-align: center;')
const content = document.querySelector('.content');
content.setAttribute('style', 'display: inline-grid; grid-template-columns: repeat(10, 1fr); border: 1px solid black');

const size = 10;

function createBox() {
    let clicked = false;
    const box = document.createElement('div');
    box.setAttribute('style',
        'height: 30px; width: 30px; border: 0px solid black'); 

    box.classList.add('box');
    box.onclick = () => 
        {
            if(clicked == false) {
                box.setAttribute('style','background-color: black');
                clicked = true;
            } else {
                box.setAttribute('style','background-color: transparent');
                clicked = false;
            }
            
        }
    content.appendChild(box);

}

for(let i = 0; i < size**2; i++) {
    createBox();    
}

