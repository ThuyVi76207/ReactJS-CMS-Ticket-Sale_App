import { Line } from "react-chartjs-2";
import "./LineChartStyles.scss";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  ScriptableContext,
} from "chart.js";
import { useState } from "react";

ChartJS.register(
  Title,
  Tooltip,
  ArcElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
const LineChart = () => {
  // const handleGradient = () => {
  //   var ctx = document.getElementById("canvas") as HTMLCanvasElement;

  //   var gradient = ctx.getContext("2d")?.createLinearGradient(0, 0, 0, 400);
  //   gradient?.addColorStop(0, "rgba(229, 239, 255, 1)");
  //   gradient?.addColorStop(1, "#FFFFFF");
  //   return gradient;
  // };

  // const handleLineChart = () => {};
  function getDir(radian: any, width: any, height: any) {
    radian += Math.PI;
    const HALF_WIDTH = width * 0.5;
    const HALF_HEIGHT = height * 0.5;
    const lineLength =
      Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
    const HALF_LINE_LENGTH = lineLength / 2;

    const x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;
    const y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;
    const x1 = width - x0;
    const y1 = height - y0;

    return { x0, x1, y0, y1 };
  }

  const [data, setData] = useState({
    data: {
      labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
      datasets: [
        {
          // label: "First Dataset",
          data: [150, 148, 180, 245, 190, 220, 230],
          //{ x: 24 * 0, y: 140 }
          // { x: 24 * 1, y: 178 },
          // { x: 24 * 2, y: 175 },
          // { x: 24 * 3, y: 189 },
          // { x: 24 * 4, y: 220 },
          // { x: 24 * 5, y: 260 },
          // { x: 24 * 6, y: 250 },
          backgroundColor: (context: ScriptableContext<"line">) => {
            var canvas = document.getElementById(
              "myCanvas"
            ) as HTMLCanvasElement;

            var w = canvas.width;
            var h = canvas.height;
            var cssAng = Math.PI;
            var dir = getDir(cssAng, w, h);

            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(
              dir.x0,
              dir.y0,
              dir.x1,
              dir.y1
            );
            gradient.addColorStop(0, "rgba(250, 160, 95, 0.26)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            return gradient;
          },
          borderColor: "rgba(255, 138, 72, 1)",
          color: "Grey",
          tension: 0.4,
          fill: true,

          // borderJoinStyle: "bevel",
          // showLine: false, //To hide line
          // pointBackgroundColor: "#fff",
          // pointBorderColor: "blue",
          // pointStyle: "rect",
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,

      scales: {
        y: {
          ticks: {
            callback: function (value: any) {
              return value + "tr";
            },
            // forces step size to be 50 units
            stepSize: 40,
            font: {
              size: 10,
            },
          },
          min: 140,
          max: 260,
        },
        x: {
          ticks: {
            font: {
              size: 10,
            },
          },
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        // Hide legend
        legend: {
          display: false,
        },
        filler: {
          propagate: false,
        },
      },
      interaction: {
        intersect: true,
      },
    },
  });

  return (
    <div className="line-chart-home">
      <Line id="myCanvas" data={data.data} options={data.options}></Line>
    </div>
  );
};

export default LineChart;
