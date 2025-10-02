import { model, Schema } from "mongoose";
import { User } from "../types";

export const UserSchema = new Schema<User>({
  _id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export const UserModel = model("User", UserSchema);

export const createUser = async (user: User) => {
  const newUser = new UserModel(user);
  await newUser.save();
  return newUser;
};
export const getUserById = async (id: string) => {
  return await UserModel.findById(id);
};

export const getUserByEmail = async (email: string) => {
  return await UserModel.findOne({ email });
};

export const updateUser = async (id: string, user: Partial<User>) => {
  return await UserModel.findByIdAndUpdate(id, user, { new: true });
};

export const deleteUser = async (id: string) => {
  return await UserModel.findByIdAndDelete(id);
};
