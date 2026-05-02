import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'admin', 'accountant'],
    default: 'user'
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    default: null
  }
});

export default mongoose.model("User", userSchema);
