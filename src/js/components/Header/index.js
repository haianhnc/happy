import {connect} from 'react-redux';
import Header from './Header';

export default connect(({header}) => ({header}))(Header);