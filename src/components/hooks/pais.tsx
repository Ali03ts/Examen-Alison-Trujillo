import React from 'react'
import { Country } from './Paises';
import Tabla from './tabla';
const paises = () => {
    const {countrys} = Country();
    return (
        <>
            <div className=''>
            {
                countrys.map(country => <div className='' key={country.id}>
                    <Tabla key={country.id} {...country} /> </div>
                    )
            }
            </div>
        </>
    )
}
export default paises