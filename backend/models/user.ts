import mongoose from "mongoose";
import { pick } from "lodash";

const options: object = {
  discriminatorKey: "kind",
  toObject: { virtuals: true },
};
const userSchema: mongoose.Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      validate: function (v: string): boolean | string {
        return (
          v &&
          /^[\s]*[a-zA-z]+[0-9]*[@]{1}[a-zA-z]+[.]{1}[a-zA-Z]+[\s]*$/.test(v)
        );
      },
      message: "Enter a valid email",
    },
    password: {
      type: String,
      minlength: 3,
      required: true,
    },
    verified: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  options
);

userSchema.methods.toJSON = function (): object {
  const obj: object = this.toObject();

  return pick(obj, ["_id", "email", "verified"]);
};

const User = mongoose.model("User", userSchema);

export default User;
