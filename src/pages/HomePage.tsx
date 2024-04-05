import React from 'react';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import DataTable from '../components/DataTable';
import ConsoleLog from '../components/ConsoleLog';
import Header from '../components/Header';
const logMessages = [
    "Log message 1",
    "Error: Something went wrong",
    "Log message 3",
    // Add more log messages as needed
  ];
const HomePage = () => {
  return (
    <Box>
      
         <VStack spacing={2} align="stretch">
       
        <Flex direction="column" flex="1" overflow="hidden">
          <Box flex="1" overflowY="auto">
        
            <DataTable />
            {/* Place other components that should scroll with the table here */}
          </Box>
          <ConsoleLog logs={logMessages} />
        </Flex>
      </VStack>
    </Box>
  );
};

export default HomePage;
