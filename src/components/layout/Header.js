import React from 'react'
import {Link} from 'react-router-dom'

//functional component, the return works just like the render of a class
export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            {/* Use Link when using Route */}
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const linkStyle = {
    color: 'white'
}

const headerStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

