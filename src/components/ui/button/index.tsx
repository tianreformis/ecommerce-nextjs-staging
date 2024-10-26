type PropsTypes = {
    type: 'button' | 'submit' | 'reset' | undefined;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: string;
}
const Button = (props: PropsTypes) => {
    const { type, onClick, children } = props
    return (
        <>
            <button
                className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base "
                
                type={type}
                onClick={onClick}

            >{children}</button>
        </>
    )
}

export default Button