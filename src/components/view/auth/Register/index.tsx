import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
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
                <div className="flex flex-col shadow-lg rounded-md p-5 bg-slate-100 gap-2">
                    <Input
                        name="email"
                        label="Email"
                        placeholder="Masukkan email anda..."
                        type="email"
                        required={true}
                    />
                    <Input
                        name="fullname"
                        label="Fullname"
                        placeholder="Masukkan nama lengkap anda..."
                        type="text" />
                    <Input
                        name="phone"
                        label="Phone"
                        placeholder="Masukkan nomor telepon anda..."
                        type="tel" />
                    <Input
                        name="password"
                        label="Password"
                        placeholder="Masukkan password anda..."
                        type="password" />

                    <Button
                        type='submit'>
                        {isLoading ? "Loading..." : "Register"}

                    </Button>


                    <div className="text-sm">
                        Sudah Punya akun? <Link href="/auth/login">Login</Link>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default RegisterView