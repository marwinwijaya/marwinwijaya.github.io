const express = require('express');
const path = require('path');

const app = express();

// Serve static files with long cache TTL (1 year)
app.use(express.static(__dirname, {
  maxAge: '1y',
  immutable: true
}));

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
