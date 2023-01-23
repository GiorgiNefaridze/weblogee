import bcrypt from "bcrypt";

export const compareHashedPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
