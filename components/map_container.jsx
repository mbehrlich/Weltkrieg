import { connect } from 'react-redux';
import {selectSector, moveSector} from '../actions/map_actions';
import Map from './map';

const mapStateToProps = state => ({
  player: state.game.player,
  selectedSector: state.game.selected,
});

const mapDispatchToProps = dispatch => ({
  selectSector: (sector) => dispatch(selectSector(sector)),
  moveSector: (sector) => dispatch(moveSector(sector)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);