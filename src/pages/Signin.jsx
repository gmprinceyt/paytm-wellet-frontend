import { useState } from "react";
import InputLabel from "../components/ui/Input_label";
import Link from "../Router/Link";
import { Loader } from "lucide-react";
import Button from "../components/ui/Button";

const Signin = () => {
  const [username, setUsername] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setLoading] = useState(false);

  function Handler() {
    console.log("he;l0");
  }
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center m-auto">
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
          className={"bg-rose-400"}
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
          {loading ? (
            <Loader className="animate-spin" />
          ) : (
            "Login Now"
          )}
        </Button>
      </form>
    </div>
  );
};

export default Signin;
