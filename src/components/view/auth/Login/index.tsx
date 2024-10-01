import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
const LoginView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    const { push, query } = useRouter();
    const callbackUrl: any = query.callbackUrl || '/auth/register';
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
                callbackUrl
            })

            if (res?.error) {
                setIsLoading(false);
                form.reset();
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError("Email dan Password Salah...");
            }
        }
        catch (error) {
            setIsLoading(false);
            setError("Email dan Password Salah...");
        }
    };



    return (
        <div className="flex flex-row h-screen w-screen justify-center items-center">
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>

                    <form className="mx-auto max-w-lg rounded-lg border" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4 p-4 md:p-8">
                            <div>
                                <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                                <input className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="Input Email"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                                <input className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                    type="password"
                                    id="password"
                                    placeholder="Masukkan Password..."
                                    name="password"
                                />
                            </div>

                            <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
                                type="submit"

                            >{isLoading ? "Loading..." : "Log in"}</button>


                            {error && <p className="text-red-500">{error}</p>}
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