import "./App.css";
import BarGraph from "./components/Charts/BarGraph";
import LineGraph from "./components/Charts/LineGraph";
import PieChart from "./components/Charts/PieChart";
import ScatterPlot from "./components/Charts/ScatterPlot";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <ScatterPlot />
      <PieChart />
      <BarGraph />
      <LineGraph />
    </div>
  );
};

export default App;
