import React,{ Component } from 'react';
import './ItemCount.css';



class ItemCount extends Component{
    state = {
        cant:0 
    };

    
    increase =()=> {
        this.setState({cant: this.state.cant + 1})
    };
    decrease =()=> {
        this.setState({cant: this.state.cant - 1})
    };

    componentDidUpdate(){};
       
    
   
    render() {
        return(
            <div id="producto"> 
                <h4>Producto</h4>
                <div id="contador">
                    <button onClick={this.decrease}>-</button>
                    <p id="">{this.state.cant}</p>
                    <button onClick={this.increase}>+</button>
                </div>
                <button id="cartButton">Comprar  {this.state.cant}</button>
            </div>
        );
    };
};

export default ItemCount;