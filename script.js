import foods_data from './foods_data.js';
import { Food } from './food.js';

let foods = Food.createFoods(foods_data);

let categories = []
foods.forEach(element => {
    if (!categories.includes(element.category)){
        categories.push(element.category)
    }
});


const ul = document.querySelector('#categories');
categories.forEach(element => {
    const li = document.createElement('li');
    li.id = 'foodsLi'
    const button = document.createElement('button');
    button.innerHTML = element;
    button.id = 'categoryId';
    button.addEventListener('click', categorySelection);
    button.style = 'background-color: black;'
    button.style = 'color: white'
    li.appendChild(button)
    ul.appendChild(li);
});


function categorySelection(event) {
   if (event.target.innerHTML == "Szárnyas") {

        szarnyasWrite();
   }
   else if (event.target.innerHTML == "Marha") {
        marhaWrite();
   }
   else if (event.target.innerHTML == "Sertés") {
        sertesWrite();
   }
   else if (event.target.innerHTML == "Vegetáriánus"){
        vegetarianusWrite();
   }
}
const foodDiv = document.querySelector('#foods');
function szarnyasWrite() {
    foodDiv.innerHTML = "";
    foods.forEach(element => {
        if (element.category == "Szárnyas") {
            
            foodDiv.appendChild(element.ToCard());
        }
    });
}
function marhaWrite() {
    foodDiv.innerHTML = "";
    foods.forEach(element => {
        if (element.category == "Marha") {
            
            foodDiv.appendChild(element.ToCard());
        }
    });
}
function sertesWrite() {
    foodDiv.innerHTML = "";
    foods.forEach(element => {
        if (element.category == "Sertés") {
            
            foodDiv.appendChild(element.ToCard());
        }
    });
}
function vegetarianusWrite() {
    foodDiv.innerHTML = "";
    foods.forEach(element => {
        if (element.category == "Vegetáriánus") {
            
            foodDiv.appendChild(element.ToCard());
        }
    });
}


const cartButton = document.getElementById('shoppingCart')
const shoppingList = document.getElementById('shoppingList')




function shoppingCart(params) {
    shoppingList.style.display = 'block'
    if (shoppingList.innerHTML == ''){
        const empty = document.createElement('p')
        const noneImage = document.createElement('img')
        noneImage.src = 'logo.png'
        noneImage.style = 'margin-top: 80%; width: 350px; height: 350px'
        empty.innerHTML = 'A kosarad üres.'
        empty.style = 'font-family: PermanentMarker-Regular; text-align: center; font-size: 1.8rem'
        shoppingList.appendChild(empty)
        shoppingList.appendChild(noneImage)
        shoppingList.style = 'background-color: rgba(253, 200, 52, 0.6);'
    }

}

cartButton.addEventListener('click', shoppingCart)



