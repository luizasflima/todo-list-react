import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos";
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Prepare dinner',
        completed: false
      },
      {
        id: 2,
        title: 'Buy groceries',
        completed: false
      },
      {
        id: 3,
        title: 'Wash the dishes',
        completed: false
      }

    ]
  }

  //arrow function:
  /*
  markComplete = (id) => {
    console.log(id);
  }

  */

  toggle = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed=!todo.completed;
      }
      return todo;
    }) });
  }

  deleteTodo = (id) => {
    //spread operator ... : By using the spread operator we made sure that the 
    //original array is not affected whenever we alter the new array
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id )] });
  }

  addTodo = (title) => {
    let newId = 0;
    this.state.todos.forEach( todo => {
      if (todo.id > newId)
        newId = todo.id;
    });
    
    let newTodo = {
      id : newId+1,
      //title: title, with es6 we can use the following command:
      title,
      completed: false
    }

    //use spread operator to make a copy
    this.setState({
      todos: [...this.state.todos,newTodo]
    });
  }

  render() {    

    return (
      //the code below is the JSX
      //include javascript code inside {}
      //use classname instead of class
      <div>
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        {/*pass todos as a property to the Todos component*/}
        <Todos todos={this.state.todos} toggle={this.toggle} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
