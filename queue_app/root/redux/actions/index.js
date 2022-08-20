export const GET_LISTA_REQUEST = 'GET_LISTA_REQUEST';
export const GET_LISTA_RESPONSE = 'GET_LISTA_RESPONSE';
export const GET_LISTA_ERROR = 'GET_LISTA_ERROR';

export const AÑADIR_CLIENTE_REQUEST = 'AÑADIR_CLIENTE_REQUEST';
export const AÑADIR_CLIENTE_RESPONSE = 'AÑADIR_CLIENTE_RESPONSE';
export const AÑADIR_CLIENTE_ERROR = 'AÑADIR_CLIENTE_ERROR';

export const REFRESH = 'REFRESH';
export default {
  getListaRequest: () => ({type: GET_LISTA_REQUEST}),
  getListaResponse: res => ({type: GET_LISTA_RESPONSE, res}),
  getListaError: () => ({type: GET_LISTA_ERROR}),

  añadirClienteRequest: body => ({type: AÑADIR_CLIENTE_REQUEST, body}),
  añadirClienteResponse: res => ({type: AÑADIR_CLIENTE_RESPONSE, res}),
  añadirClienteError: () => ({type: AÑADIR_CLIENTE_ERROR}),

  refresh: () => ({type: REFRESH}),
};
