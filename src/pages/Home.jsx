import { useState } from "react";
import Button from "../components/ui/Button";
import InputLabel from "../components/ui/Input_label";

export const Home = () => {
  // Replace with backend call
  const [users, setUsers] = useState([
    {
      firstName: "Harkirat",
      lastName: "Singh",
      _id: 1,
    },
  ]);

  return (
    <div className="px-4">
      <Balance value={1234} />
      <div className="my-2">
        <InputLabel
          type="text"
          label="Friends"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {users.map((user) => (
          <User user={user} />
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
        <Button>Send Money</Button>
      </div>
    </div>
  );
}
