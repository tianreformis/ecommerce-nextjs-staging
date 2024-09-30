import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const RegisterView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    const { push } = useRouter();
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError('')
        const form = event.target as HTMLFormElement;
        const data = {
            email: form.email.value,
            fullname: form.fullname.value,
            phone: form.phone.value,
            password: form.password.value,
        };
        const result = await fetch('/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (result.status === 200) {
            form.reset();
            push('/auth/login')
        } else {
            setIsLoading(false);
            setError('Email is already registered');
        }
    }

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1>Register</h1>

            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col shadow-lg rounded-md p-5 bg-slate-100">
                    <div className="my-2 flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your Email"
                        />
                    </div>

                    <div className="my-2 flex flex-col">
                        <label htmlFor="fullname">Fullname</label>
                        <input type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Enter your fullname"
                        />
                    </div>

                    <div className="my-2 flex flex-col">
                        <label htmlFor="phone">Phone</label>
                        <input type="text"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone"
                        />
                    </div>
                    <div className="my-2 flex flex-col">
                        <label htmlFor="passsword">Password</label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="my-2 flex flex-col">
                        <button type="submit" className="bg-black text-white p-2 rounded-md">{isLoading ? "Loading...": "Register"}</button>
                    </div>
                    <div className="text-sm">
                        Sudah Punya akun? <Link href="/auth/login">Login</Link>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default RegisterView