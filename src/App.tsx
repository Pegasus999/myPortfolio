import HomePage from "./components/Home/Home";
import { NavBar } from "./components/NavigationBar/NavBar";
import Services from "./components/Services/Services";
function App() {
  return (
    <div className="flex flex-col bg-[--white] h-screen ">
      <NavBar></NavBar>
      <HomePage />
      <Services />
    </div>
  );
}

export default App;
