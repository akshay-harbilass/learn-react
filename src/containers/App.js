import React, {Component} from 'react'; //import component module

import logo from './logo.svg';
import styles from './App.module.css';

import Persons from '../components/Persons/Persons'; //two dots .. means going up one level
//else will continue from the current folder App.js is inside in

import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
  state= {
    persons: [
    {id: 'a1', name: 'Akshay', age:26},
    {id: 'a2', name: 'Katie', age:7},
    {id: 'a3', name: 'Holmes', age:20}
    ],
    otherState: 'some other value',
    showPersons: false
  }

switchNameHandler = (newName) =>  //newName is input parameter
{;
  console.log('Was clicked');
  this.setState({
    persons: [
      {name: 'Aksh', age:26},
      {name: 'Kate', age:7},
      {name: newName, age:20}
      ]
  });
}



nameChangedHandler = (event,id) =>  //event is passed automatically by react
{

  const personIndex = this.state.persons.findIndex(p => {
    return p.id ===id; //is good code has been commented temporarily

   // return p.userId === id; //this is faulty code is wrong

  })

  const person =
  { ...this.state.persons[personIndex] //if we do not do ... (3 dots) then we get pointer
    //using only this.state.persons[personIndex] we get pointer to original object 
    //and if we modify, we will also modify original object
  };
  //below was correct code
  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  //console.log('Was clicked');
  this.setState({
    persons: persons
  });
}


deletePersonHandler = (personIndex) =>
{
  //good practive is to create a copy of array before manipulating it

  //should alway modify state in immutable way
  //i.e. create a copy of state and then modify it
    const persons = [...this.state.persons];
    persons.splice(personIndex,1); //splice method removes from array
    this.setState({persons: persons})

}


togglePersonsHandler = () =>   //use this syntaxt i.e. arrow syntax ensures this property always return to class
{
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});


}



  render (){

    let persons = null;
    //let btnClass= [styles.Button];

    if (this.state.showPersons)  //if state of persons is true
    {
        persons = (

          <div>

{
                <Persons persons={this.state.persons}
                 clicked={this.deletePersonHandler}
                 changed={this.nameChangedHandler} />
}

           
          </div>
        ); //persons array assignment

    
//          btnClass.push(styles.Red); //pushes the background red attribute into that class
    
      }








  
    //everything in javascript must be put inside braces
    return (

      <div className={styles.App}>

<Cockpit
title={this.props.appTitle}
showPersons = {this.state.showPersons}
persons = {this.state.persons} 
clicked = {this.togglePersonsHandler}
/>



{persons}



      </div>
     
    );
  }
}

export default App; //Radium is high order component allows to put in format of that