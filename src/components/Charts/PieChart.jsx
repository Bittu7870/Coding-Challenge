import Plot from "react-plotly.js";

const PieChart = () => {
  const data = [
    {
      values: [400, 300, 300, 200],
      labels: ["A", "B", "C", "D"],
      type: "pie",
    },
  ];

  return (
    <div className="flex justify-center">
      <Plot
        data={data}
        layout={{ width: 1000, height: 600, title: "Pie Chart" }}
      />
    </div>
  );
};

export default PieChart;
