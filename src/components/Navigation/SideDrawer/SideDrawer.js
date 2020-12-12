import React from 'react'
import classes from './SideDrawer.module.scss'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {

    const attachedClasses = props.open ? 
        [classes.SideDrawer, classes.Open] : 
        [classes.SideDrawer, classes.Close]

    return(
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>

    )
}

export default sideDrawer