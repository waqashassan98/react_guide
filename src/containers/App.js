/**
 * Last Lecture:
 * http://talentforge.vteamslabs.com/knowledge-base/react-the-complete-guide
 * Section 05. Part 04
 * To add pseudo css selectors in jsx, we need a package, radium
 * With Radium, you can also add media queries
 * npm install --save radium
 */

import React, {Component} from 'react';
import appClasses from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from '../ErrorBoundary/ErrorBounday';

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
      

        /**
         * Conditional Output in JS
         */
        let persons = null;

        if(this.state.showPersons){
            persons = (
                    <Persons 
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
            );
        }
       

        return (
            
            <div className={appClasses.App}>
                <Cockpit 
                    showPersons={this.state.showPersons} 
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons} 
             </div>
        );
    };
   
}


export default App;
