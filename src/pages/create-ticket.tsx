import type { NextPage } from "next";
import { useCreateTicketMutation } from "../graphql/frontend/create.graphql";
import { CreateTicketInput } from "../types/createTicket";

const Register: NextPage = () => {
	const [mutation] = useCreateTicketMutation();

	const submit = async () => {
		try {
			await mutation({
				variables: {
					input: {
						description: "Je to rozbite",
						title: "Rozbita kluczka",
						groupId: 1,
						priorityId: 1,
					},
				},
			});
			alert("Success");
		} catch ({message}) {
			if (typeof message === "string") {
				alert(message);
			}
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
