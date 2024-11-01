

type PropsTypes = {
    label?:string;
    name:string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    defaultValue?: string;
    disabled?: boolean;
}


const Input = (props:PropsTypes) => {
    const {label, name,  type, placeholder,required,defaultValue,disabled} = props;
    return (
        
            <div>
                {label && <label htmlFor={name} className="mb-2 inline-block text-sm text-gray-800 sm:text-base font-bold">{label}</label>}
                
                <input className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    name={name}
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    defaultValue={defaultValue}
                    disabled={disabled}
                />
            
        </div>
    )
}

export default Input