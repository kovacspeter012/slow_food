const cart = document.querySelector('#payCart');
const totalPay = document.querySelector('#totalPay');
const payButton = document.querySelector('#order');
payButton.addEventListener('click', lead)
loadLocalStorage(cart);


function loadLocalStorage(element) {
    let sumPay = 0;
    var foods = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        foods.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
    foods.forEach(element => {
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
        sumPay += element.price;
        div.appendChild(price);

        cardDiv.appendChild(div);
                
        cart.appendChild(cardDiv);
    });

    totalPay.innerHTML = sumPay;

}

function lead() {
    let sumPay = 0;
    var foods = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
       localStorage.removeItem(keys[i]);
    }
}