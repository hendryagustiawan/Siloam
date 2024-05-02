import bcrypt from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => bcrypt.hash(password, await bcrypt.genSalt(8));

export const comparePassword = async (inputPassword: string, DB_Password: string): Promise<boolean> => bcrypt.compare(inputPassword, DB_Password);
