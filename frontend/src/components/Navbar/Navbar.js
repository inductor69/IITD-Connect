import React from 'react'
import {NavLink} from 'react-router-dom';
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className='row d-flex justify-content-center navbar' >
            <h3>
                <small>
                <NavLink to="/">{`{ Home, `}</NavLink>
                <NavLink to="/profile">{` Profile, `}</NavLink>
                <NavLink to="/logout">{` Logout }`}</NavLink>
                </small>
            </h3>
        </div>
    )
}
