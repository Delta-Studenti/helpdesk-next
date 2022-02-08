import type { NextPage } from "next";
import { CreateTicketInput } from "../types/createTicket";

const Register: NextPage = () => {

	const submit = async () => {
		const data: CreateTicketInput = {
			description: "Je to rozbite",
			title: "Rozbita kluczka",
			groupId: 1,
			priorityId: 1,
		};
		const res = await fetch('/api/create-ticket', {
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
			<h1>Create ticket</h1>
			<button onClick={submit}>create ticket</button>
		</>
	);
};

export default Register;
