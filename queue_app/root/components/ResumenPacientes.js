import {Box, Center, HStack, Text} from 'native-base';
import React from 'react';

function ResumenPacientes({lista}) {
  return (
    <Center>
      <Box
        width={'32'}
        height={'20'}
        rounded={'lg'}
        _text={{textAlign: 'center'}}
        p={2}
        bg={'#1c2c2c'}
        alignItems={'center'}
        justifyContent={'center'}>
        <Text fontWeight={'bold'} textAlign={'center'} color={'white'}>
          {lista.filaUno?.length + lista.filaDos?.length}
        </Text>
        <Text color={'white'}fontSize={'12'} textAlign={'center'}>Pacientes en espera</Text>
      </Box>
    </Center>
  );
}

export default ResumenPacientes;
