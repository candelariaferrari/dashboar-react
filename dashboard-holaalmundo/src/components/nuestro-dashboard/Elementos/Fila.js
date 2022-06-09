import React from 'react';
import '../../../assets/css/myStyle.css';
import PropTypes from 'prop-types';

function Fila(props) {
  return (
    <div className='row filaTabla'>
      <div className='col-md-6 textoFila'>{props.language}</div>
      <div className='col-md-6 textoFila'>{props.ClassxLanguage}</div>
      {/* <div className='col-md-4 textoFila'>{props.totalCourse}</div> */}
    </div>
  );
}

Fila.defaultProps = {
  language: 'No definido',
  ClassxLanguage: '0',
  
}

Fila.propTypes = {
  atritutes: PropTypes.shape({
    language: PropTypes.string.isRequired,
    ClassxLanguage:  PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
  })
}
export default Fila;