import React from 'react';

import './Breadcrumbs.css'

export default function Breadcrumbs({categoria, idioma, guardarClickBuscar}) {

    console.log(idioma);

    const onSubmit = () => {
        guardarClickBuscar(false)
    }

    return (

        <div className="breadcrumbs-container">

            <div className="crumbs">

                You are reading from {idioma} about {categoria}
            
            </div>

            <div className="new-search-button">

                <form
                    onSubmit={onSubmit}
                >

                    <input
                        className="search-button"
                        type='submit'
                        value='New Search'
                    />
                
                </form>

            </div>
        
        </div>

    )
}
