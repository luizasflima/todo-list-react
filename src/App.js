import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Todos from "./components/Todos";
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {

  state = {
    todos: []
  }
  //make initial request
  //lifecycle method, right after the component mounts
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => this.setState({todos: res.data}));    
  };
  //arrow function:
  /*
  markComplete = (id) => {
    console.log(id);
  }

  */

  toggle = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;          
        }
        return todo;
      })
    });
  }

  deleteTodo = (id) => {
    //spread operator ... : By using the spread operator we made sure that the 
    //original array is not affected whenever we alter the new array
    //this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  addTodo = (title) => {
    /*let newId = 0;
    this.state.todos.forEach(todo => {
      if (todo.id > newId)
        newId = todo.id;
    });

    let newTodo = {
      id: newId + 1,
      //title: title, with es6 we can use the following command:
      title,
      completed: false
    }

    //use spread operator to make a copy
    this.setState({
      todos: [...this.state.todos, newTodo]
    }); */

    //using post
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos:
        [...this.state.todos, res.data]  
      }));
      //add a 

  }

  render() {

    return (
      //the code below is the JSX
      //include javascript code inside {}
      //use classname instead of class
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                {/*pass todos as a property to the Todos component*/}
                <Todos todos={this.state.todos} toggle={this.toggle} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />

            <Route path="/about" component={About}/>
          </div>  
        </div>          
      </BrowserRouter>
    );
  }
}

export default App;
