import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Button } from "@mui/material";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const AssestCard = (props) => {
  return (
    <Card className="max-w-56 bg-[#1a1e1c] m-1 ">
      <CardContent className="  mb-0 pb-0">
        <div className="flex items-center  text-left gap-2">
          <Avatar
            fontSize="small"
            src="https://i.pinimg.com/736x/b8/16/cc/b816cc92ebdaf47f4a0cea3af8563236.jpg"
            alt="Carbon"
          />{" "}
          {/* Add avatar image source here */}
          <Typography variant="subtitle1" color="white" className="text-nowrap">
            Bitcoin
          </Typography>
        </div>
      </CardContent>

      <CardContent className="text-left ">
        <Typography variant="caption" color="white">
          {props.description}
        </Typography>
      </CardContent>
      <CardContent className="flex items-center justify-between text-left py-0 my-0">
        <Typography variant="subtitle2" color="white">
          {Number(props.rate).toFixed(2)}
          {props.symbol}
        </Typography>
        <Typography variant="caption" color="white">
          {/* + {11.07}{" "} */}
          <IconButton>
            <TrendingUpRoundedIcon fontSize="small" className="text-white" />
          </IconButton>
        </Typography>
      </CardContent>

      <CardContent className="flex items-center justify-between  text-left">
        <IconButton>
          <InfoOutlinedIcon fontSize="medium" className="text-green-500" />
        </IconButton>
        <Button size="small" variant="contained">
          Trade
        </Button>
      </CardContent>
    </Card>
  );
};

export default AssestCard;
