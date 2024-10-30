
type VarianTypes = 'primary' | 'secondary' | 'danger' | 'danger';
type PropsTypes = {
    type: 'button' | 'submit' | 'reset' | undefined;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: VarianTypes;
}
const Button = (props: PropsTypes) => {
    const { type, onClick, children, variant = "primary", } = props;

    const getButtonClassname = () => {
        switch (variant) {
            case 'primary': return 'block rounded-md bg-gray-800 px-4 py-2 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base';
            case 'secondary': return 'block rounded-md bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-green-700 focus-visible:ring active:bg-gray-600 md:text-base';
            case 'danger': return 'block rounded-md bg-red-600 px-4 py-2 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-red-700 focus-visible:ring active:bg-gray-600 md:text-base';
        }
    }

    return (
        <>
            <button
                className={getButtonClassname()}
                type={type}
                onClick={onClick}

            >{children}</button>
        </>
    )
}

export default Button;