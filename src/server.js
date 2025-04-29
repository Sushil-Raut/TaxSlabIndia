// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow cross-origin requests

// Example endpoint to get Google rating
app.get('/api/google-rating', async (req, res) => {
  try {
    // Here you would normally call Google My Business API
    // For example, using fetch or axios with your API key and OAuth tokens
    // const response = await axios.get('https://mybusiness.googleapis.com/v4/...');
    // const ratingData = response.data;
    // For demonstration purposes, we return dummy data:
    const ratingData = {
      rating: 4.8,
      reviewCount: 210
    };

    res.json(ratingData);
  } catch (error) {
    console.error('Error fetching Google rating:', error);
    res.status(500).json({ error: 'Error fetching rating' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
