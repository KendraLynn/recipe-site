import "./css/styles.css";
import getRecipe from './js/recipe';
import { createSearchPage, getSearch, findInfoById, findnutriInfoById } from './js/search.js';
import { getCanvas } from './js/recipe';
import getCarousel from './js/carousel';
import { createMealPlanPage, getMeal } from './js/mealplan.js';
import templateRoot from "./hbs/root.hbs";
import templateRecipe from "./hbs/recipe.hbs";
import templateMeal from "./hbs/meal.hbs";
import templateCarousel from "./hbs/carousel.hbs";
import templateSearch from "./hbs/search.hbs";
import templateShow from "./hbs/singlerecipe.hbs";
import templateIngredient from "./hbs/ingredient.hbs";


let divapp = document.getElementById("app");

window.onload = () => {

    divapp.innerHTML = templateRoot();
    let mainEl = document.getElementById("contentId");
    mainEl.innerHTML = "";
    //get carousel
    getCarousel(9, callbackcaro);

    //get home 
    document.getElementById("nav-home").addEventListener('click', () => {
        let mainEl = document.getElementById("contentId");
        mainEl.innerHTML = "";
        getCarousel(9, callbackcaro);
    });
    //get random page
    document.getElementById("nav-random").addEventListener('click', () => {
        let mainEl = document.getElementById("contentId");
        mainEl.innerHTML = "";
        getRecipe(1, callback);
        getCanvas();
    });

    //get search page
    document.getElementById("nav-search").addEventListener('click', () => {
        createSearchPage();
        document.getElementById("searchbtnid").addEventListener('click', () => {
            let sinput = document.getElementById("searchinputid");
            getSearch(72, callbacksearch, sinput.value);
        })
    });

    //get meal plan page
    document.getElementById("nav-mealplan").addEventListener('click', () => {
        createMealPlanPage();
        document.getElementById("getMealbtnid").addEventListener('click', () => {
            let sinput = document.getElementById("ingredientId");
            getMeal(sinput.value, callbackmeal);
        })
    });

    //call back  of get random recipe
    let callback = json => {
        let mainEl = document.getElementById("contentId");
        let recipeRec = document.createElement("div");
        recipeRec.id = 'recommendRec';
        let recipes = templateRecipe(json);
        recipeRec.innerHTML = recipes;
        mainEl.append(recipeRec);

    };

    //call back for carosel
    function callbackcaro(json) {
        let mainEl = document.getElementById("contentId");
        let car = document.createElement("div");
        car.id = 'carId';
        let carousels = templateCarousel(json);
        car.innerHTML = carousels;
        mainEl.append(car);

    };


    //show single recipe
    let singleR = document.getElementById("singler");
    singleR.addEventListener("click", function () {
        this.style.display = 'none';
    });
    let single1 = document.getElementsByClassName("single1");
    let single2 = document.getElementsByClassName("single2");

    let showRecipe = function (j, recipeid) {
        //id in json  and click id
        const reci = j.results.find((ae) => {
            return ae.id == recipeid;

        });
        if (reci !== undefined) {
            let showimage = templateShow(reci);
            single1.innerHTML = showimage;

            findInfoById(reci.id, callbackfindbyid);
        }
    }

    function callbackfindbyid(json) {
        let ingredintinfo = templateIngredient(json);
        single2.innerHTML = ingredintinfo;
        singleR.innerHTML = single1.innerHTML + single2.innerHTML;
        singleR.style.display = 'flex';
        singleR.style.flexDirection = "row";

    };



    //call back  of get  search
    let callbacksearch = json => {
        let mainEl = document.getElementById("contentId");
        mainEl.innerHTML = "";
        let searchdiv = document.createElement("div");
        searchdiv.id = 'searchdivid';
        let recipes = templateSearch(json);
        searchdiv.innerHTML = recipes;
        mainEl.append(searchdiv);

        let rlist = document.getElementsByClassName("search-contents");
        for (let r of rlist) {
            r.addEventListener("click", function (ev) {
                showRecipe(json, this.dataset.rid);
            })
        }

    };


    //call back  of get meal plan
    let callbackmeal = json => {
        let mainEl = document.getElementById("contentId");
        mainEl.innerHTML = "";
        let weekmdiv = document.createElement("div");
        weekmdiv.id = 'weekmdivid';
        let recipes = templateMeal(json);
        weekmdiv.innerHTML = recipes;
        mainEl.append(weekmdiv);

    };






}



