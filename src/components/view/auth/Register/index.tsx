import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import  authServices  from "@/services/auth";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { AxiosError } from "axios";
import AuthLayout from "@/components/layouts/AuthLayout";

const RegisterView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    const { push } = useRouter();
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');
        const form = event.target as HTMLFormElement;
        const data = {
            email: form.email.value,
            fullname: form.fullname.value,
            phone: form.phone.value,
            password: form.password.value,
        };
        try {
            const result = await authServices.registerAccount(data);
            if (result.status === 200) {
                form.reset();
                push('/auth/login');
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 404) {
                    setError('Registration service is currently unavailable. Please try again later.');
                } else if (error.response?.status === 409) {
                    setError('Email is already registered');
                } else {
                    setError('An error occurred during registration. Please try again.');
                }
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <AuthLayout
            title="Register"
            submitForms={handleSubmit}
            error={error}
            notificationText="Punya Akun?"
            linkUrl="/auth/login"
            linkTitle="Login"
        
        >
            <div className="flex flex-col gap-4 p-4 md:p-8">
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
                </div>
        </AuthLayout>
        // <div className="flex flex-col h-screen justify-center items-center">
        //     <h1>Register</h1>

        //     {error && <p className="text-red-500">{error}</p>}
        //     <form onSubmit={handleSubmit}>
                

        //     </form>
        // </div>
    )
}

export default RegisterView