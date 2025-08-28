import { memo } from "react";

const InputLabel = memo(({type,onChange, placeholder,label, style}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block  mb-2 text-sm font-medium text-gray-900"
      >
        Your {label}
      </label>
      <input
        type={type}
        id={label}
        className={`shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${style}`}
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
});


export default InputLabel;