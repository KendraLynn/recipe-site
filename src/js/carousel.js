import { appkey } from './key.js';

export default (num, callbackcaro) => {
    const keyid = "3de3a8a8";
    let url = `https://api.spoonacular.com/recipes/random?number=${num}&apiKey=${appkey}&tags=lunch`;

    let fetchPromise = fetch(url);
    let jsonPromise = fetchPromise.then(response => response.json());
    jsonPromise.then(json => callbackcaro(json));
};