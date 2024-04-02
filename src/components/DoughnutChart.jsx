import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Button, Divider, Typography } from "@mui/material";

const DoughnutChart = ({ data: initialData, labels: initialLabels }) => {
  const [data, setData] = useState(initialData);
  const [labels, setLabels] = useState(initialLabels);
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new Chart(chartContainer.current, {
        type: "doughnut",

        data: {
          labels: labels,

          datasets: [
            {
              label: "Data",
              data: data,
              backgroundColor: ["#1b9a59", "#2ab42a", "#9fff9d", "#03c3ff"],
              borderColor: ["#1b9a59", "#2ab42a", "#9fff9d", "#03c3ff"],
              borderWidth: 1,
              borderJoinStyle: "round",
              borderAlign: "inner",
              borderDashOffset: 10,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels]);

  useEffect(() => {
    setData(initialData);
    setLabels(initialLabels);
  }, [initialData, initialLabels]);

  return (
    <div className="flex flex-col items-center text-center bg-[#1a1e1c]">
      <div className="p-4 rounded-lg shadow-lg ">
        <Typography className="mb-2" color="white">
          Wallet Balance
        </Typography>
        <Divider className="bg-gray-500" />
        <div className="w-full h-full p-1">
          <canvas ref={chartContainer} width="200" height="100" />
        </div>

        <ul className="list-disc text-left mb-1">
          {labels.map((label, index) => (
            <li key={index} className="flex items-center">
              <span
                className="h-2 w-2 rounded-full mr-2"
                style={{
                  backgroundColor:
                    chartInstance.current?.data?.datasets[0]?.backgroundColor[
                      index
                    ],
                }}
              ></span>
              <span className="mr-2 flex-1 text-white">{label}</span>
              <span className="text-white">{data[index]}</span>
            </li>
          ))}
        </ul>
        <Divider className="bg-gray-500" />
        <Button size="small" variant="contained" className="mt-2">
          Manage Wallet
        </Button>
      </div>
    </div>
  );
};

export default DoughnutChart;
