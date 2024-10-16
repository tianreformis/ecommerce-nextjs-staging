import RegisterView from "@/components/view/auth/Register";
import  Head  from "next/head";

const RegisterPage = () => {
    return (
        <div>
            <Head>
                <title>Register</title>
            </Head>
            <RegisterView />
        </div>

    )
}
export default RegisterPage;