import React from 'react';

export default function New({noticia}) {

    const { author, title, description, published, url, urlToImage } = noticia;

    function excerpt() {
        var str = {description};
        if(str.length > 10) {
            str = str.substring(0, 10) + '...';
        }
        excerpt()
    }

    return (
        <div>
            {author}
            <img src={urlToImage} />
            {description}
        </div>
    )
}
