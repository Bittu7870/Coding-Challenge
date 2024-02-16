import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Hero />
    </div>
  );
};

export default App;
