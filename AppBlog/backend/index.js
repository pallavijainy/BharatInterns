const express = require("express");
const { Connection } = require("./config/db");
const { UserModel } = require("./Model/UserModel");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("helo");
});

app.post("/register", async (req, res) => {
  const data = req.body;
  try {
    const registerdata = new UserModel(data);
    await registerdata.save();
    res.send("User Registered Successfully");
  } catch (error) {
    res.send({ msg: error });
  }
});

// app.get("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const data = await UserModel.find({ email });
//   } catch (error) {}
// });

app.listen(8000, async () => {
  try {
    await Connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("listening on port 8000");
});
