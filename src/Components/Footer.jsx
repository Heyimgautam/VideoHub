import React from 'react'
import {Box, Text, Stack,VStack,HStack,Heading,Input,Button} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>
        <Stack direction = {['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading
                size = "md"
                textTransform={'uppercase'}
                textALign={['center','left']}>
                    Subscribe to get updates
                    </Heading>
                  <HStack borderBottom = {"2px solid white"} py='2'> 
                    <Input
                    placeholder="Enter Email here..."
                    border={'none'}
                    borderRadius={'none'}
                    outline={'none'}
                    focusBorderColor={"none"}
                    />
                   <Button
                   p={'0'}
                   colorScheme={'purple'}
                   variant={'ghost'}
                   borderRadius={'0 20px 20px 0'}
                   >
                    <AiOutlineSend size={20}/>
                    </Button>
                    </HStack>
            </VStack>

            <VStack
            w='full'
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            >
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    VIDEO HUB
                </Heading>
             <Text>All Rights Reserved</Text>
            </VStack>

            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'white'}>
                    <a target={'black'} href="">Youtube</a>
                </Button>

                <Button variant={'link'} colorScheme={'white'}>
                    <a  target={'black'} href="">Instagram</a>
                </Button>

                <Button variant={'link'} colorScheme={'white'}>
                    <a target={'black'} href="">Github</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
    </>
  )
}

export default Footer
