/**
 * Last Lecture:
 * http://talentforge.vteamslabs.com/knowledge-base/react-the-complete-guide
 * Section 04. Part 04
 */

import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

//To add state we needed create a class which extends from component. Otherwise see the commented code
// below this class
class App extends Component {
    /**
     * JSX Restrictions:
     * class => className
     * onclick => onClick
     * No Adjacent Elements. Only 1 root element.
     */

    /**
     * Reserved Words
     * State
     * class 
     */
    state = {
        persons : [
            {id: '1', name: 'Max',  age: 28 },
            {id: '2', name: 'Manu',  age: 27 },
            {id: '3', name: 'Waqas',  age: 26 }
        ],
        showPersons: false

    };

    deletePersonHandler = (personIndex) => {
        /**
         * This Approach has a flaw, it is only giving reference, not copying the array
         * The state should be immutable
         */
        // const persons = this.state.persons;
        // persons.splice(personIndex, 1);
        // this.setState({persons: persons});

        const persons = [...this.state.persons]; // or   = this.state.persons.spllice(); to copy the array
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    nameChangedHandler = (event, personID) => {
        // const persons = [...this.state.persons];
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === personID;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    }
    togglePersonsHandler = () => {
        this.setState({showPersons: !this.state.showPersons});
    }
    render(){
        const style = {
            /**
             * Restrictions: No hover possible yet in inline style in jsx
             */
            color: white,
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        /**
         * Conditional Output in JS
         */
        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map( (person,index) =>{
                        return (
                         <Person 
                            key = {person.id}
                            name={person.name} 
                            age={person.age} 
                            click={()=> this.deletePersonHandler(index)}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                         />
                        );
                    })}
                </div>
            );
        }
        return (
            <div className="App">
                <h1>Hello. This is Waqas</h1>

                <button 
                    style={style}
                    onClick={this.togglePersonsHandler}
                    >Toggle Persons</button>
                {persons}
                
                
            </div>
        );
    };
   


}


export default App;
