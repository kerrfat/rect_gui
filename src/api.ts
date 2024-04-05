import axios from "axios";

const API_BASE_URL = "https://your-api-base-url.com";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  // Additional common configurations like headers
});

export const fetchSpecFiles = async () => {
  try {
    const response = await apiClient.get("/path-to-spec-files-endpoint");
    return response.data; // Assuming the response body contains the list of spec files
  } catch (error) {
    console.error("Failed to fetch spec files:", error);
    throw error;
  }
};

export const fetchReportFiles = async () => {
  try {
    const response = await apiClient.get("/path-to-report-files-endpoint");
    return response.data; // Assuming the response body contains the list of report files
  } catch (error) {
    console.error("Failed to fetch report files:", error);
    throw error;
  }
};

export const runTests = async (testFileIds: any) => {
  try {
    const response = await apiClient.post("/run-tests-endpoint", {
      testFileIds, // Assuming the API expects an object with a testFileIds array
    });
    return response.data; // Handle the response accordingly
  } catch (error) {
    console.error("Failed to run tests:", error);
    throw error;
  }
};

export const connectConsoleLogWebSocket = (
  onMessageCallback: (arg0: any) => void
) => {
  const ws = new WebSocket("wss://your-websocket-url");

  ws.onopen = () => {
    console.log("WebSocket connection established.");
    // Optionally send a message to the server
    // ws.send('some initial message if needed');
  };

  ws.onmessage = (event) => {
    // Assuming the server sends stringified JSON data
    const message = JSON.parse(event.data);
    onMessageCallback(message);
  };

  ws.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  // Return the WebSocket object for further manipulation (send messages, close, etc.)
  return ws;
};

export const fetchReportContent = async (reportId: any) => {
  try {
    const response = await apiClient.get(`/report-content/${reportId}`);
    return response.data; // Assuming the response body contains the content of the report file
  } catch (error) {
    console.error(`Failed to fetch content for report ${reportId}:`, error);
    throw error;
  }
};
