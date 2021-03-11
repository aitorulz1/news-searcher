import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import ListadoNews from './components/News/ListadoNews';
import Begin from './components/Begin/Begin';

import './App.css';


function App() {

  const [ categoria, guardarCategoria ] = useState('');

  const [ idioma, guardarIdioma ] = useState('');

  const [ news, guardarNews ] = useState([]);

  const [ form, showForm ] = useState(false);

  useEffect(() => {
    const consultarApi = async() => {

        const url=`https://newsapi.org/v2/top-headlines?country=${idioma}&category=${categoria}&apiKey=97a3c34979454084ba1c3b89bd8711ea`;

        const respuesta= await fetch(url);
        const noticias = await respuesta.json();

        console.log(noticias.articles)
        guardarNews(noticias.articles)
    }
    consultarApi()
  }, [idioma, categoria])

  return (
    <div className="paper">

      <Header 
        
      />

      {
        !form ?

        <Begin 
          showForm={showForm}
        />
        
        :

        <Formulario
          guardarCategoria={guardarCategoria}
          guardarIdioma={guardarIdioma}
          showForm={showForm}
        />

      }


       <ListadoNews
          news={news}
       />



    </div>
  );
}

export default App;
