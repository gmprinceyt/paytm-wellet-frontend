import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Route from "./Router/Route";
import Header from "./components/sections/Header";
import { Home } from "./pages/Home";
import Transfer from "./pages/Transfer";
import Authoticated from "./components/sections/Protected";

function App() {
  return (
    <>
      <Header />
      <Route path={"/signup"} Element={<Signup />} />
      <Route path={"/signin"} Element={<Signin />} />
      <Route
        path={"/"}
        Element={
          <Authoticated>
            <Home />
          </Authoticated>
        }
      />
      <Route
        path={"/transfer/"}
        Element={
          <Authoticated>
            <Transfer />
          </Authoticated>
        }
      />
    </>
  );
}

export default App;
