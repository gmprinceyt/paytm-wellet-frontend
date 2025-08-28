import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Route from "./Router/Route";
import Header from "./components/sections/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Route path={"/signup"} Element={<Signup />} />
      <Route path={"/signin"} Element={<Signin />} />
      <Route path={"/"} Element={<Home />} />
    </>
  );
}

export default App;
