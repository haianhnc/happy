import {connect} from 'react-redux';
import {PickUpUnit} from '../../components/PickUpUnit/PickUpUnit';

function mapStateToProps(state){
  const pickupunit = JSON.parse(JSON.stringify(state.pickup_unit_state));;
  return {pickupunit}
}
export default connect(mapStateToProps)(PickUpUnit);