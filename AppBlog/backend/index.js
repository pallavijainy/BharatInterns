const express = require("express");
const { Connection } = require("./config/db");
const { UserModel } = require("./Model/UserModel");
const bcrypt = require("bcrypt"); //for bcrypting the password
const jwt = require("jsonwebtoken"); //for send the token
const cors = require("cors"); // to add frontend to backend
const { blogModel } = require("./Model/BlogModel");
const app = express();
app.use(cors());
app.use(express.json());

//userRouter
app.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    bcrypt.hash(password, 3, async function (err, hash) {
      const registerdata = new UserModel({
        firstname,
        lastname,
        email,
        password: hash,
      });
      console.log(registerdata);
      await registerdata.save();
      res.send("User Registered Successfully");
    });
  } catch (error) {
    res.send({ msg: "error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await UserModel.find({ email });

    if (data.length > 0) {
      bcrypt.compare(password, data[0].password, function (err, result) {
        if (result == true) {
          var token = jwt.sign({ foo: "bar" }, "secretkeyforblogapp");
          res.send({ msg: "user login successfully", token: token });
        } else {
          res.send({ msg: "Wrong Password" });
        }
      });
    } else {
      res.send({ msg: "invalid credentials" });
    }
  } catch (error) {
    res.send(error);
  }
});

//blogRouter

app.post("/addblog", async (req, res) => {
  const data = req.body;

  try {
    const blogdata = new blogModel(data);
    await blogdata.save();
    res.send({ msg: "Blog created successfully" });
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});

app.listen(8000, async () => {
  try {
    await Connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("listening on port 8000");
});
