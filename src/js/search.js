import { appkey } from './key.js';

//get search results
export function getSearch(num, callback, value) {
    const keyid = "3de3a8a8";

    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${appkey}&query=${value}&number=${num}&ingredients_{500X500}`;
    let fetchPromise = fetch(url);
    let jsonPromise = fetchPromise.then(response => response.json());
    jsonPromise.then(json => callback(json));
};

//function of create a search page
export function createSearchPage() {
    let mainEl = document.getElementById("contentId");
    mainEl.innerHTML = "";
    let searchdiv = document.createElement("div");
    searchdiv.classList.add("c-search");
    searchdiv.id = "searchMainPageId";

    let searchbtn = document.createElement("button");
    searchbtn.innerHTML = "Search";
    searchbtn.id = "searchbtnid";
    let searchinput = document.createElement("input");
    searchinput.setAttribute("type", "text");
    searchinput.id = "searchinputid";

    searchdiv.append(searchbtn);
    searchdiv.append(searchinput);
    mainEl.append(searchdiv);

}

export function findInfoById(rid, callbackfindbyid) {

    const appkey = "7dd85c4c0349471cbb8b22b2e6ba1894";
    let urlingredient = `https://api.spoonacular.com/recipes/${rid}/ingredientWidget.json?apiKey=${appkey}`;
    let fetchPromise = fetch(urlingredient);
    let jsonPromise = fetchPromise.then(response => response.json())
    jsonPromise.then(json => callbackfindbyid(json));
}


