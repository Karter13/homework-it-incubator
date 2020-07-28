import {NavLink} from 'react-router-dom';
import React from 'react';
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.menu} >
                <div className={styles.item}>
                    <NavLink to={'/preJunior'} activeClassName={styles.activeLick}>PreJunior</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={'/junior'} activeClassName={styles.activeLick}>Junior</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={'/juniorPlus'} activeClassName={styles.activeLick}>JuniorPlus</NavLink>
                </div>
            </div>
        </div>
    )
};
