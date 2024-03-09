const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  first_name: { type: String, required: [true, "All feilds are required"] },
  last_name: {
    type: String,
    required: [true, "All feilds are required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"]
  },
  active: {
    type: Boolean,
  }
});

export default mongoose.models.UserSchema || mongoose.models("UserSchema", UserSchema);
