import React,{useEffect, useState} from "react";
import '../../../assets/css/myStyle.css';
import CardCursos from "../Elementos/CardCursos";
import MasVendido from "../Elementos/MasVendido";
import Pagination from '@material-ui/lab/Pagination';

function Productos() {
  /*  const [cursos, setCursos] = useState(""); //estado
 let todosCursos = [
   {
     language: cursos.language,
     types: cursos.types,
     week_days: cursos.week_days,
     week_times: cursos.week_times,
     price: cursos.price
   }
 ]
 const urlCursos = 'http://localhost:3000/api/clases'; //definimos url
 
 useEffect(() => {
   fetch(urlCursos)
     .then(resultado => resultado.json())
     .then(data => {
       setCursos(data.data)
       console.log(data[0].language + " cursos")
     })
 }, [])  */
 const [cursos, setCursos] = useState(""); //estado
 useEffect(() => {
   const url = 'http://localhost:3000/api/clases'; //definimos url
   const fetchDataCursos = async () => { //funcion asincrona
     try {
       const response = await fetch(url); //espere a hacer la busqueda
       const json = await response.json(); //lo transformamos en json
       console.log(json); //array completo

       setCursos(json.data);//lo guardamos en el estado
       console.log("cursos " + json.data[0].id);
     } catch (error) {
       console.log("error", error);
     }
   };

   fetchDataCursos();
 }, []);
  return (
    <div className="bkgBody">
      <div className='widthBody'>
        <div className="row">
          <div className="col-md-8">
            <div className="flexCursos">
            {
							cursos.length > 0 && cursos.map((curso, i) => {
								return (
									<CardCursos {...curso} key={i} />
								)
							})
						}
              {/* {cursos.map((cardC, i) => {
                return <CardCursos {...cardC} key={i} />
              })} */}
            </div>
          </div>
          <MasVendido />
        </div>
      </div>
    </div>
  )
}
export default Productos;