import type { NextPage } from "next";
import { LoginInput } from "../types/login";
import { RegisterInput } from "../types/register";

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

		const { token, message } = await res.json();

		if (token || typeof token === "string") {
			console.log(token);
			return;
		}
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
