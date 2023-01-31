import React from 'react'
import { ID } from '../interfaces/IReqRestApiusers';
const Tabla = (country: ID) => {
    console.log(country);
    return (
      
      
      <table>
      <thead>    
        <tr>
          <th >Id</th>
          <th >Nombre</th>
          <th >Año</th>
          <th >Color</th>
          <th >Avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th >{country.id}</th>
          <td>{country.name}</td>
          <td>{country.year}</td>
          <td>{country.color}</td>
          <td>{country.Avatar}</td>
        </tr>
      </tbody>
    </table>
    );
    
}

export default Tabla