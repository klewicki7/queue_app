import {Alert, Center, Slide, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import AñadirPaciente from '../components/AñadirPaciente';
import ListaDeEspera from '../components/ListaDeEspera';
import ResumenPacientes from '../components/ResumenPacientes';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../redux/actions';
import BackgroundTimer from 'react-native-background-timer';

function HomeScreen(props) {
  const dispatch = useDispatch();
  const state = useSelector(state => state.queueReducer);
  const [nombre, setNombre] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    dispatch(actions.getListaRequest());
    BackgroundTimer.runBackgroundTimer(() => {
      dispatch(actions.refresh());
    }, 60000);
  }, []);

  function agregarCliente() {
    dispatch(actions.añadirClienteRequest({id: id, nombre: nombre}));
  }

  return state.listaDeTurnos ? (
    <VStack width={'100%'} height={'100%'} bg={'#03312E'}>
      <Center height={'30%'}>
        <VStack space={1}>
          <ResumenPacientes lista={state.listaDeTurnos} />
          <AñadirPaciente
            setNombre={nombre => setNombre(nombre)}
            setId={id => setId(id)}
            onPress={() => agregarCliente()}
            isPending={state.btnAddPending}
            isDisabled={id == '' && nombre == ''}
          />
        </VStack>
      </Center>
      <ListaDeEspera lista={state.listaDeTurnos} />
    </VStack>
  ) : (
    <Text>Cargando...</Text>
  );
}

export default HomeScreen;
