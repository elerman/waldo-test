import React, {Component} from 'react'
import NumberFormat from 'react-number-format'

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
            <section className="pizza-order">
                <h5>Current Pizza selection:</h5>
                <label className="label label-success">{this.props.pizza.name}</label>
                <br />
                {toppings
                    .map((t, index) => {
                        return <label key={index} className="label label-info">{t.name}</label>
                    })}
                <br />
                <label><NumberFormat displayType={'text'} value={price.toFixed(2)} prefix={'$'}/></label>
            </section>
        )
    }
}

export default PizzaOrder