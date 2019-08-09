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

/**
 * It works with providers and conusmers.
 */
export const AuthContext = React.createContext(false);// default value for authentication

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
            toggleClicked: 0,
            authenticated: false
    
        };
    }

    // componentWillMount() {
    //     console.log("[app.js] Component will mount");
    // }

    componentDidMount(){
        console.log("[app.js] Component did mount");
    }

    /**
     * React 16.3's preferred lifecycle hook
     * Run whenever the props are updated
     * @param {object} nextProps 
     * @param {object} prevState 
     * 
     * Returns a new state object
     */
    static getDerivedStateFromProps(nextProps, prevState){
        console.log(
            "[app.js] Inside: getDerivedStateFromProps",
            nextProps,
            prevState
        );

        return prevState;
    }

    /**
     * Might be helpful in getting current scrolling position of the user
     * and scroll the user back in component did update
     * React 16.3 Lifecycle hook
     */
    getSnapshotBeforeUpdate(){
        console.log(
            "[app.js] Inside: getSnapshotBeforeUpdate"
        );
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

    loginHandler = () => {
        this.setState({authenticated: true});
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
                    login={this.loginHandler}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                    
                />
                {/* Providing the context to all child components, no matter on which level they are */}
                <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
             </div>
        );
    };
   
}


export default withClass(App, appClasses.App);
