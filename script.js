import foods_data from './foods_data.js';
import { Food } from './food.js';

const shoppingList = document.getElementById('shoppingList')
loadLocalStorage();

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
        window.scrollBy(0, 1500) 

   }
   else if (event.target.innerHTML == "Marha") {
        marhaWrite();
        window.scrollBy(0, 1500) 

   }
   else if (event.target.innerHTML == "Sertés") {{}
        sertesWrite();
        window.scrollBy(0, 1500) 

   }
   else if (event.target.innerHTML == "Vegetáriánus"){
        vegetarianusWrite();
        window.scrollBy(0, 1500) 

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





function shoppingCart(params) {


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
    shoppingList.style.display = 'block'
    const link = document.createElement('a')
    const pay = document.createElement('button')
    pay.innerHTML = 'Fizetés'
    link.href = 'pay.html'
    pay.style = 'margin-left: 40%; margin-top: 20%; background-color: black; color: white; border: none; border-radius: 12px; padding: 4%; text-decoration: none; font-size: larger'
    link.append(pay)
    shoppingList.appendChild(link)
    

}

const upButton = document.getElementById('up')

function scrollUp() {
    window.scrollBy(0, -1500) 
    console.log('asd');

}

upButton.addEventListener('click', scrollUp)

cartButton.addEventListener('click', shoppingCart)

function loadLocalStorage() {
    var storetFoods = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        storetFoods.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
    if (storetFoods != null) {
        storetFoods.forEach(element => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            cardDiv.dataset.id = element.id
            cardDiv.style = "width: 18rem; color: white; background-color: rgba(0, 0, 0, 0.8); margin: auto; margin-top: 4%;"
    
            const div = document.createElement('div');
            div.classList.add("card-body");
    
            const h5 = document.createElement('h5');
            h5.classList.add("card-title");
            h5.innerHTML = element.name;
            h5.style = " font-weight: bolder; font-family: PermanentMarker-Regular;"
            div.appendChild(h5);
    
            const p = document.createElement('p');
            p.classList.add("card-text");
            p.innerHTML = element.description;
            p.style = "font-family: 'Courier New', Courier, monospace;"
            div.appendChild(p);
    
            const price = document.createElement('p');
            price.classList.add("card-text");
            price.innerHTML = element.price + " Ft";
            div.appendChild(price);

            const button = document.createElement('button');
            button.classList.add("btn");
            button.classList.add("btn-danger");
            button.id = element.id;
            button.addEventListener('click', (event) => 
            {
                const deleteDiv = document.querySelector(`[data-id="${event.target.id}"]`)
                deleteDiv.remove();
                localStorage.removeItem(event.target.id);
                        
            });
            button.innerHTML = "Törlés";

            div.appendChild(button);
            
    
            cardDiv.appendChild(div);
                    
            shoppingList.appendChild(cardDiv);
        });
    }
}

