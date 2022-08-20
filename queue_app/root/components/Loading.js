import LottieView from 'lottie-react-native';
import {Box, Center, Text} from 'native-base';
import React from 'react';

function Loading() {
  return (
    <Center height={'100%'} width={'100%'} alignItems={'center'} bg={'white'}>
      <LottieView
        style={{
          height: '70%',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: 'white',
        }}
        resizeMode={'contain'}
        source={require('../../lottie/loading.json')}
        autoPlay
      />
      <Box bg={'white'} width={'100%'} height={'20%'}>
        <Text textAlign={'center'}>Cargando...</Text>
      </Box>
    </Center>
  );
}

export default Loading;
