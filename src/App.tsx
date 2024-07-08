import React from 'react';
import './App.css';
import BarChart from "./BarChart";
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Tooltip,
    Title, LineElement, LineController, PointElement,
} from 'chart.js';
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function App() {
    ChartJS.register(
        ArcElement,
        Tooltip,
        Legend,
        Title,
        CategoryScale,

        // for Line Chart
        LineController,
        LineElement,
        PointElement,
        LinearScale,

        // for Bar Chart
        BarElement,
    );

  return (
      <div>
          <h2>Bar Chart Example</h2>
          <div style={{height: '400px'}}>
              <BarChart/>
          </div>

          <h2>Line Chart Example</h2>
          <div style={{height: '400px'}}>
              <LineChart/>
          </div>

          <h2>Pie Chart Example</h2>
          <div style={{height: '400px'}}>
              <PieChart/>
          </div>
      </div>
  );
}

export default App;
