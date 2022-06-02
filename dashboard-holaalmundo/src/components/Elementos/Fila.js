import React from 'react';
import '../../assets/css/myStyle.css';
import PropTypes from 'prop-types';

function Fila(props) {
  return (
    <div className='row filaTabla'>
      <div className='col-md-4 textoFila'>{props.language}</div>
      <div className='col-md-4 textoFila'>{props.amountTeachers}</div>
      <div className='col-md-4 textoFila'>{props.totalCourse}</div>
    </div>
  );
}

Fila.defaultProps = {
  language: 'No definido',
  amountTeachers: '0',
  totalCourse: '0',
}

Fila.propTypes = {
  atritutes: PropTypes.shape({
    language: PropTypes.string.isRequired,
    amountTeachers:  PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    totalCourse:  PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
  })
}
export default Fila;