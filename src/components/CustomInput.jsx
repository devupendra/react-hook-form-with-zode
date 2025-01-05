export default function CustomInput({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="w-full mb-1.5">
      <label htmlFor={name} className="block mb-0.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="placeholder:text-gray-700 border border-gray-700 text-white outline-none bg-inherit w-full py-2 rounded-md px-1 focus:border-green-400"
      />
    </div>
  );
}
