import LoginView from "@/components/view/auth/Login"
import Head from "next/head"

const LoginPage = () => {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <LoginView />
        </div>
    )
}

export default LoginPage