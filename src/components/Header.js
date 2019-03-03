import React from 'react';
import {NavLink} from 'react-router-dom';



const Header = () => (
    <div>
     <header>
        <h1>Expensify</h1>
        <NavLink to ='/' activeClassName='is-active' exact ={true}> Dashboard Home </NavLink>
        <NavLink to ='/create'  activeClassName='is-active' exact ={true}> Add Expenses </NavLink>
        
        
     </header>
    </div>
);

export default Header;