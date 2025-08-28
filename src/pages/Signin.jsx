import { useEffect, useState } from "react";
import InputLabel from "../components/ui/Input_label";
import Link from "../Router/Link";
import { Loader } from "lucide-react";
import Button from "../components/ui/Button";
import { Navigate } from "../Router/Link";
import { useNotify } from "../Notification/Notification";

const Signin = () => {
  const [username, setUsername] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast, Toaster } = useNotify();

  async function Handler(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/user/signin `, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await res.json();
      console.log(data)
      toast.info(data.message);
      if ("token" in data) {
        localStorage.setItem("token", data.token);
        Navigate("/");
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    window.document.title = "Login in wallet";
  }, []);
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center m-auto">
      {Toaster}
      <h1 className="mb-4 px-8  text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Login In Wallet{" "}
      </h1>
      <form onSubmit={Handler} className="w-full px-8 lg:w-1/3">
        <InputLabel
          type={"email"}
          label={"Email"}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={"Enter Email"}
        />
        <InputLabel
          type={"password"}
          label={"Password"}
          onChange={(e) => setpassword(e.target.value)}
          placeholder={"Enter Password"}
        />
        <div className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          i Don't Have Account in Wallet{" "}
          <Link
            to={"/signup"}
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            SignUp here
          </Link>
        </div>

        <Button type="submit" style={"mt-2"}>
          {loading ? <Loader className="animate-spin" /> : "Login Now"}
        </Button>
      </form>
    </div>
  );
};

export default Signin;
