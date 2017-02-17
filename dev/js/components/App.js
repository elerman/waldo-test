import React from 'react';
import AddPizza from '../containers/add-pizza';
import Cart from '../containers/cart';
require('../../scss/style.scss');

const App = () => (
    <div className="container text-center">
        <div className="row">
            <div className="col-md-12">
                <h1>Pizza App - Waldo test</h1>
                <AddPizza/>
                <Cart />
            </div>
        </div>
    </div>
);

export default App;
