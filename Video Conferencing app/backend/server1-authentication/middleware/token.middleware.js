const jwt = require("jsonwebtoken");

require("dotenv").config();

const authorization = (req, res, next) => {
  const { token } = req.body;

  jwt.verify(token, "secret", async (err, decoded) => {
    try {
      if (err) {
        res.send({ ok: false, msg: "Please Login First" });
        return;
      }

      if (decoded) {
        if (token) {
          res.send({ ok: false, msg: "Please Login First" });
        } else {
          next();
        }
      } else {
        res.send({ ok: false, msg: "Please Login First" });
      }
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ ok: false, msg: "Something went wrong with middleware" });
    }
  });
};

module.exports = {
  authorization,
};
