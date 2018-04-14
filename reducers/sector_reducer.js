import { merge } from 'lodash';
import NA_SECTORS from '../sectors/na_sectors';

const defaultState = {
  landSectors: NA_SECTORS,
  seaSectors: [],
};

const SectorReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    default:
      return state;
  }
};

export default SectorReducer;