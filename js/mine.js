new WOW().init();

/*asider */
let aside = $(".links-iconYummy").outerWidth(true);
$("aside").animate({left:`-${aside}`},0) 

$(".fa-xmark").click(function(){
    $("aside").animate({left:`-${aside}`},500)
    $(".fa-xmark").css({display:`none`},200)
    $(".fa-bars").css({display:`block`},200)
})

$(".fa-bars").click(function(){
    $("aside").animate({left:`0px`},500)
    $(".fa-bars ").css({display:`none`},200)
    $(".fa-xmark").css({display:`block`},200)
})

function getSearch(){
     $(".categories").css({ display: `none`}, 200);
    $(".meals").css({ display: `none` }, 200);
    $(".searchCat").css({ display: `block` }, 200);  
    $(".area").css({ display: `none` }, 200);
    $(".contactUs").css({ display: `none` }, 200);
    $(".ingredients").css({ display: `none` }, 200);
    $(".areaMeals").css({ display: `none` }, 200);
    $(".ingredMeals").css({ display: `none` }, 200);
    $(".welcome").css({ display: `none` }, 200);
    $(".mealDes").css({ display: `none` }, 200);
    $("aside").animate({left:`-${aside}`},500) 
    $(".fa-xmark").css({display:`none`},200)
    $(".fa-bars").css({display:`block`},200)
}
function getCategories(){
    $(".categories").css({ display: `block` }, 200);
    $(".meals").css({ display: `none` }, 200);
    $(".searchCat").css({ display: `none` }, 200);  
    $(".area").css({ display: `none` }, 200);
    $(".contactUs").css({ display: `none` }, 200);
    $(".ingredients").css({ display: `none` }, 200);
    $(".areaMeals").css({ display: `none` }, 200);
    $(".ingredMeals").css({ display: `none` }, 200);
    $(".welcome").css({ display: `none` }, 200);
    $(".mealDes").css({ display: `none` }, 200);
    $("aside").animate({left:`-${aside}`},500) 
    $(".fa-xmark").css({display:`none`},200)
    $(".fa-bars").css({display:`block`},200)
    getCat()
}
function getArea(){
    $(".categories").css({ display: `none` }, 200);
    $(".meals").css({ display: `none` }, 200);
    $(".searchCat").css({ display: `none` }, 200);  
    $(".area").css({ display: `block` }, 200);
    $(".contactUs").css({ display: `none` }, 200);
    $(".ingredients").css({ display: `none` }, 200);
    $(".areaMeals").css({ display: `none` }, 200);
    $(".ingredMeals").css({ display: `none` }, 200);
    $(".welcome").css({ display: `none` }, 200);
    $(".mealDes").css({ display: `none` }, 200);
    $("aside").animate({left:`-${aside}`},500) 
    $(".fa-xmark").css({display:`none`},200)
    $(".fa-bars").css({display:`block`},200)
    getAreaLocation()
}  
function getIngredients(){
     $(".categories").css({ display: `none` }, 200);
    $(".meals").css({ display: `none` }, 200);
    $(".searchCat").css({ display: `none` }, 200);  
    $(".area").css({ display: `none` }, 200);
    $(".contactUs").css({ display: `none` }, 200);
    $(".ingredients").css({ display: `block` }, 200);
    $(".areaMeals").css({ display: `none` }, 200);
    $(".ingredMeals").css({ display: `none` }, 200);
    $(".welcome").css({ display: `none` }, 200);
    $(".mealDes").css({ display: `none` }, 200);
    $("aside").animate({left:`-${aside}`},500) 
    $(".fa-xmark").css({display:`none`},200)
    $(".fa-bars").css({display:`block`},200)
    getIngred()
}
function getContactUs(){
     $(".categories").css({ display: `none` }, 200);
    $(".meals").css({ display: `none` }, 200);
    $(".searchCat").css({ display: `none` }, 200);  
    $(".area").css({ display: `none` }, 200);
    $(".contactUs").css({ display: `block` }, 200);
    $(".ingredients").css({ display: `none` }, 200);
    $(".areaMeals").css({ display: `none` }, 200);
    $(".ingredMeals").css({ display: `none` }, 200);
    $(".welcome").css({ display: `none` }, 200);
    $(".mealDes").css({ display: `none` }, 200);
    $("aside").animate({left:`-${aside}`},500) 
    $(".fa-xmark").css({display:`none`},200)
    $(".fa-bars").css({display:`block`},200)
}

 /*regex*/  
function validateName() {
    if ((/^[a-zA-Z ]+$/.test(document.getElementById("inputName").value))) {
        document.getElementById("nameMsg").classList.replace("d-block", "d-none");
        return true;
    }
    else {
        document.getElementById("nameMsg").classList.replace("d-none", "d-block");
        return false;
    }

}
function validateEmail() {
    if ((/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("inputEmail").value))) {
        document.getElementById("emailMsg").classList.replace("d-block", "d-none")
        return true;
    }
    else {
        document.getElementById("emailMsg").classList.replace("d-none", "d-block");
        return false;
    }
}
function phoneValidation() {
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("inputPhone").value)) {
        document.getElementById("phoneMsg").classList.replace("d-block", "d-none")
        return true;
    }
    else {
        document.getElementById("phoneMsg").classList.replace("d-none", "d-block");
        return false;
    }
}
function ageValidation() {
    if ((/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("inputAge").value))) {
        document.getElementById("ageMsg").classList.replace("d-block", "d-none")
        return true;
    }
    else {
        document.getElementById("ageMsg").classList.replace("d-none", "d-block");
        return false;
    }
}
function passwordValidation() {
    if ((/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("inputPass").value))) {
        document.getElementById("passMsg").classList.replace("d-block", "d-none")
        return true;
    }
    else {
        document.getElementById("passwordAlert").classList.replace("d-none", "d-block");
        return false;
    }
}
function repasswordValidation() {
    if (((document.getElementById("inputRepass").value == document.getElementById("inputPass").value))) {
        document.getElementById("repassMsg").classList.replace("d-block", "d-none")
        return true;
    }
    else {
        document.getElementById("repassMsg").classList.replace("d-none", "d-block");
        return false;
    }
}
function inputsValidation() {
    let submitBtn = document.getElementById("submitBtn")
    if (validateName() && validateEmail() && phoneValidation() && ageValidation() && passwordValidation() && repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

/*Api welcome screen */
async function welcome(){
    $(".categories").css({ display: `none`}, 200);
    $(".meals").css({ display: `none` }, 200);
    $(".searchCat").css({ display: `none` }, 200);  
    $(".area").css({ display: `none` }, 200);
    $(".contactUs").css({ display: `none` }, 200);
    $(".ingredients").css({ display: `none` }, 200);
    $(".areaMeals").css({ display: `none` }, 200);
    $(".ingredMeals").css({ display: `none` }, 200);
    $(".welcome").css({ display: `block` }, 200);

    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let welcomeData =await response.json();
    
    let content = "";
    for (let i = 0; i < welcomeData.meals.length; i++) {
       
        content += `
        <div class="col-md-3 mb-3">
        <div class="catImg overflow-hidden position-relative" >
          <a  onclick="getMealDetails('${welcomeData.meals[i].idMeal}')">
              <img src="${welcomeData.meals[i].strMealThumb}" alt="" class="beef w-100 ">
              <div class="layoutImg  bg-white position-absolute  start-0 end-0  text-center rounded-2">
                  <h4 class="text-black">${welcomeData.meals[i].strMeal}</h4>
              </div>
              </a>
        </div>
      </div>`
    }
    document.querySelector(".welCont").innerHTML = content;
}
welcome()
/*Api cat&meals*/
async function getCat(){
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let data =await response.json();
    
    let content = "";
    for (let i = 0; i < data.categories.length; i++) {
       
        content += `
        <div class="col-md-3 mb-3">
        <div class="catImg overflow-hidden position-relative" >
          <a onclick="getSelectedCat('${data.categories[i].strCategory}')">
              <img src="${data.categories[i].strCategoryThumb}" alt="" class="beef w-100 ">
              <div class="layoutImg  bg-white position-absolute  start-0 end-0  text-center rounded-2">
                  <h4 class="text-black">${data.categories[i].strCategory}</h4>
                  <p class="text-black">${data.categories[i].strCategoryDescription}</p>
              </div>
          </a>
        </div>
      </div>`
    }
    document.querySelector(".catCont").innerHTML = content;
}
async function getSelectedCat(meal){
    $(".categories").css({ display: `none` }, 200);
    $(".meals").css({ display: `block` }, 200);

    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`)
    let first =await response.json();

    let content = "";
    for (let i = 0; i < first.meals.length; i++) {
        content += ` <div class="col-md-3 ">
        <div class="catImg overflow-hidden position-relative">
          <div  onclick="getMealDetails('${first.meals[i].idMeal}')">
            <img src="${first.meals[i].strMealThumb}" alt="" class="meal1 w-100 ">
            <div class="layoutImg  bg-white position-absolute  start-0 end-0  rounded-2">
                <h4 class="text-black title1 p-3">${first.meals[i].strMeal}</h4>
            </div>
          </div>
        </div>
    </div>`
    }
    document.querySelector(".selectedCat").innerHTML = content;
}
/*Api search*/
async function searchByLetter(letter){
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    let searchLetterImg =await response.json();
   
    let content = "";
    for (let i = 0; i < searchLetterImg.meals.length; i++) {
        content += `
            <div class="col-md-3">
                <div class="rounded-2 cursor-pointer catImg overflow-hidden position-relative"  onclick="getMealDetails('${searchLetterImg.meals[i].idMeal}')">
                 <img class="w-100" src="${searchLetterImg.meals[i].strMealThumb}" alt="" srcset="">
                  <div class="layoutImg  bg-white position-absolute  start-0 end-0  text-center rounded-2">
                        <h3 class="text-black text-center">${searchLetterImg.meals[i].strMeal}</h3>
                    </div>
                </div>
            </div>`
    }
    document.querySelector(".searchRow").innerHTML = content;
}
async function searchByName(mealName){
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    let searchNameImg =await response.json();

    let content = "";
    for (let i = 0; i < searchNameImg.meals.length; i++) {
        content += `
            <div class="col-md-3">
                <div class="rounded-2 cursor-pointer catImg overflow-hidden position-relative"  onclick="getMealDetails('${searchNameImg.meals[i].idMeal}')">
                 <img class="w-100" src="${searchNameImg.meals[i].strMealThumb}" alt="" srcset="">
                  <div class="layoutImg  bg-white position-absolute  start-0 end-0  text-center rounded-2">
                        <h3 class="text-black text-center">${searchNameImg.meals[i].strMeal}</h3>
                    </div>
                </div>
            </div>`
    }
    document.querySelector(".searchRow").innerHTML = content;
}
/*Api area*/
async function getAreaLocation(){
    $(".areaRow").css({ display: `none` }, 200);
    $(".areaDiv").css({ display: `block` }, 200);
   
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let areaName =await response.json();
    
    let content = "";
    for (let i = 0; i < areaName.meals.length; i++) {
        content += `
        <div class="col-md-3 mb-4 text-center cursor-pointer">
        <i class="fa-solid fa-house-laptop text-white fa-3x"></i>
        <h2 onclick="getCurrentArea('${areaName.meals[i].strArea}')">${areaName.meals[i].strArea}</h2>
        </div>`
    }
    document.querySelector(".areaDiv").innerHTML = content;
}
async function getCurrentArea(theLocationMeals){
    $(".categories").css({ display: `none` }, 200);
    $(".meals").css({ display: `none` }, 200);
    $(".searchCat").css({ display: `none` }, 200);  
    $(".area").css({ display: `none` }, 200);
    $(".contactUs").css({ display: `none` }, 200);
    $(".ingredients").css({ display: `none` }, 200);
    $(".areaMeals").css({ display: `block` }, 200);
    $(".ingredMeals").css({ display: `none` }, 200);
    $(".mealDes").css({ display: `none` }, 200);
    $(".areaDiv").css({ display: `none` }, 200);
    $(".areaRow").css({ display: `block` }, 200);
    
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${theLocationMeals}`)
    let areaMeals =await response.json();

    let content = "";
    for (let i = 0; i < areaMeals.meals.length; i++) {
        content += `
            <div class="col-md-3 mb-3 pe-3">
                <div class="rounded-2 cursor-pointer catImg overflow-hidden position-relative" onclick="getMealDetails('${areaMeals.meals[i].idMeal}')">
                 <img class="w-100" src="${areaMeals.meals[i].strMealThumb}" alt="" srcset="">
                  <div class="layoutImg  bg-white position-absolute  start-0 end-0  text-center rounded-2">
                        <h3 class="text-black text-center">${areaMeals.meals[i].strMeal}</h3>
                    </div>
                </div>
            </div>`
    }
    document.querySelector(".areaRow").innerHTML = content;
}
/*Api ingrediant*/
async function getIngred(){
    $(".ingredientsDis").css({ display: `none` }, 200);
    $(".ingredientsDiv").css({ display: `block` }, 200);
    
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let Ingred =await response.json();
   
    let content = "";
    for (let i = 0; i < 14; i++) {
        content += `
            <div class="col-md-3 mb-3 pe-3" onclick="getIngredMeals('${Ingred.meals[i].strIngredient}')">
                <i class="fa-solid fa-drumstick-bite fa-3x"></i>
                <h3 class="text-white">${Ingred.meals[i].strIngredient}</h3>
                <p class="text-white">${Ingred.meals[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
            </div>
            `
    }
    document.querySelector(".ingredientsDiv").innerHTML = content;
}
async function getIngredMeals(IngredMeal){
    $(".categories").css({ display: `none` }, 200);
    $(".meals").css({ display: `none` }, 200);
    $(".searchCat").css({ display: `none` }, 200);  
    $(".area").css({ display: `none` }, 200);
    $(".contactUs").css({ display: `none` }, 200);
    $(".ingredients").css({ display: `none` }, 200);
    $(".areaMeals").css({ display: `none` }, 200);
    $(".ingredMeals").css({ display: `block` }, 200);
    $(".ingredientsDiv").css({ display: `none` }, 200);
    $(".ingredientsDis").css({ display: `block` }, 200);
    $(".mealDes").css({ display: `none` }, 200);

    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngredMeal}`)
    let Ingred =await response.json();
   
   let content = "";
   for (let i = 0; i < Ingred.meals.length; i++) {
       content += `
       <div class="col-md-3 mb-3 pe-3">
       <div class="catImg overflow-hidden position-relative">
         <a onclick="getMealDetails('${Ingred.meals[i].idMeal}')" >
           <img src="${Ingred.meals[i].strMealThumb}" alt="" class="meal1 w-100 ">
           <div class="layoutImg  bg-white position-absolute  start-0 end-0  rounded-2">
               <h4 class="text-black title1 p-3">${Ingred.meals[i].strMeal}</h4>
           </div>
         </a>
       </div>
   </div>
           `
   }
   document.querySelector(".ingredientsDis").innerHTML = content;
}
/*mealDes */
async function getMealDetails(mealID) {
    $(".categories").css({ display: `none`}, 200);
    $(".meals").css({ display: `none` }, 200);
    $(".searchCat").css({ display: `none` }, 200);  
    $(".area").css({ display: `none` }, 200);
    $(".contactUs").css({ display: `none` }, 200);
    $(".ingredients").css({ display: `none` }, 200);
    $(".areaMeals").css({ display: `none` }, 200);
    $(".ingredMeals").css({ display: `none` }, 200);
    $(".welcome").css({ display: `none` }, 200);
    $(".mealDes").css({ display: `block` }, 200);
    
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    mealDesData = await response.json();
    let content = "";
    content += `
    <div class="col-md-4 py-5">
        <img class="w-100" src="${mealDesData.meals[0].strMealThumb}" alt="">
        <h2>${mealDesData.meals[0].strMeal}</h2>
    </div>
    <div class="col-md-8 py-5">
        <h2>Instructions</h2>
        <p>${mealDesData.meals[0].strInstructions}</p>
        <h3>Area : ${mealDesData.meals[0].strArea}</h3>
        <h3>Category : ${mealDesData.meals[0].strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
        <li class="alert alert-info m-2 p-1">${mealDesData.meals[0].strCategory}</li>
    `
    for (let i = 1; i <= 20; i++) {
        if (mealDesData.meals[0][`strIngredient${i}`]) {
            content += `<li class="alert alert-info m-2 p-1">${mealDesData.meals[0][`strMeasure${i}`]} ${mealDesData.meals[0][`strIngredient${i}`]}</li>`
        }
    }
    
    content += `</ul>
        <h3>Tags : </h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap ">`;
    let tags = mealDesData.meals[0].strTags?.split(",")
    if (!tags) tags = []

    for (let i = 0; i < tags.length; i++) {
        content += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }
    content += ` </ul>
        <a href="${mealDesData.meals[0].strSource}" target="_blank"class="btn btn-success">Source</a>
        <a href="${mealDesData.meals[0].strYoutube}" target="_blank"class="btn btn-danger">Youtube</a>
    </div>
            `
    document.querySelector(".mealDesRow").innerHTML = content;
}

$(document).ready(function(){
    $(".loadingScreen").fadeOut(1000)
})