const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const {
  AdminSchema,
  createAdminSchema,
} = require("../controller/validation/AdminValidation");
const createAdmin = async (req, res) => {
  try {
    const { error, value } = createAdminSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error)
      return res
        .status(400)
        .json({ msg: error.details.map((err) => err.message) });
    const { email, full_name, password } = value;
    const user = await Admin.findOne({ email });
    if (user)
      return res.status(403).json({ msg: "this User is already heare " });
    const new_admin = await Admin.create(value);
    const token = await jwt.sign(
      { id: user._id, role: "admin" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.status(201).json({ msg: "done", data, token });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const Login = async (req, res) => {
  try {
    const { error, value } = AdminSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error)
      return res
        .status(400)
        .json({ msg: error.details.map((err) => err.message) });
    const { email, password } = value;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ msg: "not email or password" });
    const matchedpassword = await admin.comparePassword(password);
    if (!matchedpassword)
      return res.status(401).json({ msg: "not email or password" });

    const token = await jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );
    res.status(201).json({ msg: "done", token });
  } catch (error) {
    res.status(500).json({ msg: "server error", error: error.message });
  }
};

module.exports = { Login, createAdmin };
