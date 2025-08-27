import { memo } from "react";

const InputLabel = memo(({type,onChange, placeholder,label, style}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your {label}
      </label>
      <input
        type={type}
        id={label}
        className={`shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light ${style}`}
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
});


export default InputLabel;