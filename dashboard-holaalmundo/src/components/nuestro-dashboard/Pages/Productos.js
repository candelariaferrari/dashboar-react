import React from "react";
import CardCursos from "../Elementos/CardCursos";
import MasVendido from "../Elementos/MasVendido";
let cIngles = {
  language: 'ingles',
  nombre: 'juan perez',
}
let cEspañol = {
  language: 'español',
  nombre: 'juan perez',
}
let cItaliano = {
  language: 'italiano',
  nombre: 'juan perez',
}
let cPortugues = {
  language: 'portugues',
  nombre: 'juan perez',
}
let cChino = {
  language: 'chino',
  nombre: 'juan perez',
}
let cFrances = {
  language: 'frances',
  nombre: 'juan perez',
}
let cardCursosProps = [cChino, cEspañol, cFrances, cIngles, cItaliano, cPortugues];
function Productos() {
  return (
    <div className="bkgBody">
      <div className='widthBody'>
        <div className="row">
          <div className="col-md-8">
            <div className="flexCursos">
              {cardCursosProps.map((cardC, i) => {
                return <CardCursos {...cardC} key={i} />
              })}
            </div>
          </div>
          <MasVendido />
        </div>
      </div>
    </div>
  )
}
export default Productos;