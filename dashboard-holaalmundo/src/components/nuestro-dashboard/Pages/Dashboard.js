import React, { useState, useEffect } from 'react';
import '../../../assets/css/myStyle.css';
import Card from '../Elementos/Card';
import Tabla from '../Elementos/Tabla';
import UltimoCurso from '../Elementos/UltimoCurso';
import person from '../../../assets/images/circle-user-solid.svg';
function Dashboard() {
  const [teachers, setTeachers] = useState(""); //estado
  const [students, setStudents] = useState(""); //estado
  const [classes, setClasses] = useState(""); //estado

  let totales = [
    {
      color: 'violeta',
      cuantity: teachers,
      nombre: 'profesores',
      img: person
    },
     {
      color: 'azul',
      cuantity: students,
      nombre: 'alumnos',
      img: person
    },
     {
      color: 'verde',
      cuantity: classes,
      nombre: 'cursos',
      img: person
    }
  ]


  const urlTeachers = 'http://localhost:3000/api/teachers'; //definimos url
  const urlStudents = 'http://localhost:3000/api/students'; //definimos url
  const urlClasses = 'http://localhost:3000/api/clases'; //definimos url
  useEffect(() => {
    fetch(urlTeachers)
      .then(resultado => resultado.json())
      .then(data => {
        setTeachers(data.meta.total_teachers)
      })
  
    fetch(urlStudents)
      .then(resultado => resultado.json())
      .then(data => {
        setStudents(data.meta.total_students)

      })

    fetch(urlClasses)
      .then(resultado => resultado.json())
      .then(data => {
        setClasses(data.meta.total_classes)
        
      })
  }, [])
  
  return (
   
      <div className='widthBody'>

        <div className='row'>
          {totales.map((card, i) => {
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