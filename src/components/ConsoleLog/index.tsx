import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

type LogMessage = string;

interface ConsoleLogProps {
  logs: LogMessage[];
}

const ConsoleLog: React.FC<ConsoleLogProps> = ({ logs }) => {
  return (
    <Box
    height={300}
      bg="black"
      color="white"
      p={4}
      position="fixed"
      bottom={0}
      width="100%" // Or specify a custom width
      maxHeight="400px" // Adjust size as needed
      overflowY="scroll"
      borderTop="2px solid" borderColor="gray.700"
      zIndex={10} // Ensure it stacks above other content
    >
      <VStack align="start" spacing={2}>
        {logs.map((log, index) => (
          <Text key={index} fontSize="sm" fontFamily="monospace">
            {log}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default ConsoleLog;
