type Options = {
  label: string;
  value: string;

}
type PropsTypes = {
  label?: string;
  name: string;
  defaultValue?: string;
  disabled?: boolean;
  options: Options[]
}


const Select = (props: PropsTypes) => {
  const { label, name, defaultValue, disabled, options } = props;
  return (
    <div>
      <label htmlFor={name} className="mb-2 inline-block text-sm text-gray-800 sm:text-base font-bold">{label}</label>
      <select
      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        id={name}
        name={name}  
        disabled={disabled}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select;