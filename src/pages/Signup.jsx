import { useEffect, useState } from "react";
import InputLabel from "../components/ui/Input_label";
import Button from "../components/ui/Button";
import { Loader } from "lucide-react";
import Link, { Navigate } from "../Router/Link";

const Signup = () => {
  const [username, setUsername] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setLoading] = useState(false);

  async function Handler(e) {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          firstName,
          lastName,
          password,
        }),
      });

      const data = await res.json();

      if ("token" in data) {
        localStorage.setItem("token", data.token);
        Navigate("/");
      }
      alert(data.message);
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token){
      // Add Jwt Logic
      Navigate("/");
    }
    console.log(token)
    window.document.title = "Create Account On Wallet";
  }, []);
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center m-auto">
      <h1 class="mb-4 px-8  text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Create New Account In Wallet{" "}
      </h1>
      <form onSubmit={Handler} className="w-full px-8 lg:w-1/3">
        <InputLabel
          type={"text"}
          label={"Firstname"}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder={"Enter Firstname "}
        />
        <InputLabel
          type={"text"}
          label={"Lastname"}
          onChange={(e) => setLastName(e.target.value)}
          placeholder={"Enter Lastname "}
        />
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
          className={"bg-rose-400"}
        />
        <div className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          i Have Account in Wallet{" "}
          <Link
            to={"/signin"}
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Login here
          </Link>
        </div>

        <Button type="submit" style={"mt-2"}>
          {loading ? (
            <Loader className="animate-spin" />
          ) : (
            "Register new account"
          )}
        </Button>
      </form>
    </div>
  );
};

export default Signup;
