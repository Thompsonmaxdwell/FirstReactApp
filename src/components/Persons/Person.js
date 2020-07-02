import React  from 'react';
import  style from '../Persons/Persons.module.scss';

const Person = (props) => {
    return (  
            <div className={style.flex}>
                <h3 className={style.person__title}>I 'Am  {props.name} My Age is {props.age},  a Web developer / programmer / Hacker</h3>
                <div className={style.person__img}><p>My Image Here</p></div>
                <input className={style.person_input} type='text' placeholder="Enter Your name"/>
                <input type='file'/>
            </div>
    );
}
 
export default Person;