import {connect} from 'react-redux';
import {Header} from '../../components/Header/Header';

function mapStateToProps(state){
  const header = state.header_state;
  return {header}
}
export default connect(mapStateToProps)(Header);