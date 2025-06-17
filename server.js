const express = require('express');
const path = require('path');
const RateLimit = require('express-rate-limit');

const app = express();

// Set up rate limiter: maximum of 100 requests per 15 minutes
const limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per windowMs
});

// Apply rate limiter to all requests
app.use(limiter);

// Serve static files with long cache TTL (1 year)
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1y',
  immutable: true
}));

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
