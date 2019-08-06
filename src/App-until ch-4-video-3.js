/**
 * Last Lecture:
 * http://talentforge.vteamslabs.com/knowledge-base/react-the-complete-guide
 * Section 04. Part 03
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
            { name: 'Max',  age: 28 },
            { name: 'Manu',  age: 27 },
            { name: 'Waqas',  age: 26 }
        ],
        showPersons: false

    };

    switchNameHandler = (newName="NA") => {
        //with arrow function, we can use this keyword reliably
        // console.log('Was Clicked');
        /**
         * Don't do this
         * this.state.persons[0].name = "Maximilian";
         * React states are not mutable
         */
        this.setState({
            persons: [
                {name: newName, age: 30},
                {name: "Hassan", age: 29},
                {name: "Akbar", age: 5}
            ]
        });
    }
    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Ali', age: 30},
                {name: event.target.value, age: 29},
                {name: "Akbar", age: 5}
            ]
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
            backgroundColor: 'white',
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
                    <Person 
                        name={this.state.persons[0].name} 
                        age={this.state.persons[0].age} 
                        click={this.switchNameHandler}
                        />
                    <Person 
                        name={this.state.persons[1].name} 
                        age={this.state.persons[1].age} 
                        click={this.switchNameHandler}
                        changed={this.nameChangedHandler}
                        >I also like to play games.</Person>
                    <Person 
                        name={this.state.persons[2].name} 
                        age={this.state.persons[2].age} 
                        click={this.switchNameHandler}
                        />
                </div>
            );
        }
        return (
            /**
             * You can pass methods as props to child components
             * 
             * For Conditional output, you cant use if, but can use ternary operator
             * And need to wrap the element in { } braces
             */
            <div className="App">
                <h1>Hello. This is Waqas</h1>
                {/* <button 
                    style={style}
                    onClick={this.switchNameHandler.bind(this, 'Zain')}
                    >Switch Name</button> */}
                {/* <button onClick={() => this.switchNameHandler("Zain!")}>Switch Name</button> */}

                <button 
                    style={style}
                    onClick={this.togglePersonsHandler}
                    >Toggle Persons</button>
                {persons}
                
                {
                    /**
                     * Ternary Example to show conditionally
                     */
                    /* {
                    this.state.showPersons === true ?
                    <div>
                        <Person 
                            name={this.state.persons[0].name} 
                            age={this.state.persons[0].age} 
                            click={this.switchNameHandler}
                            />
                        <Person 
                            name={this.state.persons[1].name} 
                            age={this.state.persons[1].age} 
                            click={this.switchNameHandler}
                            changed={this.nameChangedHandler}
                            >I also like to play games.</Person>
                        <Person 
                            name={this.state.persons[2].name} 
                            age={this.state.persons[2].age} 
                            click={this.switchNameHandler}
                            />
                    </div> : null
                } */}
                
                {/* <Person name="Manu" age="29" />
                <Person name="Waqas" age="27"><h3>I am also a programmer</h3></Person> */}
            </div>
        );
    };
   

    // return React.createElement('div', null, 'Hello. This is Waqas');
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello. This is Waqas"), React.createElement(Person) );
    
}


// function App() {
//     /**
//      * JSX Restrictions:
//      * class => className
//      * No Adjacent Elements. Only 1 root element.
//      */
//     return (
//         <div className="App">
//             <h1>Hello. This is Waqas</h1>
//             <Person name="Max" age="28" />
//             <Person name="Manu" age="29" />
//             <Person name="Waqas" age="27"><h3>I am also a programmer</h3></Person>
//         </div>
//     );

//     // return React.createElement('div', null, 'Hello. This is Waqas');
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello. This is Waqas"), React.createElement(Person) );
    
// }
export default App;
