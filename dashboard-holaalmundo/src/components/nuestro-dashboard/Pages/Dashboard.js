import React from 'react';
import '../../../assets/css/myStyle.css';
import Card from '../Elementos/Card';
import Tabla from '../Elementos/Tabla';
import UltimoCurso from '../Elementos/UltimoCurso';

let cardProfes = {
  color: 'violeta',
  cuantity: '500',
  nombre: 'profesores',
  img: 'person'
}
let cardAlumnos = {
  color: 'azul',
  cuantity: '500',
  nombre: 'estudiantes',
  img: 'person'
}
let cardCursos = {
  color: 'verde',
  cuantity: '500',
  nombre: 'cursos',
  img: 'person'
}
let cartProps = [cardProfes, cardAlumnos, cardCursos];

function Dashboard() {
  
  return (
   
      <div className='widthBody'>

        <div className='row'>
          {cartProps.map((card, i) => {
            return <Card {...card} key={i} />
          })}
        </div>
        <div className='row'>
          <Tabla />
          <UltimoCurso />
        </div>
      </div>

  )
}
export default Dashboard;