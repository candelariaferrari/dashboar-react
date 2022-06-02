import PropTypes from 'prop-types'

function Ranking(props) {
  return (
    <div className='contentRanking'>
      <p className='numberR'>{props.ranking}</p>
      <p className='languageR'>{props.language}</p>
    </div>
  );
}
Ranking.defaultProps = {
  language: '-',
  ranking: '-',
}

Ranking.propTypes = {
  atritutes: PropTypes.shape({
    language: PropTypes.string.isRequired,
    ranking: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,

  })
}
export default Ranking;