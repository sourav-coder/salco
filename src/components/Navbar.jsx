import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import {
  Toolbar,
  AppBar,
  Button,
  Drawer,
  List,
  ListItem,
  IconButton,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  function Responsive() {
    return (
      // setOpen  = true since this will trigger the Drawer
      <IconButton edge="start" color="inherit" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
    );
  }

  function Desktop() {
    return (
      <div className="links">
        <div className="innerLinks">
          <Link to="#about" target="_parent">About</Link>
          <Link to="#teams" target="_parent">Teams</Link>
          <Link to="#Business"target="_parent" >Businesses</Link>
          <Link to="#Indivisual" target="_parent">Indivisuals</Link>
          <Link to="#Investors" target="_parent">Investors</Link>
        </div>
        <Link to="#intern" target="_parent">
          <Button
            color="primary"
            className="button animate__animated animate__pulse animate__infinite"
          >
            Intern With Us
          </Button>
        </Link>
      </div>
    );
  }

  function changeDevice() {
    console.log(window.innerWidth);
    if (window.innerWidth > 800) {
      return <Desktop />;
    } else return <Responsive />;
  }

  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className="responsiveUl"
      >
        <List>
          <ListItem Link>
          <Link to="#about" target="_parent">About</Link>
          </ListItem>

          <ListItem Link>
          <Link to="#teams" target="_parent">Teams</Link>
          </ListItem>

          <ListItem Link>
          <Link to="#Business"target="_parent" >Businesses</Link>
          </ListItem>
          <ListItem Link>
          <Link to="#Indivisual" target="_parent">Indivisuals</Link>
          </ListItem>
          <ListItem Link>
          <Link to="#Investors" target="_parent">Investors</Link>
          </ListItem>

          <ListItem Button>
            <Link>
              <Button
                color="primary"
                className="button animate__animated animate__pulse animate__infinite"
              >
                Intern With Us
              </Button>
            </Link>

          </ListItem>
        </List>
      </Drawer>

      <AppBar color="transparent" className="appbar">
        <Toolbar className="toolbar">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>

          {changeDevice()}
        </Toolbar>
      </AppBar>
    </>
  );
}
