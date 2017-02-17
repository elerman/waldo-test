const RECEIVE_PIZZAS = 'RECEIVE_PIZZAS'
function receivePizzas(pizzas) {
    return {type: RECEIVE_PIZZAS, pizzas: pizzas}
}

export const fetchPizzas = () => {
    console.log("fetching pizzas");

    return function (dispatch) {

        var query = "{pizzaSizes{name,maxToppings,toppings{topping{name,price}},basePrice}}"

        return fetch('https://core-graphql.dev.waldo.photos/pizza?query=' + query)
            .then(response => response.json())
            .then(json => dispatch(receivePizzas(json.data.pizzaSizes)))
    }
}

const PIZZA_SELECTION = 'PIZZA_SELECTION'
export const pizzaSelection = (pizza) => {
    return {type: PIZZA_SELECTION, pizza: pizza}
}

const TOPPING_SELECTION = 'TOPPING_SELECTION'
export const toppingSelection = (topping) => {
    return {type: TOPPING_SELECTION, topping: topping}
}

const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = (pizzaOrder)=> {
    return {type: ADD_TO_CART, order: pizzaOrder}
}