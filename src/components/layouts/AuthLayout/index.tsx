
import Link from "next/link";
import { FormEventHandler } from "react";
type propsTypes = {
    // submit: () => void,
    submitForms: FormEventHandler<HTMLFormElement>,
    error: string,
    children: React.ReactNode,
    title: string,
    notificationText: string,
    linkUrl: string,
    linkTitle: string,
}

const AuthLayout = (props: propsTypes) => {
    const {
        error,
        children,
        title,
        submitForms,
        notificationText,
        linkUrl,
        linkTitle
    } = props;

    return (
        <div className="flex flex-row h-screen w-screen justify-center items-center">
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-extrabold text-gray-800 md:mb-8 lg:text-3xl">{title}</h2>

                    <form className="mx-auto max-w-lg rounded-lg border"
                        onSubmit={submitForms}
                    >
                        {children}
                        <div className="flex flex-col gap-4">
                            {error && <p className="text-slate- bg-red-400 py-2 px-2  flex justify-center rounded-lg">{error}</p>}
                        </div>

                        <div className="flex items-center justify-center bg-gray-100 p-4">
                            <p className="text-center text-sm text-gray-500">{`${notificationText} `} 
                                <Link href={linkUrl} className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                                    {linkTitle}
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>//-

    )
}

//-
export default AuthLayout

