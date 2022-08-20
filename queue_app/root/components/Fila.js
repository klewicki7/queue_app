import {
  Badge,
  Box,
  Heading,
  HStack,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import moment from 'moment';

const TITLE = {
    'filaUno' : '#1 - Lista de espera ',
    'filaDos' : '#2 - Lista de espera ',
}


function Fila({data, lista}) {
  return (
    <VStack height={'50%'}>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Heading
          color={'white'}
          fontWeight={'light'}
          fontSize="xl"
          p="4"
          pb="3">
         {TITLE[lista]}
        </Heading>
        <Badge // bg="red.400"
          colorScheme="danger"
          rounded="full"
          zIndex={1}
          mr={5}
          variant="solid"
          alignSelf="center"
          _text={{
            fontSize: 12,
          }}>
          {data.length}
        </Badge>
      </HStack>
      <ScrollView height={'50%'}>
        {data.map(item => {
          return (
            <Box
              key={item.id}
              borderBottomWidth="1"
              _dark={{
                borderColor: 'gray.600',
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2">
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text color={'white'} bold>
                    {item.nombre} #{item.id_cliente}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color={'gray.200'}
                  alignSelf="flex-start">
                  {moment(item.fecha_hora).format('DD/MM/YYYY h:mm')}
                </Text>
              </HStack>
            </Box>
          );
        })}
      </ScrollView>
    </VStack>
  );
}

export default Fila;
