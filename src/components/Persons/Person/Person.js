import React from 'react';
import styles from './Person.module.css';//should also import the CSS file



const Person = (props) =>
{
    return (

        <div className={styles.Person}>
                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old </p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}  //initial value name is added by value
                />  
        </div>

    )

}

export default Person;