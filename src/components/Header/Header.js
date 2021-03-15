import React from 'react';
import Logo from '../../assets/images/logo.png';

import './Header.css';

export default function Header() {
    return (
        <div className='header-container'>
            <nav>
                <a href="/" >
                    <img src={Logo} />
                </a>
            </nav>
        </div>
    )
}
