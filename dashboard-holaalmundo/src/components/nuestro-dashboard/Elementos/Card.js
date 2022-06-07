import React from 'react';
import '../../../assets/css/myStyle.css';
import PropTypes from 'prop-types';
import person from '../../../assets/images/circle-user-solid.svg';
function Card(props) {


  return (
    <div className='col-md-4 contenedorCard'>
      <div className={`card bkg-${props.color}`}>
        <div className='row inCard'>
          <div className='col-md-6'>
            <h2>{props.cuantity}</h2>
            
            <p>{props.nombre}</p>
          </div>
          <div className='col-md-6'>
            <img className="img-card" src={props.img} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );

}

Card.defaultProps = {
  color: 'success',
  cuantity: '-',
  nombre: '-',
  img: '-'
}

Card.propTypes = {
  atritutes: PropTypes.shape({
    color: PropTypes.string.isRequired,
    cuantity:  PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]).isRequired,
    nombre: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })
}
export default Card;