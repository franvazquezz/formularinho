'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllForms = () => {
  const [formsData, setFormsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let fechas = []

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backendform-vthb.onrender.com/forms');
        setFormsData(response.data);
        convertDate()
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const convertDate = () => {
    
    for (let i = 0; i < formsData.length; i++) {
      let date = new Date(formsData.createdAt)
      fechas.push(date)
    }
  }
  return (
    <div className='p-8'>
      <h1 className='text-center p-4'>Respuestas</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      {formsData.length > 0 ? (
        <ul className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
          {formsData.map((form, index) => (
            <li key={index} className='color-change-5x grid grid-cols-2 gap-x-2 min-w-screen md:min-w-1/3 border rounded-md shadow-md bg-teal-300 bg-opacity-25 p-4 px-6 gap-2 hover:scale-105 hover:shadow-teal-500'>
              <p className='font-semibold text-sm'>Nombre</p>
              <p className='font-light text-sm'>{form.full_name}</p>
              <p className='font-semibold text-sm'>Teléfono</p>
              <p className='font-light text-sm'>{form.phone_number}</p>
              <p className='font-semibold text-sm'>Referencia</p>
              <p className='font-light text-sm'>{form.how_found}</p>
              <p className='font-semibold text-sm'>Idioma preferido</p>
              <p className='font-light text-sm'>{form.preferred_language}</p>
              <p className='font-semibold text-sm'>Fecha de inicio</p>
              <p className='font-light text-sm'>{`${form.start_date.slice(8, 10)}/${form.start_date.slice(5, 7)}/${form.start_date.slice(0, 4)}`}</p>
              <p className='font-semibold text-sm'>Suscrito</p>
              <p className='font-light text-sm'>{form.newsletter_subscription ? "Si" : "No" }</p>
              <p className='font-semibold text-sm'>Fecha </p>
              <p className='font-light text-sm'>{`${form.createdAt.slice(8, 10)}/${form.createdAt.slice(5, 7)}/${form.createdAt.slice(0, 4)}`}</p>
              <p className='font-semibold text-sm'>Hora</p>
              <p className='font-light text-sm'>{form.createdAt.slice(11, 16)}</p>
            </li>
          ))}
        </ul>
      ) : (
          <div>No hay repsuestas cargadas</div>
      )}
    </div>
  );
};

export default AllForms;