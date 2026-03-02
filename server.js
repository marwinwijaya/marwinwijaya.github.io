const express = require("express");
const path = require("path");
const rateLimit = require("express-rate-limit");

const app = express();

const PUBLIC_DIR = path.join(__dirname, "public");

// Rate limiter (lebih aman buat real usage)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // max 300 requests per 15 min per IP
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Helper: deteksi file "hashed/versioned" (contoh: app.8d3f1c.js)
function isHashedAsset(filePath) {
  // ada ".<8+ hex>." di nama file
  return /\.[0-9a-fA-F]{8,}\./.test(filePath);
}

// Static files with smart cache rules
app.use(
  express.static(PUBLIC_DIR, {
    setHeaders: (res, filePath) => {
      const rel = filePath.replace(PUBLIC_DIR, "").replaceAll("\\", "/");

      // 1) HTML: selalu no-cache (biar update kebaca)
      if (rel.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-store");
        return;
      }

      // 2) Asset hashed/versioned: cache 1 tahun (kalau ada)
      if (isHashedAsset(rel)) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        return;
      }

      // 3) Asset normal (style.css, custom.js, images biasa): no-cache
      // biar dev & update manual aman
      res.setHeader("Cache-Control", "no-cache");
    },
  })
);

// SPA fallback: arahkan ke public/index.html
app.get("*", (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
