import Contact from "./components/Contact/Contact";
import HomePage from "./components/Home/Home";
import { NavBar } from "./components/NavigationBar/NavBar";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div className="flex flex-col bg-[--white] h-screen ">
      <NavBar></NavBar>
      <HomePage />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
