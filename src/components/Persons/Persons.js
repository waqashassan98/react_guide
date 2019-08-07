import React, {Component} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../../ErrorBoundary/ErrorBounday';

class Persons extends Component{
    constructor(props){
        super(props);
        console.log("[Persons.js] Inside Constructor ", props);
    }

    componentWillMount() {
        console.log("[Persons.js] Component will mount");
    }

    componentDidMount(){
        console.log("[Persons.js] Component did mount");
    }

    render(){
        console.log("[Persons.js] Inside Rendering");
        return  this.props.persons.map( (person,index) =>{
            return (
                <ErrorBoundary key = {person.id}> 
                    <Person 
                        name={person.name} 
                        age={person.age} 
                        click={()=> this.props.clicked(index)}
                        changed={(event) => this.props.changed(event, person.id)}
                    />
                </ErrorBoundary>
            );
        });
    }
}


export default Persons;