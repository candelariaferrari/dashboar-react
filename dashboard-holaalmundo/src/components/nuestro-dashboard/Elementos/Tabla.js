import React, { useEffect, useState } from 'react';
import '../../../assets/css/myStyle.css';
import Fila from './Fila';

function Tabla() {
  const [clasesIdiomas, setCursosIdiomas] = useState(""); //estado

  /*  let aleman = {
     language: language,
     amountTeachers: '1',
     totalCourse: '2',
   }
   let chino = {
     language: language,
     amountTeachers: '2',
     totalCourse: '6',
   }
   let danes = {
     language: language,
     amountTeachers: '1',
     totalCourse: '1',
   }
   let espanol = {
     language: language,
     amountTeachers: '10',
     totalCourse: '20',
   }
   let frances = {
     language: language,
     amountTeachers: '5',
     totalCourse: '5',
   }
   let holandes = {
     language: language,
     amountTeachers: '3',
     totalCourse: '10',
   }
   let ingles = {
     language: language,
     amountTeachers: '20',
     totalCourse: '35',
   }
   let italiano = {
     language: language,
     amountTeachers: '8',
     totalCourse: '16',
   }
   let portugues = {
     language: language,
     amountTeachers: '5',
     totalCourse: '5',
   }
   let turco = {
     language: language,
     amountTeachers: '2',
     totalCourse: '5',
   }
 let languages = [aleman, chino, danes, espanol, frances, holandes, ingles, italiano, portugues, turco];
  */
 useEffect(() => {
  const url = 'http://localhost:3000/api/clases/clasesLanguage'; //definimos url
  const fetchDataCursosIdiomas = async () => { //funcion asincrona
    try {
      const response = await fetch(url); //espere a hacer la busqueda
      const json = await response.json(); //lo transformamos en json
      console.log(json); //array completo

      setCursosIdiomas(json.data);//lo guardamos en el estado
      console.log("cursos por lenguajes " + json.data[0].id);
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchDataCursosIdiomas();
}, []);
  
  

  return (
    <div className="col-md-8">
      <div className="contentTabla">
        <div className='row tituloTabla'>
          <div className='col-md-6 textoTitulo'>
            Idioma
          </div>
          <div className='col-md-6 textoTitulo'>
            Clases Disponibles
          </div>
        </div>
        <div className='contentScroll'>
          {
            clasesIdiomas.length > 0 && clasesIdiomas.map((claseIdioma, i) => {
              return (
                <Fila {...claseIdioma} key={i} />
              )
            })
          }

         {/*  {languages.map((language, i) => {
            return <Fila {...language} key={i} />
          })} */}
        </div>
      </div>

    </div>
  );
}

export default Tabla;