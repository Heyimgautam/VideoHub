import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi'

const Navigation = () => {
 const {isOpen, onOpen, onClose} = useDisclosure();
  return (<>
    <Button 
    zIndex={'overlay'}
    pos={'fixed'}
    top={'4'}
    left={'4'}
    colorScheme={"purple"}
    p={'0'}
    w={'10'}
    h={'10'}
    borderRadius={'full'}
    onClick={onOpen}
    >
      <BiMenuAltLeft size={'20'}/>
    </Button>

    <Drawer isOpen={isOpen} placement = "left" onClose ={onClose}>
     <DrawerOverlay/>
     <DrawerContent>
    <DrawerCloseButton/>
    <DrawerHeader>Video Hub</DrawerHeader>
    <DrawerBody>
      <VStack alignItems={'flex-start'}>
        <Button
        onLick={onClose}
        varient = {'ghost'}
        colorScheme = {'purple'}>
          <Link to ={'/'}>Home</Link>
        </Button>
        <Button
        onClick = {onClose}
        varient = {"ghost"}
        colorScheme = {'purple'}>
          <Link to = {'/videos'}>Videos</Link>
        </Button>
        <Button
         onClick = {onClose}
         varient = {"ghost"}
         colorScheme = {'purple'}>
          <Link to = {'/uploadVideo'}>Upload Video</Link>
        </Button>
      </VStack>

      <HStack pos = {'absolute'}
      bottom = {'10'}
      left = {'0'}
      w = {'full'}
      justifyContent = {'space-evenly'}>
        <Button onClick = {onClose} 
        variant = {'outline'}
        colorScheme = {'purple'}>
          Login
        </Button>
        <Button onClick = {'onClose'}
        variant = {'outline'}
        colorScheme = {'purple'}>
          Sign Up
          </Button>
      </HStack>
    </DrawerBody>

     </DrawerContent>
    </Drawer>
    
  </>);
};

export default Navigation;
