const menu = [
    {name: "Margrita", price: 10},
    {name: "Veggie", price: 15},
    {name: "Papperoni", price: 10},
    {name: "Cheezy", price: 10},
]

const cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

