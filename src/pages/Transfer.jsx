import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import InputLabel from "../components/ui/Input_label";
import { useNotify } from "../Notification/Notification";

const Transfer = () => {
  const [amount, setAmount] = useState(1);
  const [User, setUser] = useState();
  const recipientId = location.pathname.split("/")[2];
  const {toast, Toaster} = useNotify()
  async function Handler() {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER}/account/transfer/${recipientId}`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
          }),
        }
      );
      const data = await res.json();

      if ("message" in data){
          toast.success("Payment Success")
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/user/${recipientId}`)
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, []);

  return (
    <div className="flex  h-screen bg-neutral-100 flex-col justify-center items-center">
      {Toaster}
      <div className=" p-5 bg-white text-black rounded-xl">
        {/* Name */}
        <h1 className=" tracking-tight font-bold text-2xl px-2 text-center">
          {User?.firstName}
        </h1>
        <p className=" tracking-tight  text-sm  text-center">
          {User?.username}
        </p>
        <InputLabel
          onChange={(e) => setAmount(Number(e.target.value))}
          on
          label="Amount"
          type="number"
          placeholder="Enter Amount"
        />
        <Button onclick={() => Handler()} style="w-full">
          Transfer Money
        </Button>
      </div>
    </div>
  );
};

export default Transfer;
