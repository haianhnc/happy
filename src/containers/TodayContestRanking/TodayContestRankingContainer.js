import {connect} from 'react-redux';
import {TodayContestRanking} from '../../components/TodayContestRanking/TodayContestRanking';

function mapStateToProps(state){
  const contest = JSON.parse(JSON.stringify(state.today_contest_ranking_state));;
  return {contest}
}
export default connect(mapStateToProps)(TodayContestRanking);