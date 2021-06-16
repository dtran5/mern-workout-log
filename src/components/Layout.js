import React, { useState, useEffect } from "react";
// dependencies
import decode from "jwt-decode";
import { format } from "date-fns";
import clsx from "clsx";
// react router
import { useHistory, useLocation } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { LOGOUT } from "../redux/users/usersTypes";
// styles
import {
  makeStyles,
  useTheme,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar,
  Divider,
} from "@material-ui/core";
import SubjectOutlinedIcon from "@material-ui/icons/SubjectOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const drawerWidth = 210;

const useStyles = makeStyles((theme) => {
  return {
    components: {
      backgroundColor: "#f9f9f9",
      width: "100%",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerList: {
      position: "relative",
      height: "100%",
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    spacing: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
    logout: {
      position: "absolute",
      bottom: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  };
});

const drawerItems = [
  {
    text: "Post Your Workout",
    icon: <AddCircleOutlineOutlinedIcon color="secondary" />,
    path: "/createworkout",
  },
  {
    text: "Explore",
    icon: <ExploreOutlinedIcon color="secondary" />,
    path: "/",
  },
  {
    text: "My Shared Workouts",
    icon: <SubjectOutlinedIcon color="secondary" />,
    path: "/",
  },
];

function Layout({ children }) {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  // retrieving our user from local storage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    if (open === true) {
      setOpen(false);
    } else {
      return;
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    history.push("/signup");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, user?.token]);

  return (
    <div className={classes.root}>
      {/* App bar */}
      <AppBar
        position="fixed"
        color="primary"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.spacing}>
            {format(new Date(), "EEEE MMMM do, Y")}
          </Typography>
          <Typography>Dan</Typography>
          <Avatar className={classes.avatar} src="/sprinter.jpg" />
        </Toolbar>
      </AppBar>

      {/* Drawer */}

      <Drawer
        classes={{ paper: classes.drawerPaper }}
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.drawerList}>
          <div>
            {drawerItems.map((item) => (
              <ListItem
                className={`
                   ${location.pathname === item.path ? classes.active : null}`}
                onClick={() => history.push(item.path)}
                button
                key={item.text}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </div>
          <div className={classes.logout}>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </div>
        </List>
      </Drawer>

      <div
        onClick={toggleDrawer}
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div
          className={clsx(
            classes.content,
            classes.components,
            classes.drawerHeader,
            {
              [classes.contentShift]: open,
            }
          )}
        ></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
