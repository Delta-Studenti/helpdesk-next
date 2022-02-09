import type { NextPage } from "next";
import { useRegisterMutation } from "../../graphql/frontend/auth.graphql";

const Register: NextPage = () => {
	const [mutation] = useRegisterMutation();

	const submit = async () => {
		try {
			await mutation({
				variables: {
					input: {
						email: "misamadera2@gmail.com",
						password: "Ahoj1234",
						firstName: "Já",
						lastName: "Ty",
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
			<h1>Register</h1>
			<button onClick={submit}>register</button>
		</>
	);
};

export default Register;
