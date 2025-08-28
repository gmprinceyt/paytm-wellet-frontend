import Link from "../../Router/Link";
import Button from "../ui/Button";

export default function Header() {
  const user = localStorage.getItem("token");
  return (
    <nav className="bg-white text-black border-gray-200 flex justify-between px-7 py-2">
      <Link to={"/"} className=" flex items-center">
        <h2 className="mb-4 px-8  text-center text-xl font-extrabold leading-none tracking-tight text-gray-900">
          Wallet
        </h2>
      </Link>
      <div className="">
        {user ? (
          <Link to={"/"}>
            <img
              className="w-8 h-8 rounded-full"
              src="https://projects.100xdevs.com/_next/image?url=https%3A%2F%2Fappx-wsb-gcp.akamai.net.in%2Fsubject%2F2023-01-17-0.17044360120951185.jpg&w=256&q=75"
              alt="user photo"
            />
          </Link>
        ) : (
          <Link to={"/signin"}>
            <Button>Signin</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
