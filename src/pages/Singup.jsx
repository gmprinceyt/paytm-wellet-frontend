import { useState } from "react";
import Heading from "../components/ui/Heading";

const SingUp = () => {
  const [username, setUsername] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading,setLoading] = useState(false)

  async function Handler(e) {
    setLoading(true)
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
          password,
        }),
      });

      const data = await res.json();
      localStorage.setItem("token", data.token);
      console.log(data);
    } catch (error) {
      console.log(error);
    }finally{
        setLoading(false);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "gray",
      }}
    >
      <div className="">
        <Heading label={"Create new account"} />
        <form action="" onSubmit={Handler}>
          <input
            placeholder="Enter Email"
            type="email"
            required
            style={{ padding: "7px 18px " }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Enter Firsname"
            required
            type="text"
            style={{ padding: "7px 18px " }}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Enter lastName"
            type="text"
            style={{ padding: "7px 18px " }}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            placeholder="Enter Password"
            type="password"
            style={{ padding: "7px 18px " }}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type="submit">{ loading ? "loadding..." : "Create Account"}</button>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
