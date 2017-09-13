import {connect} from 'react-redux';
import {Header} from '../../components/Header/Header';
// import {setActiveTab} from '../../actions/header';
import * as actions from '../../actions/';

function mapStateToProps(state){
  const header = state.header_state;
  return {header};
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (key) => {
    // dispatch(actions.setActiveTab(key))
    // dispatch(actions.fetchTabList(key))
    dispatch(actions.fetchTabListBySaga(key))
  },
  onLoad: () => {
    var HEADER = {title: 'Happy', menu_list: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5'], left_menu_button: 'left_menu.png', close_button: 'close_button.png', active_tab: 0}
    dispatch(actions.setHeader(HEADER));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Header);
