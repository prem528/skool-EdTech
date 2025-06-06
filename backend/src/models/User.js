import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      required: true,
      default: "student",
    },
    schoolId: {
      type: Number,
      ref: "School",
      required: true,
    },
    class: {
      type: Number,
      required: function () {
        return this.role === "student";
      },
      min: 1,
      max: 12,
    },
    classAssigned: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
