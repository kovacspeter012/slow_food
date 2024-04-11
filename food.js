class Food{
    constructor(row){
        let splitted = row.split(';');
        this.name = splitted[0];
        this.category = splitted[1];
        this.description = splitted[2];
        this.price = Number(splitted[3]);
        this.picture = splitted[4];
    }

    static createFoods(foods_data){
        let foods = [];
        foods_data.forEach(row => {
            foods.push(new Food(row));
        });
        return foods;
    }

    ToCard(){

    }
}
export {Food};