import {connect} from 'react-redux';
import {RankingUnit} from '../../components/RankingUnit/RankingUnit';

function mapStateToProps(state){
  const rankingunit = JSON.parse(JSON.stringify(state.today_ranking_unit_state));;
  return {rankingunit}
}
export default connect(mapStateToProps)(RankingUnit);