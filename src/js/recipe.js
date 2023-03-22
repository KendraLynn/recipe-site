import { appkey } from './key.js';

//call the default function to get random recipe
export default (num, callback) => {
    const keyid = "3de3a8a8";

    let url = `https://api.spoonacular.com/recipes/random?number=${num}&apiKey=${appkey}&tags=lunch`;

    let fetchPromise = fetch(url);
    let jsonPromise = fetchPromise.then(response => response.json());
    jsonPromise.then(json => callback(json));
};

//function of canvas
export function getCanvas() {
    let canvasdiv = document.createElement('div');
    canvasdiv.id = "cadiv";
    let canvas = document.createElement('canvas');
    let mainE = document.getElementById('contentId');
    canvas.id = 'cavs';
    canvas.width = screen.width;
    canvas.height = (mainE.offsetHeight) - 70;
    const c = canvas.getContext('2d');
    const img = new Image();
    img.src = "../src/img/scratchme.jpg";
    img.onload = () => {
        c.drawImage(img, 0, 0, canvas.width, canvas.height)
    }

    canvasdiv.append(canvas);
    mainE.append(canvasdiv);

    let isClear = false;
    canvas.addEventListener('mousedown', e => {
        isClear = true;
    })
    canvas.addEventListener('mousemove', e => {
        if (isClear) {
            const size = 200;
            c.clearRect(e.pageX - size / 2, e.pageY - size / 2, size, size);

        }

        isClear = true;
    })
    canvas.addEventListener('mouseup', e => {
        isClear = false;
    })
}





