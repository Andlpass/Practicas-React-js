import React from 'react';
import Card from './NavBar/Items/ItemCard'


function Home() {
    return(
        <ul>
            <li>
            <Card number="1"/>
            </li>
            <li>
            <Card number="2"/>
            </li>
            <li>
            <Card number="3"/>
            </li>
            <li>
            <Card number="4"/>
            </li>
        </ul>
    );
}

export default Home;