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

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    cashInRegister += selectedPizza.price;
    const newOrder = {
        pizza: selectedPizza,
        status: 'ordered'
    }
    orderQueue.push(newOrder);
    return newOrder;
}