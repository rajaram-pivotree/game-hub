import { ColorModeContext, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo.webp';
import ColormModeSwitch from './ColormModeSwitch';

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10">
        <Image src={logo} boxSize="60px"></Image>
        {/* <Text>NavBar</Text> */}
        <ColormModeSwitch></ColormModeSwitch>
      </HStack>
    </div>
  );
};

export default NavBar;
