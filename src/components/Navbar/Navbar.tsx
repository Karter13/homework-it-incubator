import {NavLink} from 'react-router-dom';
import React from 'react';

export const Navbar = () => {
    return (
        <div>
            <div>
                <NavLink to={'/preJunior'}>PreJunior</NavLink>
            </div>
            <div>
                <NavLink to={'/junior'}>Junior</NavLink>
            </div>
            <div>
                <NavLink to={'/juniorPlus'}>JuniorPlus</NavLink>
            </div>
        </div>
    )
};
