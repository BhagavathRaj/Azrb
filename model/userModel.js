import mongoose from "mongoose";
const userSchema= new mongoose.Schema( {
  name: { type: String, required: true },
  email: { type: String, required: true, },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false, required: true }
}

);
const User=mongoose.model('userr',userSchema);
export default User;
