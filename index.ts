import express from "express";

const app = express();
const PORT = 3000;
app.get("/", (req, res) => res.send("helo world"));

app.listen(PORT, () =>
  console.log(`⚡Server is running here 👉 http://localhost:${PORT}`)
);
