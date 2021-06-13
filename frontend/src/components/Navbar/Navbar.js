import React from 'react'
import {Nav, NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='row d-flex justify-content-center navbar' >
            <h4>
                <small>
                <NavLink to="/">{`{ Home, `}</NavLink>
                <NavLink to="/profile">{` Profile, `}</NavLink>
                <NavLink to="/logout">{` Logout }`}</NavLink>
                </small>
            </h4>
        </div>
    )
}
