import Plot from "react-plotly.js";

const BarGraph = () => {
  const data = [
    {
      x: ["A", "B", "C", "D"],
      y: [300, 200, 100, 400],
      type: "bar",
    },
  ];

  return (
    <div className="flex justify-center">
      <Plot
        data={data}
        layout={{ width: 1000, height: 600, title: "Bar Graph" }}
      />
    </div>
  );
};

export default BarGraph;
