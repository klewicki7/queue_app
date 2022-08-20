import {Center, PresenceTransition, VStack} from 'native-base';
import React from 'react';
import moment from 'moment';
import Fila from './Fila';
moment.locale('es');

function ListaDeEspera({lista}) {
  const [turnos, setTurnos] = React.useState(lista);

  React.useEffect(() => {
    setTurnos(lista);
  }, [lista]);

  return (
    <Center width={'100%'} top={'20'}>
      <PresenceTransition
        bg={'red.500'}
        width={'100%'}
        height={'100%'}
        visible={turnos?.filaUno?.length > 0 || turnos?.filaDos?.length > 0}
        initial={{
          opacity: 0,
          scaleY: 0,
        }}
        animate={{
          opacity: 1,
          scaleY: 1,
          transition: {
            duration: 250,
          },
        }}>
        <VStack
          height={'50%'}
          width={'100%'}
          bg={'#1c2c2c'}
          borderTopRadius={'3xl'}
          opacity={0.96}
          shadow={'9'}>
          {Object.keys(turnos).map(e => (
            <Fila data={turnos[e]} lista={e} />
          ))}
        </VStack>
      </PresenceTransition>
    </Center>
  );
}

export default ListaDeEspera;
