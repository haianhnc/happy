import {connect} from 'react-redux';
import {ExpertUnit} from '../../components/ExpertUnit/ExpertUnit';

function mapStateToProps(state){
  const experts = state.expert_unit_state;
  return {experts}
}
export default connect(mapStateToProps)(ExpertUnit);