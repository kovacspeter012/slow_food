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
    li.innerHTML = element;
    ul.appendChild(li);
});