import { createAction, handleActions } from 'redux-actions'
import data from './data.js'

export const setSpells = createAction('SET_SPELLS');
export const setSpellsFilter = createAction('SET_SPELLS_FILTER');

const dataMap = data.reduce((map, spell) => {
    map[spell.id] = spell;
    return map;
  }, {});
  
  const initialState = {
    map: dataMap,
  };


// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_FILTER': return { ...state, filter: action.payload };

//     default: state;
//   }
// }

export default handleActions({
  [setSpells]: (state, { payload }) => ({ ...state, filter: payload }),
}, initialState);