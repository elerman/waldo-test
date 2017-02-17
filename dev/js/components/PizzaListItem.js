import React, {Component} from 'react'
import NumberFormat from 'react-number-format'

class PizzaListItem extends Component {

    constructor(props){
        super(props)
    }

    render () {
        return (
            <div>
                {this.props.pizza.name} - <NumberFormat displayType={'text'} value={this.props.pizza.basePrice} prefix={'$'}/>
            </div>
        )
    }
}

export default PizzaListItem