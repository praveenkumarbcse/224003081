const axios = require('axios');

// Define the John Doe Railway Server API base URL.
const API_BASE_URL = 'http://20.244.56.144/train';


const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM3MjgwNDMsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiYTE0MmU5M2MtYTMwZC00NWU2LWFjNGEtNzI5ODZlYjAzZTkyIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIyNDAwMzAxIn0.VUM5A3ctHrFvbjwK-l1WTCSKeVy3AQnCGvBW2iLI1gU";
async function fetchTrainData() {
  try {
    const response = await axios.get(`${API_BASE_URL}/trains`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Process the train data as needed for your application.
    const trainData = response.data;

    // Example: Log the retrieved train data.
    console.log('Fetched Train Data:', trainData);
  } catch (error) {
    console.error('Fetching train data failed:', error.message);
  }
}

// Call the fetch train data function.
fetchTrainData();
