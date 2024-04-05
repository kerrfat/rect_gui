import React, { useState } from 'react';
import {
  Box, Input, VStack, Text, Button, StackDivider
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // For navigation

interface ReportFile {
  id: string;
  name: string;
}

// Mock data for demonstration purposes
const mockReportFiles: ReportFile[] = [
  { id: '1', name: 'Report 1' },
  { id: '2', name: 'Report 2' },
  // generate 100 more reports
  ...Array.from({ length: 100 }, (_, i) => ({ id: `${i + 3}`, name: `Report ${i + 3}` })),



];

const Sidebar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredReports = searchTerm.length === 0
    ? mockReportFiles
    : mockReportFiles.filter(file => file.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box width="400px" height="100vh" overflowY="auto" bg="gray.50" p={4}>
      <Input
        placeholder="Search reports..."
        mb={4}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
        {filteredReports.map(report => (
          <Box key={report.id} p={3} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
            <Text mb={2}>{report.name}</Text>
            <Button colorScheme="blue" onClick={() => navigate(`/report/${report.id}`)}>View</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
