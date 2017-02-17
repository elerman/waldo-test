import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PizzaListItem from '../components/PizzaListItem'
import NumberFormat from 'react-number-format'

class Cart extends Component {
    render () {

        const finalPrice = this.props.order.reduce((a,b)=>{return {finalPrice: a.finalPrice + b.finalPrice}},{finalPrice:0})

        return (
            <ul>
                {this.props.order.map((o)=>{
                    return (<li>
                                <PizzaListItem pizza={o.pizza} />
                                <NumberFormat displayType={'text'} value={o.finalPrice} prefix={'$'}/>
                            </li>)
                })}

                <label>Total: <NumberFormat displayType={'text'} value={finalPrice.finalPrice} prefix={'$'}/></label>
            </ul>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        order: state.pizzaService.order
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)