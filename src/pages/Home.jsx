import React, { useEffect, useState } from "react";
import LineChart from "../components/LineChart";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import DoughnutChart from "../components/DoughnutChart";
import SocialCard from "../components/SocialCard";
import AssestCard from "../components/AssestCard";

function Home() {
  const [assetData, setAssetData] = useState(null);

  useEffect(() => {
    // Fetch data from the CoinDesk API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        if (response.ok) {
          const data = await response.json();
          setAssetData(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container maxWidth="lg">
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: "black",
        }}
      >
        <div className="flex flex-col md:flex-row md:justify-center md:items-center">
          <div className=" flex-col md:flex-1 mb-4">
            <Typography variant="h2" color="white">
              Hello,
              <span className="bg-gradient-to-r from-green-500 to-yellow-500 text-green-500 inline-block text-transparent bg-clip-text">
                {" "}
                Brooklyn Simmons{" "}
              </span>{" "}
              <span class="text-4xl mr-2">&#x1F44B;</span>
            </Typography>
            <Typography variant="h5" color="white">
              Welcome to <span className="text-[#2ab42a]">Spot Trading!</span>
            </Typography>
          </div>
          <Button size="medium" variant="contained">
            Start Trading
          </Button>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={6}>
            <Card>
              <LineChart
                data={([10, 20, 30, 40, 50], [30, 70, 10, 40, 10])}
                labels={["January", "February", "March", "April", "May"]}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={3}>
            <DoughnutChart
              data={[10, 20, 30, 5]}
              labels={["USDT", "NBST", "EFT", "WET"]}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={3}>
            <Card>
              <div className="flex flex-col items-center text-center  bg-[#1a1e1c] ">
                <div className="p-4 rounded-lg shadow-lg min-h-[415.6px] bg-[#1a1e1c]">
                  <Typography className="mb-2 text-white">
                    In recent posts
                  </Typography>
                  <Divider variant="middle" className="bg-gray-500" />
                  <div className="w-full h-full flex justify-center my-[14px] ">
                    <SocialCard />
                  </div>
                  <Divider variant="middle" className="bg-gray-500" />
                  <div className="flex justify-center items-center mt-2">
                    <Button size="small" variant="contained">
                      Follow us on X
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h5" color="white" className="my-2">
          Assests
        </Typography>
        <div className=" grid  md:grid-cols-5 ">
          {assetData &&
            Object.entries(assetData.bpi).map(([symbol, asset]) => (
              <AssestCard
                key={symbol}
                description={asset.description}
                rate={asset.rate_float}
                symbol={symbol}
              />
            ))}
        </div>
      </Paper>
    </Container>
  );
}

export default Home;
