import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    getStyle() {        
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',            
        }
    }

    getTitleStyle() {
        /*
        if (this.props.todoitem.completed) {
            return {
                textDecoration: 'line-through'
            }
        }
        else {
            return {
                textDecoration: 'none'
            }
        }*/
        //using ternary operator:
        return {
            textDecoration: this.props.todoitem.completed ? 'line-through' 
                : 'none'
        }
    }    
    

    render() {
        //destructuring
        const {id, title, completed} = this.props.todoitem;
        return (
            <div style={this.getStyle()}>
                <p> <input checked={completed} type="checkbox" onChange={this.props.toggle.bind(this,id)}/> {' '}
                    <span style={this.getTitleStyle()}> {title} </span>
                    <button style={btnStyle} onClick={this.props.deleteTodo.bind(this,id)}>X</button>
                </p>
                    
            </div>
        )
    }
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}

//PropTypes
TodoItem.propTypes = {
    todoitem: PropTypes.object.isRequired,
    toggle: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired

}
