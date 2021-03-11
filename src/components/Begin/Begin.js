import React from 'react';

import './Begin.css';

export default function Begin({showForm}) {



    return (
        <div className="begin-container">
        
            <div className="begin-content">
           
                <div className="instruction">

                    "Select the country and the topic you want to know about"
                    
                </div>

                <div className="sub-instruction">
                    You will find all the different kind of news from United States, Russia, Spain, and some many other countries around the world. Check it and have a global idea about what is happening along different countris
                    
                </div>
           
                <div className="button">

                    <input
                        className="begin-button"
                        type='submit'
                    />

                </div>
            
            </div>
        
        </div>
    )
}
