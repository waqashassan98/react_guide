/**
 * Last Lecture:
 * http://talentforge.vteamslabs.com/knowledge-base/react-the-complete-guide
 * Section 07. Part 09
 * To add pseudo css selectors in jsx, we need a package, radium
 * With Radium, you can also add media queries
 * npm install --save radium
 */

 /**
  * Pure Component automatically detects if state has changed and therefore, should continue processing or not.
  */
import React, {PureComponent} from 'react';
import appClasses from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from  '../hoc/withClass';

// import ErrorBoundary from '../ErrorBoundary/ErrorBounday';

//To add state, use this or use lifecycle hooks we needed create a class which extends from component. Otherwise see the commented code
// below this class
class App extends PureComponent {
    constructor(props){
        super(props);
        console.log("[app.js] Inside Constructor ", props);
        this.state = {
            persons : [
                {id: '1', name: 'Max',  age: 28 },
                {id: '2', name: 'Manu',  age: 27 },
                {id: '3', name: 'Waqas',  age: 26 }
            ],
            showPersons: false,
            toggleClicked: 0
    
        };
    }

    componentWillMount() {
        console.log("[app.js] Component will mount");
    }

    componentDidMount(){
        console.log("[app.js] Component did mount");
    }
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
        const doesShow = this.state.showPersons;
        //set states run asynchronously
        this.setState( (prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        } );
        // this.setState({showPersons: !this.state.showPersons});
    }

    render(){
        console.log("[app.js] Inside render");
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
            
            <div >
                <Cockpit 
                    title={this.props.title}
                    showPersons={this.state.showPersons} 
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons} 
             </div>
        );
    };
   
}


export default withClass(App, appClasses.App);
