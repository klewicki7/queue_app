import {Button, Input, VStack} from 'native-base';
import React from 'react';

function AñadirPaciente({setNombre, setId, onPress, isPending,isDisabled}) {
  return (
    <VStack width={'70%'} space={2} alignItems={'center'} >
      <Input
        onChangeText={text => setId(text)}
        width={'100%'}
        placeholder="ID"
        keyboardType='numeric'
        bg={'gray.100'}
      />
      <Input
        onChangeText={id => setNombre(id)}
        width={'100%'}
        placeholder="Nombre"
        bg={'gray.100'}
      />
      <Button disabled={isDisabled} isLoading={isPending} bg={'green.600'} maxWidth={'32'} onPress={onPress} size={'xs'}>
        Añadir a la cola
      </Button>
    </VStack>
  );
}

export default AñadirPaciente;
