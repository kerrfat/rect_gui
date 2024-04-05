import React, { useState } from 'react';
import {
  Box, Button, Checkbox, Flex, IconButton, Input, Select, Stack,
  Table, Thead, Tbody, Tr, Th, Td, TableContainer, Text,
  useToast, Tooltip
} from '@chakra-ui/react';
import { ArrowForwardIcon, ViewIcon } from '@chakra-ui/icons';
import { servicesData } from '../../data/mockData';

const DataTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('All');
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const toast = useToast();

  const filteredData = servicesData
    // Filter by selected service if not 'All'
    .filter(service => selectedService === 'All' || service.service_name === selectedService)
    // Flatten to get all files, then filter by searchTerm
    .flatMap(service => (service.file_paths || [service.file_path]).map(file_path => ({ service_name: service.service_name, file_path })))
    .filter(file => file.file_path.includes(searchTerm));

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSelectFile = (filePath: string) => {
    const newSelectedFiles = selectedFiles.includes(filePath)
      ? selectedFiles.filter(file => file !== filePath)
      : [...selectedFiles, filePath];
    setSelectedFiles(newSelectedFiles);
  };

  const handleRunSelected = () => {
    console.log('Running selected files:', selectedFiles);
    // Add your logic here to handle running the files
    toast({
      title: 'Executing files',
      description: `${selectedFiles.length} files are being executed`,
      status: 'info',
      duration: 5000,
      isClosable: true,
    });
  };
const handleRunFile = (filePath: any) => {
    console.log('Running file:', filePath);
    // Add your logic here to handle running the individual file
    toast({
      title: 'Executing file',
      description: `The file ${filePath} is being executed`,
      status: 'info',
      duration: 5000,
      isClosable: true,
    });
  };

  const handleViewFile = (filePath: any) => {
    console.log('Viewing file:', filePath);
    // Add your logic here to handle running the individual file
    toast({
      title: 'Viewing file',
      description: `The file ${filePath} is being displayed`,
      status: 'info',
      duration: 5000,
      isClosable: true,
    });
  };


  // Functions to handle pagination
  const goToNextPage = () => setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  const goToPreviousPage = () => setCurrentPage(currentPage => Math.max(currentPage - 1, 1));

  return (
    <Box>
      <Flex justifyContent="space-between" mb="4" alignItems="center">
        <Stack direction="row" spacing={4}>
          <Select value={selectedService} onChange={e => setSelectedService(e.target.value)}  size={'md'}>
            <option value="All">All Services</option>
            {Array.from(new Set(servicesData.map(item => item.service_name))).map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </Select>
          <Input
            placeholder="Search files..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
           
          />
        </Stack>
        <IconButton
          aria-label="Run selected files"
          icon={<ArrowForwardIcon />}
          colorScheme="primary"
          onClick={handleRunSelected}
        />
      </Flex>
      <TableContainer >
        <Table variant="">
          <Thead>
            <Tr>
              <Th><Checkbox onChange={e => setSelectedFiles(e.target.checked ? currentItems.map(item => item.file_path) : [])} /> All</Th>
              <Th>File Path</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentItems.map((item, index) => (
              <Tr key={index}>
                <Td><Checkbox isChecked={selectedFiles.includes(item.file_path)} onChange={() => handleSelectFile(item.file_path)} /></Td>
                <Td>{item.file_path}</Td>
                <Td>
                  <Tooltip label="View">
                    <IconButton
                      aria-label="Display file"
                      icon={<ViewIcon />}
                      onClick={() => handleViewFile(item.file_path)}
                      size="sm"
                      mr={2}
                    />
                  </Tooltip>
                  <Tooltip label="Run" placement="top">
                    <IconButton
                      aria-label="Run file"
                      icon={<ArrowForwardIcon />}
                      onClick={() => handleRunFile(item.file_path)}
                      size="sm"
                      colorScheme="primary"
                    />
                  </Tooltip>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justifyContent="space-between" mt="4">
        <Button onClick={goToPreviousPage} isDisabled={currentPage === 1}>Previous</Button>
        <Text>Page {currentPage} of {totalPages}</Text>
        <Button onClick={goToNextPage} isDisabled={currentPage === totalPages}>Next</Button>
      </Flex>
    </Box>
  );
};

export default DataTable;
