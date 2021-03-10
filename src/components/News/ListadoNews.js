import React from 'react';
import New from './New';

export default function ListadoNews({news}) {

    if(!news) {return null}

    return (
        <div>
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
