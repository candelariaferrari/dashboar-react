import profe from '../../../assets/images/persona.png';
function UltimoCurso() {
  return (
    <div className="col-md-4">
      <div className="contentUltimoCurso">
        <h2 className="tituloUltimo">Ultimo curso</h2>
        <div className="flexProfes">
          <div className="contentProfe">
            <img className="img-profe" src={profe} alt="logo" />
            <p className="nombreProfe">Juan Perez</p>
          </div>
          <div>
            <ul className="caract">
              <li>Idioma: <strong>Ingles</strong></li>
              <li>Días: <strong>Martes y Jueves</strong></li>
              <li>Hora: <strong>18:00hs</strong></li>
              <li>Tipo: <strong>Exámes</strong></li>
              <li>Precio: <strong>$1000</strong></li>
              <li>Nivel: <strong>Inicial</strong></li>
              <li>Temas de interes: <strong>Viajes</strong></li>
              <li>Cap max: <strong>5</strong></li>
              <li>Link: <strong>zoom</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UltimoCurso;