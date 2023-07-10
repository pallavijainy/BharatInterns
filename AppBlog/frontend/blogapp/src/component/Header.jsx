import { Box } from '@chakra-ui/react'
import React from 'react'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box>
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '3xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Bloggers
            </Text>
            <br />{' '}
            <Text  fontSize={'34'}color={'blue.400'} as={'span'}>
             Publish your passions, your way
            </Text>
            {' '}
            <Text fontSize={'25'} color={'green.400'} >
     
Create a unique and beautiful blog easily.
          </Text>
          </Heading>
          
          
            <Link to={'/createpost'}><Button
              rounded={'full'}
              bg={'blue.400'}
              margin={'auto'}
              color={'white'}
              width={"50%"}
              _hover={{
                bg: 'blue.500',
              }}>
              CREATE YOUR BLOG
            </Button>
            </Link>
           
          
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
    </Box>
  )
}

export default Header