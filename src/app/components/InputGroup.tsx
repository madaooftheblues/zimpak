const InputGroup = ({
  type,
  label,
  placeholder,
  required,
  id,
}: {
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  id: string;
}) => {
  return (
    <div>
      <label htmlFor={id} className="block">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        name={id}
        id={id}
        className="p-2 w-full"
      />
    </div>
  );
};

export default InputGroup;
