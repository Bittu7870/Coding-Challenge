import BarGraph from "../../components/Charts/BarGraph";
import LineGraph from "../../components/Charts/LineGraph";
import PieChart from "../../components/Charts/PieChart";
import ScatterPlot from "../../components/Charts/ScatterPlot";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/NavBar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ScatterPlot />
      <PieChart />
      <BarGraph />
      <LineGraph />
    </>
  );
};

export default Home;
