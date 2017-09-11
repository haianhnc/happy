import {connect} from 'react-redux';
import {TodayBestFriend} from '../../components/TodayBestFriend/TodayBestFriend';

function mapStateToProps(state){
  const todaybestfriend = JSON.parse(JSON.stringify(state.today_best_friend_state));;
  return {todaybestfriend}
}
export default connect(mapStateToProps)(TodayBestFriend);