import { useEffect, useState } from "react";

export const useDebounce = (data, delay) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    let timeout;
    timeout = setTimeout(() =>{ setValue(data)}, delay);

    return () => clearTimeout(timeout);
  }, [data]);
  return value;
};
