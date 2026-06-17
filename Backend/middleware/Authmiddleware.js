// const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

const AdminMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.Headers.Authorization;
    if (!authHeader) return res.status(400).json({ msg: "no header" });
    const token = authHeader.split(" ")[1];
    const paylod = await jwt.verfy(process.env.SECRETKEY, token);
    if (paylod != "admin")
      return res.status(401).json({ msg: "not autjorized" });
    req.user = paylod;
    next();
  } catch (error) {
    res.status.json({ msg: "server error", error: error.message });
  }
};
module.exports = AdminMiddleware;
