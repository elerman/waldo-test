import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PizzaListItem from '../components/PizzaListItem'
import NumberFormat from 'react-number-format'

class Cart extends Component {
    render () {

        const finalPrice = this.props.order.reduce((a,b)=>{return {finalPrice: a.finalPrice + b.finalPrice}},{finalPrice:0})

        return (
            <section className="row cart">
                <h2>Your order:</h2>
                <div className="col-md-12">
                    <ul className="list-unstyled">
                        {this.props.order.map((o,index)=>{
                            return (<li key={index}>
                                        <PizzaListItem pizza={o.pizza} toppings={o.toppings}/>
                                        <div className="partial-price">
                                            This pizza has a total of: 
                                            <NumberFormat displayType={'text'} value={o.finalPrice.toFixed(2)} prefix={'$'}/>
                                        </div>
                                    </li>)
                        })}
                    </ul>
                    <div className="finalPrice"><label className="label label-primary">Total: <NumberFormat displayType={'text'} value={finalPrice.finalPrice.toFixed(2)} prefix={'$'}/></label></div>
                </div>
            </section>
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