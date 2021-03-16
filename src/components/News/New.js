import React, {useEffect, useState} from 'react';

import Logo from '../../assets/images/the-news.jpg'


import './New.css';

export default function New({noticia}) {

    const { author, title, description, publishedAt, url, urlToImage, content } = noticia;

    function excerpt() {
        var str = {description};
        if(str.length > 10) {
            str = str.substring(0, 10) + '...';
        }  
    };

    var publish = publishedAt.toString().slice(0, 10);

    // If no image...
    const [ noImage, setNoImage ] = useState(false);

    useEffect(() => {

        const noImage = () => {

            if(!urlToImage) {
                setNoImage(true)
            }
        
        }
        noImage();

    }, [noticia])
   

    return (
        <div className="new-card">




            <div className="image-container">
                <a href={url} target='_blank'>
                {noImage
                ?
                <img src={Logo} />
                :
                <img src={urlToImage} />
                }
                </a>
            </div>
           
            <div className="publishedAt">
                {publish}
            </div>
            
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="author">
                This article is been writened by <span className="autho-name">{author}</span>
            </div>

            <div className="description">
                {description}
            </div>

            <div className="content">
                {content} 
            </div>

            <div className="goto">
                <a href={url} target='_blank'>Go To New</a>
            </div>


        </div>
    )
}
