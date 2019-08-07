import React, {Component} from 'react';
import styles from './Person.module.css';
/**
 * Component is a function that returns jsx
 */
class Person extends Component{
    render(){
        return ( 
            <div className={styles.Person} >
                <p onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>    
        );
    }
}

export default Person;
