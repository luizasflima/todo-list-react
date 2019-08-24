import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {  
    
    render() {        
        return this.props.todos.map( (todo) => (
            <TodoItem key={todo.id} todoitem={todo} toggle={this.props.toggle}
                deleteTodo={this.props.deleteTodo} />
         ));
    }
}

//PropTypes - good practice
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggle: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todos;