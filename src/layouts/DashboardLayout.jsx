import * as React from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import theme from "../utils/theme";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import Paper from "@mui/material/Paper";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";
import PollIcon from "@mui/icons-material/Poll";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Avatar, InputBase, useMediaQuery } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";

const NavMenu = [
  {
    key: "Home",
    icon: <GridViewIcon />,
    label: "Home",
    to: "home",
  },
  {
    key: "organization",
    icon: <CorporateFareIcon />,
    label: "Organization",
    to: "organization",
  },
  {
    key: "Assets",
    icon: <ViewInArIcon />,
    label: "Assets",
    to: "assets",
  },
  {
    key: "Trade",
    icon: <ImportExportIcon />,
    label: "Trade",
    to: "trade",
  },
  {
    key: "History",
    icon: <HourglassEmptyIcon />,
    label: "History",
    to: "history",
  },
];
const NavSettings = [
  {
    key: "Notifications",
    icon: <NotificationsIcon />,
    label: "Notifications",
    to: "notifications",
  },
  {
    key: "Support",
    icon: <HelpOutlineIcon />,
    label: "Support",
    to: "support",
  },
  {
    key: "Settings",
    icon: <SettingsIcon />,
    label: "Settings",
    to: "settings",
  },
];

const drawerWidth = 260;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: `${drawerWidth}px ! important`,
    // width: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
      width: `56px ! important`,
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#1a1e1c",
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
    }),
  },
}));

const CustomisedSearch = (props) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "auto",
        [theme.breakpoints.down("sm")]: {
          m: 1,
        },
        m: props.open ? 2 : 0,
        background: "#333333",
      }}
    >
      <IconButton
        type="button"
        sx={{
          p: "10px",
          color: "white",
          [theme.breakpoints.down("sm")]: {
            p: 0,
            fontSize: 1,
          },
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: "white" }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
};

export default function DashboardLayout() {
  const [open, setOpen] = React.useState(true);
  const isMdScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    setOpen(!isMdScreen); // Set initial open state based on screen size
  }, [isMdScreen]);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}></AppBar>
        <Drawer
          ModalProps={{ keepMounted: true }}
          variant="permanent"
          open={open}
        >
          <Toolbar className="flex mt-5 gap-14">
            {open && (
              <img
                className="w-auto h-auto"
                src="https://carboncell.io/assets/img/logo2.png"
              />
            )}
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={toggleDrawer}
            >
              <MenuIcon className="text-white" />
            </IconButton>
          </Toolbar>
          {/* <Divider /> */}
          <div className="flex-1 ">
            <CustomisedSearch open={open} />

            <List component="nav">
              {NavMenu.map((links) => (
                <NavLink
                  key={links.key}
                  to={`${links.to}`}
                  className={({ isActive }) =>
                    isActive
                      ? "flex h-12 w-full items-center gap-2 border-r-4 border-brand bg-transparent p-2 pl-5 font-semibold  text-[#29a929]"
                      : "flex h-12 w-full items-center gap-2 p-2 pl-5 font-semibold text-white transition-all ease-in-out hover:bg-[#29a929]"
                  }
                >
                  {links.icon}
                  {links.label}
                </NavLink>
              ))}
            </List>
          </div>
          <div className="">
            <List component="nav">
              {NavSettings.map((links) => (
                <NavLink
                  key={links.key}
                  to={`${links.to}`}
                  className={({ isActive }) =>
                    isActive
                      ? "flex h-12 w-full items-center gap-2 border-r-4 border-brand bg-transparent p-2 pl-5 font-semibold  text-[#29a929]"
                      : "flex h-12 w-full items-center gap-2 p-2 pl-5 font-semibold text-white transition-all ease-in-out hover:bg-[#29a929]"
                  }
                >
                  {links.icon}
                  {links.label}
                </NavLink>
              ))}
            </List>
            <button
              onClick={() => {
                // Cookies.remove("token");
                // navigate("/auth/login", { replace: true });
              }}
              className="flex h-12 w-full items-center rounded-none gap-2 p-2 pl-5 font-semibold text-[#938E8E] bg-white transition-all ease-in-out hover:bg-[#cbcaf6] active: border-0 focus:outline-none"
            >
              <LogoutIcon />
              Logout
            </button>
          </div>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.common.black,
            color: (theme) => theme.palette.common.white,
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
