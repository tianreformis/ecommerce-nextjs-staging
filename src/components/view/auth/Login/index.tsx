import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
const LoginView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    const { push, query } = useRouter();
    const callbackUrl: string = ` ${query.callbackUrl} ` || '/';
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
                setError("Email and Passwrod Incoocredt");
            }
        }
        catch (error) {
            setIsLoading(false);
            setError("Email and Passwrod Incoocredt");
        }
    };



return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>

            <form className="mx-auto max-w-lg rounded-lg border">
                <div className="flex flex-col gap-4 p-4 md:p-8">
                    <div>
                        <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                        <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                        <input name="password" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>

                    <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Log in</button>



                </div>

                <div className="flex items-center justify-center bg-gray-100 p-4">
                    <p className="text-center text-sm text-gray-500">Don{"'"}t have an account? <a href="#" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Register</a></p>
                </div>
            </form>
        </div>
    </div>
)
    
}

export default LoginView