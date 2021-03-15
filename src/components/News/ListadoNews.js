import React from 'react';
import New from './New';

import './ListadoNews.css';

export default function ListadoNews({news}) {

    if(!news) {return null}

    return (
        <div className="newspaper-container">
            {news.map(noticia => (
                <New 
                    key={noticia.url}
                    noticia={noticia}
                />
            )

        )}
        </div>
    )
}
