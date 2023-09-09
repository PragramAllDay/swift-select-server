const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const customerRouter = require("./routes/customer");
const authRouter = require("./routes/auth");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));

//routes
app.use("/api/auth", authRouter);
app.use("/api/customer", customerRouter);

app.get("/", (req, res) => {
  res.send(`Server is running on port ${process.env.PORT}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
