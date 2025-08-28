import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Route from "./Router/Route";
import Header from "./components/sections/Header";
import { Home } from "./pages/Home";
import Transfer from "./pages/Transfer";

function App() {
  return (
    <>
      <Header />
      <Route path={"/signup"} Element={<Signup />} />
      <Route path={"/signin"} Element={<Signin />} />
      <Route path={"/"} Element={<Home />} />
      <Route path={"/transfer/:id"} Element={<Transfer />} />
    </>
  );
}

export default App;
