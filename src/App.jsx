import Home from "./pages/Home.";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Link from "./Router/Link";
import Route from "./Router/Route";

function App() {
  return (
    <>
     <Header/>
      <Route path={"/signup"} Element={<Signup />} />
      <Route path={"/signin"} Element={<Signin />} />
      <Route path={"/"} Element={<Home />} />
    </>
  );
}

export default App;


function Header(){
  return <div className="dark:bg-black h-12 flex items-center dark:text-white w-full px-7">
    <Link to={"/signup"} className="text-red-500">
      Signup
    </Link>
  </div>
}