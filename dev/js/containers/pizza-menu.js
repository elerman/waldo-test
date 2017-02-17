import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPizzas, pizzaSelection} from '../actions/index'
import PizzaListItem from '../components/PizzaListItem'

class PizzaMenu extends Component {

    constructor(props){
        super(props);
    }

    handlePizzaClick(evt, pizza){
        evt.preventDefault();
        this.props.pizzaSelection(pizza);
    }

    render() {
        if(this.props.pizzas){
            const pizzalist = this.props.pizzas.map((p, index)=>{
                return <li key={index} onClick={(evt)=>{this.handlePizzaClick(evt,p)}}><PizzaListItem pizza={p}/></li>
            });

            return (
                <section className="pizza-menu">
                    <h3>Choose your pizza!</h3>
                    <ul className="list-unstyled">
                        {pizzalist}
                    </ul>
                </section>
            );
        }return (<div>Fetching...</div>)
    }

    componentDidMount() {
        this.props.fetchPizzas();
    }
}

const mapStateToProps = (state, ownProps) => {
    return {pizzas: state.pizzaService?state.pizzaService.pizzas:null};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchPizzas: fetchPizzas, pizzaSelection: pizzaSelection},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PizzaMenu);