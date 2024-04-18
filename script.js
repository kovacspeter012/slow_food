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
    const button = document.createElement('button');
    button.innerHTML = element;
    button.id = 'categoryId';
    button.addEventListener('click', categorySelection);
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
        shoppingList.innerHTML = 'A kosarad üres.'
    }

}

cartButton.addEventListener('click', shoppingCart)



