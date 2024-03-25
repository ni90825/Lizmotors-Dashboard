import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 

 const BarChart = ({textdata,maindata}) => {
    Chart.register(CategoryScale);
    const labelsofbar = ["Positive","Negative","Comment"];
    const data = {
        labels: labelsofbar,
        datasets: [
        {
        label: "My First dataset",
        backgroundColor: "rgb(71, 172, 209)",
        borderColor: "rgb(71, 172, 209)",
        data:maindata,
        },
        ],
        };
  return (
    <div className="chart-container">
      <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: textdata
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};

export default BarChart;