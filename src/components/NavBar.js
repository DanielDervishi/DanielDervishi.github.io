import React from 'react'
import NavLink from './NavLink'

const NavBar = ({ navIcons, setURL, navigate }) => {
    return (
        <div className='navbar navbar-expand-lg sticky-top'>
            <span className="navbarHome navbar-brand">
                Daniel Dervishi
            </span>

            <nav className="navbarLinks">
                {navIcons.map(navIcon =>
                    <NavLink key={navIcon.text} URL={navIcon.URL}
                        text={navIcon.text} image={navIcon.image} setURL={setURL} navigate={navigate} />)}
            </nav>
            <span className='NavBarExternalLinks navbar-text'>
                <a href='https://github.com/DanielDervishi' target='_blank'><img src={process.env.PUBLIC_URL + "Images/" + 'Github-Logo.png'} className='NavBarExternalLink' /></a>
                <a href='https://www.linkedin.com/in/danieldervishi' target='_blank'><img src={process.env.PUBLIC_URL + "Images/" + 'Linkedin-Logo.png'} className='NavBarExternalLink' /></a>
            </span>
        </div>
    )
}

export default NavBar;