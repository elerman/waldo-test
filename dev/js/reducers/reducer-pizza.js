var initialState = {
    pizzas: [],
    selectedPizza: null,
    selectedToppings: [],
    order:[]
};

export default function (state = initialState, action) {
    switch(action.type){
        case 'RECEIVE_PIZZAS':
            return Object.assign({},state,
            {
                pizzas:action.pizzas
            })
            break;
        case 'PIZZA_SELECTION':
            return Object.assign({},state,{selectedPizza: action.pizza, selectedToppings:[]});
            break;
        case 'TOPPING_SELECTION':

            let tp = state.selectedToppings.find(t=>{
                return t.name == action.topping.name
            })
            let selectedToppings = tp?
                state.selectedToppings.filter(t=>t.name!=tp.name)
                :[...state.selectedToppings, action.topping]

            return Object.assign({},state,{selectedToppings: selectedToppings})
            break;

        case 'ADD_TO_CART':

            return Object.assign({},state,{order:[...state.order,action.order], selectedPizza:null,selectedToppings:[]})
            break;
        
        default:
            return state;
    }
}