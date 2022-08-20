import {GET_LISTA_RESPONSE, GET_LISTA_REQUEST} from '../actions/index';

const initialState = {
  listaDeTurnos: false,
  btnAddPending: false,
};

const queueReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTA_RESPONSE:
      return {
        ...state,
        listaDeTurnos: action.res,btnAddPending:false
      };
    case GET_LISTA_REQUEST:
      return {
        ...state,
        btnAddPending: true,
      };
    default:
      return state;
  }
};

export default queueReducer;
