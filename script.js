const express = require("express");
const app = express();
const PORT = 3000;

// Define a GET endpoint
app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
