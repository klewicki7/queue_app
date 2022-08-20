import axios from 'axios';

import actions, {
  AÑADIR_CLIENTE_REQUEST,
  GET_LISTA_REQUEST,
  REFRESH,
} from '../actions';

const queueMiddleware =
  ({dispatch, getState}) =>
  next =>
  action => {
    next(action);
    switch (action.type) {
      case GET_LISTA_REQUEST:
        axios.get('http://localhost:9000/api/turnos').then(response => {
          dispatch(actions.getListaResponse(response.data));
        });
        break;
      case AÑADIR_CLIENTE_REQUEST:
        axios
          .post('http://localhost:9000/api/turnos', {
            id: action.body.id,
            nombre: action.body.nombre,
          })
          .then(response => {
            dispatch(actions.getListaRequest());
          });
        break;
      case REFRESH:
        axios.get('http://localhost:9000/api/refresh').then(response => {
          dispatch(actions.getListaRequest());
        });
        break;
    }
  };

export default queueMiddleware;
