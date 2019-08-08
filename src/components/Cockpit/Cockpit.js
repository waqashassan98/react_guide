import React from 'react';
import cockpitStyles from './Cockpit.module.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) =>{
    let classes = [];

    let btnClass = cockpitStyles.Button;

    if(props.showPersons){
        btnClass = [cockpitStyles.red, cockpitStyles.Button].join(" ");
    }

    if(props.persons.length <=2){
        classes.push(cockpitStyles.red);
    }
    if(props.persons.length <=1) {
        classes.push(cockpitStyles.bold);
    }
    classes = classes.join(" ");

    return (
        <Aux>
            <h1>{props.title}</h1>
            <p className={classes}>Following is a list of persons.</p>
            <button 
                className={btnClass}
                onClick={props.clicked}
                >Toggle Persons</button>
        </Aux>
    );
}

export default cockpit;