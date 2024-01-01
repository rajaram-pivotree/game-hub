import { ColorModeContext, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo.webp';
import ColormModeSwitch from './ColormModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div>
      <HStack padding="10">
        <Image src={logo} boxSize="60px"></Image>
        {/* <Text>NavBar</Text> */}
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColormModeSwitch></ColormModeSwitch>
      </HStack>
    </div>
  );
};

export default NavBar;
