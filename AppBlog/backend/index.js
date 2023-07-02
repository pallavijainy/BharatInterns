const express = require("express");
const { Connection } = require("./config/db");
const { UserModel } = require("./Model/UserModel");
const bcrypt = require("bcrypt"); //for bcrypting the password
const jwt = require("jsonwebtoken"); //for send the token
const cors = require("cors"); // to add frontend to backend
const { blogModel } = require("./Model/BlogModel");
const { upload } = require("./Middleware/Upload");
const Grid = require("gridfs-stream"); //for image upload
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "photos",
  });

  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
  // all set!
});

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

app.post("/file/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      res.status({ msg: "file not found" });
    }
    const imageurl = `http://localhost:8000/file/${req.file.filename}`;
    res.send(imageurl);
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});

app.get("/file/:filename", async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    res.send({ msg: error.message });
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
