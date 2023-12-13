function createEl(e){
    const element  = document.createElement(e);
    return element
}
const MAINCONTAINER = createEl('div');
MAINCONTAINER.classList.add("main-container");

const IMG = createEl('img');
IMG.src = 'abx';
IMG.alt = 'movie-image';


// append
MAINCONTAINER.appendChild(IMG);

document.body.appendChild(MAINCONTAINER)