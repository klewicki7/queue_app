import {Button, Input, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

function AñadirPaciente({setNombre, setId, onPress, isPending, isDisabled}) {
  return (
    <VStack space={2} style={styles.container}>
      <Input
        onChangeText={text => setId(text)}
        placeholder="ID"
        keyboardType="numeric"
        style={styles.inputs}
        bg={'gray.100'}
      />
      <Input
        onChangeText={id => setNombre(id)}
        style={styles.inputs}
       
         placeholder="Nombre"
        bg={'gray.100'}
      />
      <Button
        disabled={isDisabled}
        bg={'#1c2c2c'}
        maxWidth={'32'}
        onPress={onPress}>
        Añadir a la cola
      </Button>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    alignItems: 'center',
  },
  inputs: {
    width: '100%',
  },
});

export default AñadirPaciente;
