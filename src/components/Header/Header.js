import React from 'react';
import Logo from '../../assets/images/thenews-international.jpg'

export default function Header() {
    return (
        <div>
            <nav>
                <a href="/">
                    <img src={Logo} />
                </a>
            </nav>
        </div>
    )
}
