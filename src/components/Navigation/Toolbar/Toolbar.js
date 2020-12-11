import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Toolbar.module.scss'


const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <NavigationItems />
    </header>
)

export default toolbar