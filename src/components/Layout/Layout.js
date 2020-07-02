import React, { Component } from 'react';
import scss from '../Layout/Layout.module.scss';
import Aux from '../hoc/aux';
import Persons from '../Persons/Persons';


class Layout extends Component {
  

    render() { 
       
        
        return ( 
            <Aux>
                <h1 className={scss.App__title}>{this.props.title}</h1>
                <Persons />
            </Aux>
   
         );
    }
}
 
export default Layout;