import Ranking from "./Ranking";
let cIngles = {
  language: 'ingles',
  ranking: 1,
}
let cEspañol = {
  language: 'español',
  ranking: 2,
}
let cItaliano = {
  language: 'italiano',
  ranking: 3,
}
let cPortugues = {
  language: 'portugues',
  ranking: 4,
}
let cChino = {
  language: 'chino',
  ranking: 5,
}

let rankingProps = [cIngles,cEspañol, cItaliano,cPortugues, cChino];

function MasVendido() {
  return (
    <div className="col-md-4">
      <div className="contentUltimoCurso">
        <div className="tituloMasVendido">
          <h2 >Mas vendido </h2>
          <h4>en Junio </h4>
        </div>
        {rankingProps.map((ranking, i) => {
                return <Ranking {...ranking} key={i} />
              })}
      </div>
    </div>
  );
}

export default MasVendido;