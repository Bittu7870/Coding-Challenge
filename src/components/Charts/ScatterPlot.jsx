import Plot from "react-plotly.js";

const ScatterPlot = () => {
  const trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: "markers",
    type: "scatter",
    name: "Trace 1",
  };

  const trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: "lines",
    type: "scatter",
    name: "Trace 2",
  };

  const trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: "lines+markers",
    type: "scatter",
    name: "Trace 3",
  };

  const data = [trace1, trace2, trace3];

  return (
    <div className="flex justify-center">
      <Plot
        data={data}
        layout={{ width: 1000, height: 600, title: "Scatter Plot" }}
      />
    </div>
  );
};

export default ScatterPlot;
