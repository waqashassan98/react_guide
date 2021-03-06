import React from 'react';
import Radium from 'radium';
import './Person.css';
/**
 * Component is a function that returns jsx
 */
const person = (props) => {
    
    const style =  {
        '@media (min-width: 500px)': {
            width: '450px',
        }
    }
    return ( 
        <div className="Person" style={style}>
            <p onClick={props.click} >I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>    
    ) 
}

// export default person;
export default Radium(person);
