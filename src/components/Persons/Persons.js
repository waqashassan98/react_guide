import React, {Component} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../../ErrorBoundary/ErrorBounday';
import PropTypes from 'prop-types';

class Persons extends Component{
    constructor(props){
        super(props);
        console.log("[Persons.js] Inside Constructor ", props);
        //Get a reference of last person we are creating
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log("[Persons.js] Component will mount");
    }

    componentDidMount(){
        console.log("[Persons.js] Component did mount");
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps){
        console.log("[Update Persons.js] Component will receive these props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("[Update Persons.js] should component update? ", nextProps, nextState);
        // return true;

        //This doesn't deeply compare the object. Just the root object
        return true;//nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("[Update Persons.js] will component update? ", nextProps, nextState);
    }

    componentDidUpdate(){
        //Use for side effects
        console.log("[Update Persons.js] component did update");
    }

    render(){
        console.log("[Persons.js] Inside Rendering");
        return  this.props.persons.map( (person,index) =>{
            return (
                <ErrorBoundary key = {person.id}> 
                    <Person 
                        name={person.name} 
                        position={index}
                        ref={this.lastPersonRef}
                        age={person.age} 
                        authenticated={this.props.isAuthenticated}
                        click={()=> this.props.clicked(index)}
                        changed={(event) => this.props.changed(event, person.id)}
                    />
                </ErrorBoundary>
            );
        });
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Persons;