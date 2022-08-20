import {
  Box,
  FlatList,
  Heading,
  HStack,
  Spacer,
  VStack,
  Text,
  Badge,
  ScrollView,
} from 'native-base';
import React from 'react';
import moment from 'moment';
moment.locale('es')

function ListaDeEspera({lista}) {
  const [turnos, setTurnos] = React.useState(lista);

  React.useEffect(() => {
    setTurnos(lista);
  }, [lista]);

  return (
    <VStack
      height={'70%'}
      width={'100%'}
      bg={'#037171'}
      borderTopRadius={'3xl'}
      shadow={'9'}>
      <VStack height={'50%'}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <Heading
            color={'white'}
            fontWeight={'light'}
            fontSize="xl"
            p="4"
            pb="3">
            #1 Lista de espera
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
            {turnos.filaUno.length}
          </Badge>
        </HStack>
        <ScrollView height={'100%'}>
          {turnos.filaUno.map(item => {
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
                     {moment(item.fecha_hora).format('hh:ss')}
                  </Text>
                </HStack>
              </Box>
            );
          })}
        </ScrollView>
      </VStack>
      <VStack height={'50%'}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <Heading
            color={'white'}
            fontWeight={'light'}
            fontSize="xl"
            p="4"
            pb="3">
            #2 Lista de espera
          </Heading>
          <Badge // bg="red.400"
            colorScheme="danger"
            rounded="full"
            zIndex={1}
            variant="solid"
            alignSelf="center"
            mr={5}
            _text={{
              fontSize: 12,
            }}>
            {turnos.filaDos.length}
          </Badge>
        </HStack>
        <ScrollView height={'100%'}>
          {turnos.filaDos.map(item => {
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
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color={'white'}
                      bold>
                      {item.nombre} #{item.id_cliente}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text fontSize="xs" color={'gray.200'} alignSelf="flex-start">
                    {moment(item.fecha_hora).format('DD/MM/YYYY h:mm')}
                  </Text>
                </HStack>
              </Box>
            );
          })}
        </ScrollView>
      </VStack>
    </VStack>
  );
}

export default ListaDeEspera;
