import {connect} from 'react-redux';
import actions from '../redux/actions';
import HomeScreen from '../screens/HomeScreen';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  getLista: () => dispatch(actions.getListaRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
