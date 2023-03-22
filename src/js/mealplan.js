import { appkey } from './key.js';
//get week meal plan
export function getMeal(ingredients, callbackmeal) {
    const keyid = "3de3a8a8";

    let url = `https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=${appkey}&diet=${ingredients}`;
    let fetchPromise = fetch(url);
    let jsonPromise = fetchPromise.then(response => response.json());
    jsonPromise.then(json => callbackmeal(json));
};

//create a meal plan page
export function createMealPlanPage() {
    let mainEl = document.getElementById("contentId");
    mainEl.innerHTML = "";

    let mealplanform = document.createElement("div");
    mealplanform.classList.add("c-search");
    mealplanform.id = "mealForm";

    //label
    let ingreLabel = document.createElement("label");
    ingreLabel.id = "ingreLid"
    ingreLabel.innerHTML = "Week Meal Plans For You !"

    //select list of ingredient
    let IngredientI = document.createElement("input");
    IngredientI.setAttribute("type", "text");
    IngredientI.id = "ingredientId";

    let getMealbtn = document.createElement("button");
    getMealbtn.innerHTML = "Get Plan";
    getMealbtn.id = "getMealbtnid";

    mealplanform.append(ingreLabel);
    mealplanform.append(IngredientI);
    mealplanform.append(getMealbtn);
    mainEl.append(mealplanform);

}

