import type { NextPage } from "next";
import { LoginInput } from "../../types/login";

const Register: NextPage = () => {

	const submit = async () => {
		const data: LoginInput = {
			email: "misamadera1@gmail.com",
			password: "password",
		};
		const res = await fetch('/api/login', {
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		const { message } = await res.json();

		if (message || typeof message === "string") {
			console.error(message);
			return;
		}
	}

	return (
		<>
			<h1>Login</h1>
			<button onClick={submit}>login</button>
		</>
	);
};

export default Register;
