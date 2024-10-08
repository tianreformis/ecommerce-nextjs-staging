/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
const LoginView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    const { push, query } = useRouter();
    const callbackUrl: any = query.callbackUrl || '/';
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError('')
        const form = event.target as HTMLFormElement;
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: form.email.value,
                password: form.password.value,
                callbackUrl,
            })

            if (!res?.error) {
                setIsLoading(false);
                form.reset();
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError("Email dan Password Salah...");
            }
        }
        catch (errorregi) {
            setIsLoading(false);
            setError("User tidak ada silahkan mendaftar...");
        }
    };



    return (
        <div className="flex flex-row h-screen w-screen justify-center items-center">
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-extrabold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>

                    <form className="mx-auto max-w-lg rounded-lg border"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-4 p-4 md:p-8">
                            <Input
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Masukkan Email..."
                            />
                            <Input
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="Masukkan Password..."
                            />

                            <Button type="submit">{isLoading ? "Loading..." : "Login"} </Button>

                            <Button
                                type="button"
                                onClick={() => signIn('google', { callbackUrl, redirect: false })}>
                                {isLoading ? "Loading..." : "Login With Google"}
                            </Button>

                            {error && <p className="text-slate- bg-red-400 py-2 px-2  flex justify-center rounded-lg">{error}</p>}
                        </div>

                        <div className="flex items-center justify-center bg-gray-100 p-4">
                            <p className="text-center text-sm text-gray-500">Don{"'"}t have an account? <Link href="/auth/register" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )

}

export default LoginView