const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve the compiled TypeScript files
app.use(express.static('dist'));

// Handle API requests here if needed

// Catch-all route handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
