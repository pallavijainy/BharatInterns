const express = require("express");
const { Connection } = require("./config/db");
const { UserModel } = require("./Model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const secret = "akdjsdskjfdgbkjf1324fdkhdf445t";
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");
const { PostModel } = require("./Model/PostModel");

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", async (req, res) => {
  res.send("hello");
});

app.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    bcrypt.hash(password, 10, async function (err, hash) {
      const registerData = new UserModel({
        firstname,
        lastname,
        email,
        password: hash,
      });
      await registerData.save();
      res.send({ msg: "User Registered Successfully" });
    });
  } catch (error) {
    res.send({ msg: "Error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await UserModel.findOne({ email });
    if (data) {
      bcrypt.compare(password, data.password, function (err, result) {
        if (result) {
          const token = jwt.sign({ email, id: data._id }, secret);
          res.cookie("token", token).status(200);
          res.send({ msg: "User logged in successfully", email: email });
        } else {
          res.send({ msg: "Wrong Password" });
        }
      });
    } else {
      res.send({ msg: "Invalid Credentials" });
    }
  } catch (error) {
    res.send({ msg: error });
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;

  jwt.verify(token, secret, (err, info) => {
    if (err) throw err;

    res.send(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "");
  res.send("ok");
});

app.post("/createpost", uploadMiddleware.single("file"), async (req, res) => {
  const { title, content, summery } = req.body;
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;
  jwt.verify(token, secret, async (err, info) => {
    if (err) throw err;

    const newPost = new PostModel({
      title,
      summery,
      content,
      cover: newPath,
      author: info.id,
    });
    await newPost.save();
    res.send(newPost);
  });
});

app.get("/posts", async (req, res) => {
  const AllPost = await PostModel.find()
    .populate("author", ["firstname", "lastname"])
    .sort({ createdAt: -1 });
  res.send(AllPost);
});

app.get("/postbyid/:id", async (req, res) => {
  const { id } = req.params;
  const PostById = await PostModel.findById(id)
    .populate("author", ["firstname", "lastname"])
    .sort({ createdAt: -1 });
  res.send(PostById);
});

app.listen(8000, async () => {
  try {
    await Connection;
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("Listening on port 8000");
});
