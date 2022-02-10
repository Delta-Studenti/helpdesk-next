import type { NextPage } from "next";
import MainLayout from "../Components/Layouts/main";
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
		<MainLayout title="Vytvořit tiket" sidebarTab="create-ticket">

			<h1>Create ticket</h1>
			<button onClick={submit}>create ticket</button>
			</MainLayout>

	);
};

export default Register;
