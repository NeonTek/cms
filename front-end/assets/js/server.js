const express = require("express");
const cloudinary = require("cloudinary").v2;

const app = express();

cloudinary.config({
  cloud_name: "drtzfkbny",
  api_key: "838389147737681",
  api_secret: "-30h52oNmlJ9GUE_uivRYb7rmfs",
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT"); // Allow HTTP methods
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/api/images", async (req, res) => {
  try {
    const resources = await cloudinary.api.resources({
      type: "upload",
      resource_type: "image",
      prefix: "",
    });
    res.json(resources.resources);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
