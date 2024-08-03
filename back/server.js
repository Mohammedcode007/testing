const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors"); // استيراد مكتبة cors
const app = express();
const PORT = 5000;

app.use(cors()); // استخدام مكتبة cors للسماح بالطلبات من جميع النطاقات
app.use(express.json());

app.get("/image-proxy", async (req, res) => {
  try {
    const imageUrl = req.query.url;
    const response = await fetch(imageUrl);
    const imageBuffer = await response.buffer();
    res.set("Content-Type", "image/png");
    res.send(imageBuffer);
  } catch (error) {
    res.status(500).send("Error fetching image");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
