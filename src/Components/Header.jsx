import React, { useState } from 'react'

export const Header = () => {
    const [toggle, setToggle] = useState(false)
    console.log(toggle)
    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div className='fade-up'>
                    <a href="#" className="nav__logo">Agile coffee</a>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={() => setToggle(!toggle)} >
                    <i className="bx bx-menu"></i>
                </div>

                <div className={`nav__menu ${toggle ? 'show' : ''}`} id="nav-menu">
                    <div className="nav__close" id="nav-close" onClick={() => setToggle(!toggle)} >
                        <i className="bx bx-x"></i>
                    </div>

                    <ul className="nav__list">
                        <li className="nav__item fade-up">
                            <a href="#home" className="nav__link active ">Home</a>
                        </li>
                        <li className="nav__item fade-up">
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav__item fade-up">
                            <a href="#skills" className="nav__link">Blog</a>
                        </li>
                        <li className="nav__item fade-up">
                            <a href="#contact" className="nav__link ">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
