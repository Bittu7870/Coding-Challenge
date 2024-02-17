import Plot from "react-plotly.js";

const LineGraph = () => {
  const data = [
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: "scatter",
      mode: "lines",
      name: "Line 1",
    },
    {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: "scatter",
      mode: "lines",
      name: "Line 2",
    },
    {
      x: [1, 2, 3, 4],
      y: [12, 9, 15, 12],
      type: "scatter",
      mode: "lines",
      name: "Line 3",
    },
  ];

  return (
    <div className="flex justify-center">
      <Plot
        data={data}
        layout={{ width: 1000, height: 600, title: "Line Graph" }}
      />
    </div>
  );
};

export default LineGraph;
