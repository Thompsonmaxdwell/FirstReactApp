import React, { Component } from 'react';
import Person from './Person';
import Aux from '../hoc/aux';
import  style from '../Persons/Persons.module.scss';

class Persons extends Component {

    state = { 
        persons : [
            { key : 'efdfd' , name : 'ThompsonMaxdwell', age:30, url:''},
            { key : 'dddsf' , name : 'Stanco', age:30, url:''},
            { key : 'jkkiy' , name : 'Vicky', age:50, url:''},
            { key : 'ertye' , name : 'John', age:20, url:''},
            { key : 'bnmpd' , name : 'Patosky', age:18, url:''},
            { key : 'fghjg' , name : 'Jame', age:38, url:''}
        ],
        showPerson : true,
     }

    render() { 

        let perosnList = null;

        if(this.state.showPerson){
            perosnList = (
                 <div  className={style.Person__wrapper}>
                  {  this.state.persons.map((person, index)=>{
                     return <Person 
                        key ={ person.key} 
                        name = {person.name}
                        age = {person.age}/>
                   } )}
                 </div>
            );

        }

        return ( 
         <Aux>
            {perosnList}
         </Aux>
         );
    }
}
 
export default Persons;