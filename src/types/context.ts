export type CustomContext = {
	setCookie: (key: string, value: string) => void;
	userId: () => number | null;
};
