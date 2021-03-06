import React from 'react';
import useSelect from '../Hooks/useSelect';
import selectCountry from '../Hooks/selectCountry';

import './Formulario.css';

export default function Formulario({guardarCategoria, guardarIdioma, guardarClickBuscar, clickbuscar}) {
    
    const OPCIONES = [
        {value:'general', label:'General'},
        {value:'technology', label:'Tecnología'},
        {value:'entertainment', label:'Ocio'},
        {value:'health', label:'Salud'},
        {value:'business', label:'Business'},
        {value:'sports', label:'Deporte'}
    ]

    const OPTIONS = [
        {value:'ae', label:'Avestan'},
        {value:'ca', label:'Catalán'},
        {value:'ch', label:'Chamorro'},
        {value:'ru', label:'Russia'},
        {value:'pt', label:'Portuguese'},
        {value:'fr', label:'France'},
        {value:'tw', label:'Taiwan'},
        {value:'de', label:'German'},
        {value:'us', label:'United States'},
    ]

    // Usamos Custom Hook useSelect
    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);
    
    
    // Usamos Custom Hook selectCountry
    const [ lenguage, SelectCountry ] = selectCountry('us', OPTIONS);

    const breadTrue = () => {
        guardarClickBuscar(true)
    }

    const onSubmit = e => {
        e.preventDefault();

        guardarCategoria(categoria);
        guardarIdioma(lenguage);
        breadTrue();
    }


    
    return (

        <div className="form-container">

        {clickbuscar ?
        
        null
        :
        
        <div className="form-content">


            <div className="input-country">
                <SelectCountry />
            </div>

            <div className="input-topic">
                <SelectNoticias />
            </div>



                <div className="button-search">

                    <form
                        onSubmit={onSubmit}
                    >
                        <input 
                            type='submit'
                            className='form-button'
                            value='Buscar Noticia'
                        />

                    </form>

                </div>


            </div>

        }

    
            

        </div>
    )
}
