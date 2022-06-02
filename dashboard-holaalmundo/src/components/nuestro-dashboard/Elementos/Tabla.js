import React from 'react';
import '../../../assets/css/myStyle.css';
import Fila from './Fila';


let ingles = {
  language: 'Ingles',
  amountTeachers: '20',
  totalCourse: '35',
}
let espanol = {
  language: 'Español',
  amountTeachers: '10',
  totalCourse: '20',
}
let frances = {
  language: 'Frances',
  amountTeachers: '5',
  totalCourse: '5',
}
let italiano = {
  language: 'Italiano',
  amountTeachers: '8',
  totalCourse: '16',
}
let portugues = {
  language: 'Portugues',
  amountTeachers: '5',
  totalCourse: '5',
}
let danes = {
  language: 'Danes',
  amountTeachers: '1',
  totalCourse: '1',
}
let arabe = {
  language: 'Arabe',
  amountTeachers: '1',
  totalCourse: '2',
}
let chino = {
  language: 'Chino',
  amountTeachers: '2',
  totalCourse: '6',
}

let languages = [ingles, espanol, frances, italiano, portugues, danes, arabe, chino];

function Tabla() {

  return (
    <div className="col-md-8">
      <div className="contentTabla">
        <div className='row tituloTabla'>
          <div className='col-md-4 textoTitulo'>
            Idioma
          </div>
          <div className='col-md-4 textoTitulo'>
            Profesores
          </div>
          <div className='col-md-4 textoTitulo'>
            TOTAL
          </div>
        </div>
        <div className='contentScroll'>
          {languages.map((language, i) => {
            return <Fila {...language} key={i} />
          })}
        </div>
      </div>
      
    </div>
  );
}

export default Tabla;

