import React from 'react';
import '../../../assets/css/myStyle.css';
import PropTypes from 'prop-types';

function CardCursos(props) {
  return (
    <div className='col-md-4'>
        <div className={`cardCurso bkg-violeta`}>
          <div className='row inCard'>
            
              <h2>{props.language}</h2>
              <p>{props.nombre}</p>
            
            <button className='ver'>Ver Curso</button>
          </div>
        </div>
    </div>
  );
  
}

CardCursos.defaultProps = {
  language: '-',
  nombre:'-',
  /* img: '-' */
}

CardCursos.propTypes = {
  atritutes: PropTypes.shape({
    language: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,

  })
}
export default CardCursos;