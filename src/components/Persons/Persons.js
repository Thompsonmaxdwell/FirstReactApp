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

     changedNameHandler =(e, key)=>{
         
// ========================= find the index of the of target one that is click or onChange =========================
         let personIndex = [...this.state.persons].findIndex(item =>{
            return item.key === key
        })
// ========================= Update the name of target one which is  click or onChange =========================
        let person = [...this.state.persons][personIndex];
        person.name = e.target.value
        
// ========================= update the target part of the  Array that the name have already change  =========================
        let persons = [...this.state.persons];
            persons[personIndex] = person;
            // ========================= update the Dom =========================
        this.setState({ persons })

    }
    deletePersonHandler = (e, key)=>{

// ========================= find the index of the of target one that is click  =========================
        let personIndex = [...this.state.persons].findIndex(item => item.key === key);
        let persons =  this.state.persons;

        // ========================= find the index of the of target one that is click  =========================
        let deletPersonByIndex = this.state.persons.slice();
        deletPersonByIndex.splice(personIndex , 1);

        persons = deletPersonByIndex;
        this.setState({ persons });
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
                        age = {person.age}
                        changed = {(e) => this.changedNameHandler(e, person.key)}
                        personDelete = {(e) => this.deletePersonHandler(e, person.key)}/>
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