import React, { useState, useEffect } from 'react';
import profe from '../../../assets/images/persona.png';

function UltimoCurso() {
  const [last_class, setLastClass] = useState(""); //estado

  const urlLastClass = 'http://localhost:3000/api/clases';

  useEffect(() => {
    fetch(urlLastClass)
      .then(resultado => resultado.json())
      .then(data => {
        setLastClass(data.data[34])
      })
    
  }, [])
  return (
    <div className="col-md-4">
      <div className="contentUltimoCurso">
        <h2 className="tituloUltimo">Ultimo curso</h2>
        <div className="flexProfes">
          <div className="contentProfe">
            <img className="img-profe" src={profe} alt="logo" />
            <p className="nombreProfe">{last_class.description}</p>
          </div>
          <div>
            <ul className="caract">
              <li>Idioma: <strong>{last_class.language}</strong></li>
              <li>Días: <strong>{last_class.week_days}</strong></li>
              <li>Hora: <strong>{last_class.week_times}</strong></li>
              <li>Tipo: <strong>{last_class.types}</strong></li>
              <li>Precio: <strong>{last_class.price}</strong></li>
              <li>Nivel: <strong>{last_class.level}</strong></li>
              <li>Temas de interes: <strong>{last_class.topics}</strong></li>
              <li>Cap max: <strong>{last_class.cap_max}</strong></li>
              <li>Link: <strong>{last_class.link_class}</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UltimoCurso;