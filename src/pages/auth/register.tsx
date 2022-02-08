import type { NextPage } from "next";
import { RegisterInput } from "../../types/register";

const Register: NextPage = () => {

	const submit = async () => {
		const data: RegisterInput = {
			email: "misamadera1@gmail.com",
			firstName: "Michal",
			lastName: "Sadłowski",
			password: "password",
		};
		const res = await fetch('/api/register', {
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
			<h1>Register</h1>
			<button onClick={submit}>register</button>
		</>
	);
};

export default Register;
