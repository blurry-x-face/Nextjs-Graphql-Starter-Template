import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "./NextLinkBtn";
import classes from "./index.module.css";
import LogoutButton from "./LogoutButton";

export default function ButtonAppBar({ children, isAuth }) {
  return (
    <div className={classes.navwrapper}>
      <AppBar style={{ background: "#1e5378" }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menubutton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sample App
          </Typography>
          {isAuth ? (
            <LogoutButton name="Logout" />
          ) : (
            <>
              <Button
                className={classes.buttonstyles}
                href={"/register"}
                hrefAs={"/register"}
                color="inherit"
                // variant="contained"
              >
                Register
              </Button>
              <Button
                className={classes.buttonstyles}
                href={"/login"}
                hrefAs={"/login"}
                color="inherit"
                // variant="contained"
              >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
}
