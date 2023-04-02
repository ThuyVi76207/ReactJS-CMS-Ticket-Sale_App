import { Doughnut } from "react-chartjs-2";
import "./DoughnutChartStyles.scss";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import { useState } from "react";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
const DoughnutChart = (props: { datachart: number[] }) => {
  const { datachart } = props;
  const [data, setData] = useState({
    data: {
      datasets: [
        {
          label: "",
          data: datachart,
          backgroundColor: ["rgba(255, 138, 72, 1)", "rgba(79, 117, 255, 1)"],
          hoverBorderColor: "blue",
          hoverOffset: 4,
        },
      ],
    },
    options: { responsive: true },
    plugins: {
      // Hide legend
      legend: {
        display: false,
      },
    },
  });
  return (
    <div className="doughnut-chart">
      <Doughnut data={data.data} options={data.options} />
    </div>
  );
};
export default DoughnutChart;
