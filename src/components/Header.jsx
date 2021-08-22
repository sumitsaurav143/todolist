import React from 'react'
import logo from './Images/logo.png'
const Header = () => {
    return (
        <div className="Header">
            <nav>
            <img src={logo} className="logo" alt="Todolist"></img>
            <h2>TodoList</h2>
            </nav>
        </div>
    )
}

export default Header
