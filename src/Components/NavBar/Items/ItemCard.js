import React from 'react';
import {Link, Route} from 'react-router-dom';


function Card(props){
    return(
        <div> 
            <h2>Producto {props.number}</h2>
            <Route path={`/Descripcion/:id`}>
            <p><Link to="/Descripcion">Descripcion {props.number}</Link></p>
            </Route>
            <p>Precio</p>
        </div>
    );
};

export default Card;