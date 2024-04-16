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

function szarnyasWrite() {
    foods.forEach(element => {
        if (element.category == "Szárnyas") {
            const div = document.createElement('div')
            element.ToCard();
        }
    });
}
function marhaWrite() {
    
}
function sertesWrite() {
    
}
function vegetarianusWrite() {
    
}