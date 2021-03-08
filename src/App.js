import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';


function App() {

  const [ categoria, guardarCategoria ] = useState('')

  useEffect(() => {
    const consultarApi = async() => {
        const url=`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=97a3c34979454084ba1c3b89bd8711ea`;

        const respuesta= await fetch(url);
        const noticias = await respuesta.json();

        console.log(noticias)
    }
    consultarApi()
  }, [categoria])

  return (
    <Fragment>

      <Header 
        titulo= 'A.A. News'
      />

      <Formulario
        guardarCategoria={guardarCategoria}
       />

    </Fragment>
  );
}

export default App;