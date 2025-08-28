import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import InputLabel from "../components/ui/Input_label";
import { useNotify } from "../Notification/Notification";
import { Navigate } from "../Router/Link";
import { useDebounce } from "../useDebounce";

export const Home = () => {
  const { Toaster } = useNotify();
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [balance, setBalance] = useState(0);
  const filterValue = useDebounce(filter, 200);
  console.log(filterValue);

  async function getUsers() {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER}/user/bulk?filter=${filterValue}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [filterValue]);

  useEffect(() => {
    window.document.title = "Dashboard Wallet";
    const token = localStorage.getItem("token");
    if (!token) {
      Navigate("/signup");
    }
    fetch(`${import.meta.env.VITE_SERVER}/account/balance`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setBalance(data.balance)).catch;
  }, []);

  return (
    <div className="px-4 w-full m-auto md:w-1/2">
      {Toaster}
      <Balance value={balance} />
      <div className="my-2">
        <InputLabel
          type="text"
          label="Friends"
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {users?.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export const Balance = ({ value }) => {
  return (
    <div className="flex justify-between  items-center mt-6 mb-3 bg-green-100 py-2 px-3 rounded-md  border-2 border-green-700">
      <div className="">Your balance</div>
      <div className=" ml-4">Rs {value}</div>
    </div>
  );
};

function User({ user }) {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button onclick={() => Navigate("/transfer/"+user._id)}>
          Send Money
        </Button>
      </div>
    </div>
  );
}
