import {connect} from 'react-redux';
import {Tags} from '../../components/Tags/Tags';

function mapStateToProps(state){
  const tags = JSON.parse(JSON.stringify(state.tags_state));;
  return {tags}
}
export default connect(mapStateToProps)(Tags);