import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import {
  Button,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

const LineChart = ({ data, labels }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);
  const [alignment, setAlignment] = React.useState("NBST");
  const [chartData, setChartData] = React.useState(data); // Store chart data locally

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  console.log(chartData, "chartData");

  useEffect(() => {
    // Function to fetch data from the API based on the selected alignment
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://datausa.io/api/data?drilldowns=Nation&measures=Population`
        ); // Replace with your API endpoint
        const newData = await response.json();
        setChartData(newData); // Update chart data with new data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call fetchData function when alignment changes
  }, [alignment]); // Trigger the effect when alignment changes

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      chartInstance.current = new Chart(chartContainer.current, {
        type: "line",
        data: {
          labels: chartData?.data?.map((item) => item.Year),
          datasets: [
            {
              label: "Data",
              data: chartData?.data?.map((item) => item.Population), // Use chartData instead of data
              fill: false,
              borderColor: "#2ab42a",
              tension: 0.1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false, // Hide x-axis grid lines
              },
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
  }, [chartData, labels]); // Trigger the effect when chartData or labels change

  return (
    <div className="min-h-[415.6px] bg-[#1a1e1c]">
      <div className="flex justify-center items-center px-3 py-1 ">
        <Typography className="flex-1 text-white">Market Overview</Typography>
        <ToggleButtonGroup
          color="primary"
          size="small"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          className="shadow-none"
        >
          <ToggleButton
            className={
              alignment === "NBST"
                ? "text-white shadow-none border-none"
                : "text-gray-500 shadow-none border-none"
            }
            value="NBST"
          >
            NBST
          </ToggleButton>
          <ToggleButton
            className={
              alignment === "EFT"
                ? "text-white shadow-none border-none"
                : "text-gray-500 shadow-none border-none"
            }
            value="EFT"
          >
            EFT
          </ToggleButton>
          <ToggleButton
            className={
              alignment === "WPCT"
                ? "text-white shadow-none border-none"
                : "text-gray-500 shadow-none border-none"
            }
            value="WPCT"
          >
            WPCT
          </ToggleButton>
          <ToggleButton
            className={
              alignment === "RET"
                ? "text-white shadow-none border-none"
                : "text-gray-500 shadow-none border-none"
            }
            value="RET"
          >
            RET
          </ToggleButton>
          <ToggleButton
            className={
              alignment === "WET"
                ? "text-white shadow-none border-none"
                : "text-gray-500 shadow-none border-none"
            }
            value="WET"
          >
            WET
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Divider variant="middle" className="bg-gray-500 mb-3 " />
      <canvas ref={chartContainer} />
      <Divider variant="middle" className="bg-gray-500 " />
      <div className="flex justify-center items-center px-3 py-2 mt-2">
        <Typography className="flex-1 text-white">
          Get in depth charts in Trade
        </Typography>
        <Button variant="contained" size="small">
          Trade
        </Button>
      </div>
    </div>
  );
};

export default LineChart;
