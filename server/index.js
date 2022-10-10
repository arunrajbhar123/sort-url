const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const SortModel = require("./model/sort.Model");
const CheckUrlPresent = require("./middleware/check.url");
const connection = require("./config/db");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hi");
});
app.get("/url", async (req, res) => {
  const sortlink = req.headers.link;
  if (sortlink) {
    const check = await SortModel.findOne({ sortlink });
    const link = check?.link;
    if (link) {
      res.header("Access-Control-Allow-Origin", link);
      res.header("Access-Control-Allow-Headers", link);
      return res.send(link);
    }
  }

  res.send({ message: "link not exit" });
});

app.post("/", CheckUrlPresent, (req, res) => {
  res.send("hi,post");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db connected");
  } catch {
    console.log("db not connected");
  }
  console.log("server is running on port", process.env.PORT);
});
