import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RepeatIcon from "@mui/icons-material/Repeat";
import Avatar from "@mui/material/Avatar";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReadMoreReact from "read-more-react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const SocialCard = () => {
  return (
    <Card className="max-w-md bg-black rounded-sm">
      <CardContent className="  mb-0 pb-0">
        <div className="flex justify-center items-center text-left gap-2">
          <Avatar fontSize="small" src="avatar_image_source" alt="Carbon" />{" "}
          {/* Add avatar image source here */}
          <Typography variant="subtitle1" color="white" className="text-nowrap">
            Carbon Cell <span className=" text-gray-500">@carboncell. </span>
            <span className="ml-3 text-gray-500">2h</span>
          </Typography>
        </div>
      </CardContent>

      <CardContent className=" pl-6 ml-10 mt-0 pt-0 text-left">
        <Typography variant="caption" color="white">
          Carbon Cell: Pioneering Financial Solutions for a Greener Future
        </Typography>
        <br />
        <Typography variant="caption" color="white">
          In a world where decarbonization is paramount, Carbon Cell is leading
          the charge to redefine #CarbonMarkets. Follow this thread to learn
          how...
        </Typography>
        <ReadMoreReact readMoreText="Show more" text={``} />
      </CardContent>
      <CardContent className="flex items-center  ml-7 m-0 p-0 text-left">
        <IconButton>
          <ChatBubbleOutlineIcon fontSize="small" className="text-gray-500" />
        </IconButton>
        <Typography className="text-gray-500">19</Typography>
        <IconButton>
          <RepeatIcon fontSize="small" className="text-gray-500" />
        </IconButton>
        <Typography className="text-gray-500">19</Typography>
        <IconButton>
          <FavoriteBorderIcon fontSize="small" className="text-gray-500" />
        </IconButton>
        <Typography className="text-gray-500">19</Typography>
        <IconButton>
          <FileUploadOutlinedIcon fontSize="small" className="text-gray-500" />
        </IconButton>
        <Typography className="text-gray-500">19</Typography>
      </CardContent>
    </Card>
  );
};

export default SocialCard;
