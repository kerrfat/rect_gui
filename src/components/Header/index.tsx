import React from 'react';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

const Header: React.FC = () => {
  const bgColor = useColorModeValue('primary.500', 'primary.400');
  const textColor = useColorModeValue('white', 'gray.200');

  return (
    <Flex
      bg={bgColor}
      color={textColor}
      px={4}
      py={8}
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="xl" fontWeight="bold">
        Integration Test Framework GUI
      </Text>
    </Flex>
  );
};

export default Header;
