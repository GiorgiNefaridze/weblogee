import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const generateHashPassword = async (password) => {
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};
