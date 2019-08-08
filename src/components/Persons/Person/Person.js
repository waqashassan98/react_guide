import React, {Component} from 'react';
import styles from './Person.module.css';
/**
 * Component is a function that returns jsx
 */
class Person extends Component{
    constructor(props){
        super(props);
        console.log("[Person.js] Inside Constructor ", props);
    }

    componentWillMount() {
        console.log("[Person.js] Component will mount");
    }

    componentDidMount(){
        console.log("[Person.js] Component did mount");
        //Mostly for adjusting focus and media playback.
        if(this.props.position===0){
            this.inputElement.focus();    
        }
        
    }

    /**
     * Refs cam only be used in stateful components
     */
    render(){
        console.log("[Person.js] Inside Rendering");
        return ( 
            <div className={styles.Person} >
                <p onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    ref={ (inp) => {this.inputElement = inp} }
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </div>    
        );
    }
}

export default Person;
