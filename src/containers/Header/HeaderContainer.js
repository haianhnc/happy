import {connect} from 'react-redux';
import {Header} from '../../components/Header/Header';
// import {setActiveTab} from '../../actions/header';
import * as actions from '../../actions/';

function mapStateToProps(state){
  const header = state.header_state;
  return {header}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (key) => {
    dispatch(actions.setActiveTab(key))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Header);