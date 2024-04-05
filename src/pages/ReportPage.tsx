import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Textarea, Button, VStack } from '@chakra-ui/react';




// Mock function to simulate fetching report content
// Replace this with your actual function to fetch report content
const fetchReportContent = async (reportId: string): Promise<string> => {
  // Simulate fetching report content based on the report ID
  return `Content for report ${reportId}. Replace this with actual report content fetching logic.`;
};

const ReportPage: React.FC = () => {
    const navigate = useNavigate();
  
  const { id } = useParams<{ id: string }>();
  const [reportContent, setReportContent] = useState('');

  useEffect(() => {
    const loadReportContent = async () => {
      if (id) {
        const content = await fetchReportContent(id);
        setReportContent(content);
      }
    };

    loadReportContent();
  }, [id]);

 return (
    <Box height="100vh" bg="black" p={4}>
      <Button
        colorScheme="blue"
        mb={4}
        onClick={() => navigate('/')}
      >
        Go to Home
      </Button>
      <Textarea
        value={reportContent}
        onChange={(e) => setReportContent(e.target.value)}
        placeholder="Report content will appear here..."
        size="sm"
        resize="none"
        height="calc(100vh - 96px)" // Adjust the height based on the button and padding
        width="100%"
        bg="black"
        color="white"
        border="none"
        _focus={{
          boxShadow: "none",
        }}
      />
    </Box>
  );
};

export default ReportPage;
