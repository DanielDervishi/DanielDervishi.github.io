import React from 'react'
import '../index.css'
import { withRouter } from 'react-router-dom'

const NavLink = ({ URL, text, image, setURL, navigate }) => {
    return (
        <li key={text} id={URL} className="navLink mx-2">

            <button className="navLinkButton btn .btn-outline-*" onClick={() => {
                navigate(URL)
            }} color="color">

                <span> {text}</span>

            </button>
        </li>
    )
}

export default NavLink;