// const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const AdminSchema = mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    
  },
 { timestamps: true }
);

// pre save hook
// بيتنفذ قبل ما document يتخزن في database
AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});


// instance method
// بنضيف method على كل admin document عشان نقارن password وقت login
AdminSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
