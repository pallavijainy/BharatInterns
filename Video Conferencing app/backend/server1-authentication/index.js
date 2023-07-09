const express = require("express");
const cors = require("cors");
const app = express();
const { connection } = require("./config/db");
const { userrouter } = require("./routers/user.routes");
const { authRoute } = require("./routers/auth.routes");
const { githubRouter } = require("./routers/github.routes");
const { logger } = require("./middleware/logger.middleware");

app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("welcome to Talkies home page");
});

app.use("/user", userrouter);

// app.use("/", githubRouter);

app.use("/", authRoute);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Database is connected ");
  } catch (err) {
    console.log(err);
  }
  console.log(`server is running 8080`);
});
