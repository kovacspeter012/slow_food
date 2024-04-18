import foods_data from './foods_data.js';


class Food{
    constructor(row){
        let splitted = row.split(';');
        this.id = splitted[0]
        this.name = splitted[1];
        this.category = splitted[2];
        this.description = splitted[3];
        this.price = Number(splitted[4]);
        this.picture = splitted[5];
    }

    static createFoods(foods_data){
        let foods = [];
        foods_data.forEach(row => {
            foods.push(new Food(row));
        });
        return foods;
    }

    ToCard(){
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style = "width: 18rem;";

        const img = document.createElement('img');
        img.classList.add("card-img-top");
        img.src = this.picture;
        img.alt = "Étel képe";
        cardDiv.appendChild(img);

        const div = document.createElement('div');
        div.classList.add("card-body");

        const h5 = document.createElement('h5');
        h5.classList.add("card-title");
        h5.innerHTML = this.name;
        div.appendChild(h5);

        const p = document.createElement('p');
        p.classList.add("card-text");
        p.innerHTML = this.description;
        div.appendChild(p);

        const price = document.createElement('p');
        price.classList.add("card-text");
        price.innerHTML = this.price + " Ft";
        div.appendChild(price);

        const button = document.createElement('button');
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.id = this.id;
        button.addEventListener('click', this.ToCart)
        button.innerHTML = "Kosárba";
        div.appendChild(button);

        cardDiv.appendChild(div);

        return cardDiv;
    }



    ToCart(event) {
        let foods = Food.createFoods(foods_data);
        const shoppingList = document.getElementById('shoppingList')
        foods.forEach(element => {
            if(event.target.id == element.id)    {

                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card');
                cardDiv.dataset.id = element.id
                cardDiv.style = "width: 18rem;";
    
        
                const div = document.createElement('div');
                div.classList.add("card-body");
        
                const h5 = document.createElement('h5');
                h5.classList.add("card-title");
                h5.innerHTML = element.name;
                div.appendChild(h5);
        
                const p = document.createElement('p');
                p.classList.add("card-text");
                p.innerHTML = element.description;
                div.appendChild(p);
        
                const price = document.createElement('p');
                price.classList.add("card-text");
                price.innerHTML = element.price + " Ft";
                div.appendChild(price);

                const button = document.createElement('button');
                button.classList.add("btn");
                button.classList.add("btn-danger");
                button.addEventListener('click', (event) => {

                const deleteDiv = document.querySelector(`[data-id="${event.target.id}"]`)
                console.log(deleteDiv);
                            
                });
                button.innerHTML = "Törlés";
                div.appendChild(button);

                cardDiv.appendChild(div);
                
                shoppingList.appendChild(cardDiv);
            }

                     
        });
    }




}
export {Food};