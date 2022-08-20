import {Box, Center, HStack, Text} from 'native-base';
import React from 'react';

function ResumenPacientes({lista}) {
  return (
    <Center>
      <Box
        width={'24'}
        height={'16'}
        rounded={'lg'}
        _text={{textAlign: 'center'}}
        p={2}
        bg={'red.400'}
        alignItems={'center'}
        justifyContent={'center'}>
        <Text fontWeight={'bold'} textAlign={'center'}>
          {lista.filaUno?.length + lista.filaDos?.length}
        </Text>
        <Text fontSize={'12'} textAlign={'center'}>Pacientes en espera</Text>
      </Box>
    </Center>
  );
}

export default ResumenPacientes;
