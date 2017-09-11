import {connect} from 'react-redux';
import {CommonUnit} from '../../components/CommonUnit/CommonUnit';


function mapStateToProps(state){
  const common = JSON.parse(JSON.stringify(state.common_unit_state));;
  return {common}
}
export default connect(mapStateToProps)(CommonUnit);