import React from 'react';
import useSelect from '../Hooks/useSelect';

export default function Formulario({guardarCategoria}) {
    
    const OPCIONES = [
        {value:'general', label:'General'},
        {value:'technology', label:'Tecnología'},
        {value:'entertainment', label:'Ocio'},
        {value:'health', label:'Salud'},
        {value:'business', label:'Business'},
        {value:'sports', label:'Deporte'}
    ]

    // Usamos Custom Hook
    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

    const onSubmit = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    
    return (
        <div>

            <SelectNoticias />

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
    )
}
