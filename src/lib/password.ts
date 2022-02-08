import bcrypt from "bcrypt";

export const createHash = (password: string): Promise<string> => {
	return bcrypt.hash(password, 10);
};

export const compareHash = (password: string, hash: string): Promise<boolean> => {
	return bcrypt.compare(password, hash);
};
