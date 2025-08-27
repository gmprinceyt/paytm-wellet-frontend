import { useEffect, useState } from "react";

const Route = ({ path, Element }) => {
  const [currentPath, setCurrentPath] = useState(location.pathname);
  useEffect(() => {
    function navigate() {
      setCurrentPath(location.pathname);
    }
    window.addEventListener("popstate", navigate);
    window.addEventListener("navigate", navigate);
    return () => {
      window.removeEventListener("popstate", navigate);
      window.removeEventListener("navigate", navigate);
    };
  }, []);
  return currentPath === path ? Element : null;
};

export default Route;
