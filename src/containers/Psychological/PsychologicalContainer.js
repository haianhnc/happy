import {connect} from 'react-redux';
import {Psychological} from '../../components/Psychological/Psychological';

function mapStateToProps(state){
  const psychological = JSON.parse(JSON.stringify(state.psychological_state));;
  return {psychological}
}
export default connect(mapStateToProps)(Psychological);