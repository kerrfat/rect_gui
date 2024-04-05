import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportPage';
import Header from './components/Header';


function App() {

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Flex>
          <Sidebar />
          <Box flex="1" p="5">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/report/:id" element={<ReportPage />} />
              {/* Add more routes as needed */}
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
