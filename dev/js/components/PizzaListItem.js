import React, {Component} from 'react'
import NumberFormat from 'react-number-format'

class PizzaListItem extends Component {

    constructor(props){
        super(props)
    }

    render () {

        const toppings = this.props.toppings?this.props.toppings.map((topping, index)=>{
        return <li key={index} className="topping label label-info">
                    <label>
                        {topping.name}
                    </label>
                </li>
        }):'';
        return (
            <div className="pizza-list-item">
                <span>{this.props.pizza.name} Pizza</span> - <NumberFormat displayType={'text'} value={this.props.pizza.basePrice} prefix={'$'}/>
                <br />
                {toppings}
            </div>
        )
    }
}

export default PizzaListItem