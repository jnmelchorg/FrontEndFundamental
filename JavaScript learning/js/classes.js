
class Pizza {
    crust = "original";
    #sauce = "traditional"; // Private class variable
    #size;
    constructor (pizzaSize) {
        this.#size = pizzaSize;
    }

    get pizzaCrust() {
        return this.crust;
    }

    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    bake() {
        console.log(`Size ${this.#size}, crust ${this.crust} and sauce ${this.#sauce}`);
    }
}
const myPizza = new Pizza("margherita", "small");
myPizza.pizzaCrust = "thin";
console.log(myPizza.pizzaCrust);
myPizza.bake();

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize){
        super(pizzaSize);
        this.type = "Something";
    }
    slice () {
        console.log(`Type ${this.type}, size ${this.size} and crust ${this.crust} has 8 slices`)
    }
}

const specialtyPizza = new SpecialtyPizza("small");
specialtyPizza.slice();


function factoryPizza(pizzaSize2) {
    const pizzaType = "original";
    const pizzaSize = pizzaSize2;
    return {
        bake: () => {console.log(`Type ${pizzaType} and size ${pizzaSize}`);}
    }
};

let factPizza = factoryPizza("medium");
factPizza.bake();
