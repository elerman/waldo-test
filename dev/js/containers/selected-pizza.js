import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toppingSelection} from '../actions/index'

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
            return <li key={index}>
                       <label>
                            {topping.topping.name}
                            <input type="checkbox" 
                            disabled={checkDisable(this.props,topping)} 
                            checked={checkState(this.props,topping)}
                            onChange={(evt)=>this.selectTopping(evt,topping.topping)}>
                            </input>
                       </label>
                   </li>
        })
            return (
                <div>
                    Your selected pizza {this.props.pizza.name}    
                    <ul>{toppings}</ul>
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