import React from 'react'

export default function Header({titulo}) {
    return (
        <div>
            <nav>
                <a href="">
                    <h1>{titulo}</h1>
                </a>
            </nav>
        </div>
    )
}
