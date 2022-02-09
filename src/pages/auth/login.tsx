import type { NextPage } from "next";
import { useLoginMutation } from "../../graphql/frontend/auth.graphql";

const Register: NextPage = () => {
	const [mutation] = useLoginMutation();

	const submit = async () => {
		try {
			await mutation({
				variables: {
					input: {
						email: "misamadera2@gmail.com",
						password: "Ahoj1234",
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
			<h1>Login</h1>
			<button onClick={submit}>login</button>
		</>
	);
};

export default Register;
