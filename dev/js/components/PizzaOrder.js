import React, {Component} from 'react'

class PizzaOrder extends Component {

    constructor(props) {
        console.log(props)
        super(props)
    }

    render() {
        if (!this.props.pizza) 
            return null;
        const toppings = this.props.toppings?this.props.toppings:[]
        const sumt = toppings.reduce((a,b)=>{
            return {price:a.price + b.price}
        },{price:0})
        const price = this.props.pizza.basePrice + sumt.price

        return (
            <div>
                <label>Current Pizza selection:</label>
                <label>{this.props.pizza.name}</label>
                {toppings
                    .map((t, index) => {
                        return <label key={index}>{t.name}</label>
                    })}
                {price}
            </div>
        )
    }
}

export default PizzaOrder