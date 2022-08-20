import {Box, Center, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import AñadirPaciente from '../components/AñadirPaciente';
import ListaDeEspera from '../components/ListaDeEspera';
import ResumenPacientes from '../components/ResumenPacientes';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../redux/actions';
import BackgroundTimer from 'react-native-background-timer';
import {ImageBackground} from 'react-native';
import LottieView from 'lottie-react-native';
import Loading from '../components/Loading';
const image = {
  uri: 'https://images.pexels.com/photos/6659365/pexels-photo-6659365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

function HomeScreen() {
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

  return state.listaDeTurnos ? (
    <ImageBackground height={'100%'} source={image}>
      <VStack width={'100%'} height={'100%'} justifyContent={'space-between'}>
        <Center height={'40%'}>
          <VStack space={2}>
            <ResumenPacientes lista={state.listaDeTurnos} />
            <AñadirPaciente
              setNombre={nombre => setNombre(nombre)}
              setId={id => setId(id)}
              onPress={() =>
                dispatch(actions.añadirClienteRequest({id, nombre}))
              }
              isPending={state.btnAddPending}
              isDisabled={id == '' && nombre == ''}
            />
          </VStack>
        </Center>
        <ListaDeEspera lista={state.listaDeTurnos} />
      </VStack>
    </ImageBackground>
  ) : (
    <Loading />
  );
}

export default HomeScreen;
