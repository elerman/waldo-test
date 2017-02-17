import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toppingSelection} from '../actions/index'
import NumberFormat from 'react-number-format'

class SelectedPizza extends Component {

    constructor(props){
        super(props)
    }

    selectTopping(evt, topping){
        this.props.toppingSelection(topping)
    }

    render () {
        if(this.props.pizza){

        const checkDisable = (props,topping)=>{
            let lengthCheck = props.pizza.maxToppings!=null && props.toppings.length>=props.pizza.maxToppings

            return lengthCheck && !props.toppings.find(t=>{
                return t.name==topping.topping.name
            })
        }

        const checkState = (props,topping)=>{
            return props.toppings.find(t=>{
                return t.name==topping.topping.name
            })
        }

        const toppings = this.props.pizza.toppings.map((topping, index)=>{
            return <li key={index} className="topping label label-info">
                       <label>
                            {topping.topping.name} - <NumberFormat displayType={'text'} value={topping.topping.price} prefix={'$'}/>
                            <input type="checkbox" 
                            disabled={checkDisable(this.props,topping)} 
                            checked={checkState(this.props,topping)}
                            onChange={(evt)=>this.selectTopping(evt,topping.topping)}>
                            </input>
                       </label>
                   </li>
        })

        const max = this.props.pizza.maxToppings!=null?'(Max Toppings '+this.props.pizza.maxToppings+')':''
            return (
                <div className="selected-pizza">
                    <h4>You selected a {this.props.pizza.name} pizza - Want to add some toppings? {max}</h4>
                    <ul className="list-inline">{toppings}</ul>
                </div>
            )
        }
        else return null
    }
}

const mapStateToProps =(state, ownProps)=>{
    return {pizza: state.pizzaService.selectedPizza, toppings: state.pizzaService.selectedToppings}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({toppingSelection: toppingSelection}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(SelectedPizza)