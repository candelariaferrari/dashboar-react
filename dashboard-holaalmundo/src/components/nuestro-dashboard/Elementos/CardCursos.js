import React from 'react';
import '../../../assets/css/myStyle.css';
import PropTypes from 'prop-types';

function CardCursos(props) {
  return (
    <div className='col-md-4'>
      <div className={`cardCurso bkg-violeta`}>
        <div className='row inCard'>
          <div className='flexTitulo'>
            <h2>{props.language}</h2>
            <p>{props.types}</p>
          </div>

          <div className='flexDescription'>
            <div>
              <p>{props.week_days}</p>
              <p>{props.week_times}</p>
            </div>
            <div>
              <p>${props.price}</p>
            </div>
          </div>
          <button className='ver'>Ver Curso</button>
        </div>
      </div>
    </div>
  );

}

CardCursos.defaultProps = {
  language: '-',
  types: '-',
  week_days:'-',
  week_times:'-',
  price:'-'
  /* img: '-' */
}

CardCursos.propTypes = {
  atritutes: PropTypes.shape({
    language: PropTypes.string.isRequired,
    types: PropTypes.string.isRequired,
    week_days: PropTypes.string.isRequired,
    week_times:  PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]).isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
]).isRequired,
  })
}
export default CardCursos;