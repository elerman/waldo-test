import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PizzaMenu from './pizza-menu'
import SelectedPizza from './selected-pizza'
import PizzaOrder from '../components/PizzaOrder'
import {addToCart} from '../actions/index'

class AddPizza extends Component {

    constructor(props){
        super(props);
    }

    handleSubmit(evt){
        evt.preventDefault();
        
        const sumt = this.props.toppings.reduce((a,b)=>{
            return {price:a.price + b.price}
        },{price:0})

        const price = this.props.pizza.basePrice + sumt.price

        this.props.addToCart({pizza: this.props.pizza, toppings: this.props.toppings, finalPrice: price})
    }

    render() {

        const toppings = this.props.toppings ? this.props.toppings: []

            return (
                <section className="pizza-menu" className="row">
                    <PizzaMenu />
                    <SelectedPizza />
                    <div className="col-md-12">
                        <section className="current-pizza-price">
                            {toppings.length!=0?<label>Selected Toppings: {toppings.length}</label>:''}
                            <PizzaOrder pizza={this.props.pizza} toppings={toppings}/>
                        </section>
                    </div>
                    <div className="col-md-12">
                        <form onSubmit={(evt)=>this.handleSubmit(evt,this)}>
                            <input type="submit" className="btn btn-success btn-block btn-lg" disabled={!this.props.pizza} value="Add Pizza to cart"></input>
                        </form>
                    </div>
                </section>
            )
    }
}

const mapStateToProps = (state, ownProps)=>{
    return {
        pizza: state.pizzaService.selectedPizza?state.pizzaService.selectedPizza:null,
        toppings: state.pizzaService.selectedToppings
    }  
};

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({addToCart: addToCart},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPizza);