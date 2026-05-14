import React, { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import LanguageIcon from "@mui/icons-material/Language";

import logo from "../assets/images/logo.png";

import MagneticButton from "./MagneticButton";

const drawerWidth = 240;

const navItems = [
  ["nav_skills", "skills"],
  ["nav_experience", "experience"],
  ["nav_projects", "projects"],
  ["nav_contact", "contact"],
];

const translations: any = {
  en: {
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_contact: "Contact",
  },

  hi: {
    nav_skills: "स्किल्स",
    nav_experience: "अनुभव",
    nav_projects: "प्रोजेक्ट्स",
    nav_contact: "संपर्क",
  },
};

function Navigation() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );

  const currentText = translations[language];

  const handleLanguageChange = (event: any) => {

    const lang = event.target.value;

    setLanguage(lang);

    localStorage.setItem("lang", lang);
  };

  const handleDrawerToggle = () => {

    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {

      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollToSection = (section: string) => {

    const element = document.getElementById(section);

    if (element) {

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const drawer = (

    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: "#050816",
        height: "100%",
        color: "white",
      }}
    >

      <p
        style={{
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          fontWeight: 600,
        }}
      >
        <ListIcon />
        Menu
      </p>

      <Divider sx={{ background: "rgba(255,255,255,0.1)" }} />

      <List>

        {navItems.map((item) => (

          <ListItem key={item[0]} disablePadding>

            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item[1])}
            >

              <ListItemText
                primary={currentText[item[0]]}
              />

            </ListItemButton>

          </ListItem>

        ))}

      </List>

    </Box>
  );

  return (

    <Box sx={{ display: "flex" }}>

      <CssBaseline />

      <AppBar
        component="nav"
        elevation={0}
        sx={{

          background: "transparent",

          boxShadow: "none",

          paddingTop: "15px",

          transition: "0.4s ease",
        }}
      >

        <Toolbar
          sx={{

            width: "92%",

            margin: "auto",

            borderRadius: "22px",

            padding: "14px 28px",

            background: scrolled
              ? "rgba(10, 15, 35, 0.72)"
              : "rgba(10, 15, 35, 0.45)",

            backdropFilter: "blur(20px)",

            border: scrolled
              ? "1px solid rgba(168, 85, 247, 0.25)"
              : "1px solid rgba(255,255,255,0.06)",

            boxShadow: scrolled
              ? "0 0 35px rgba(168,85,247,0.15)"
              : "none",

            display: "flex",

            justifyContent: "space-between",

            transition: "0.4s ease",
          }}
        >

          {/* LEFT */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >

            <Box
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "14px",

                overflow: "hidden",

                background:
                  "linear-gradient(135deg, rgba(123,47,247,.25), rgba(159,68,255,.12))",

                border:
                  "1px solid rgba(168,85,247,.25)",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                boxShadow:
                  "0 0 25px rgba(168,85,247,.25)",
              }}
            >

              <img
                src={logo}
                alt="logo"
                style={{
                  width: "34px",
                  height: "34px",
                  objectFit: "contain",
                }}
              />

            </Box>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >

              <h2
                style={{
                  color: "white",
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                }}
              >
                Zyvex
              </h2>

            </Box>

          </Box>

          {/* RIGHT */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >

            {/* DESKTOP NAV */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },

                alignItems: "center",

                gap: "12px",
              }}
            >

              {navItems.map((item, index) => (

                index === navItems.length - 1 ? (

                  <MagneticButton key={item[0]}>

                    <Button
                      onClick={() => scrollToSection(item[1])}
                      sx={{

                        color: "white",

                        fontSize: "15px",

                        fontWeight: 600,

                        textTransform: "none",

                        padding: "12px 24px",

                        borderRadius: "14px",

                        background:
                          "linear-gradient(135deg, #7b2ff7, #9f44ff)",

                        boxShadow:
                          "0 0 25px rgba(168,85,247,.45)",

                        transition: "0.35s ease",

                        "&:hover": {

                          transform: "translateY(-2px)",

                          background:
                            "linear-gradient(135deg, #9f44ff, #7b2ff7)",

                          boxShadow:
                            "0 0 35px rgba(168,85,247,.7)",
                        },
                      }}
                    >

                      {currentText[item[0]]}

                    </Button>

                  </MagneticButton>

                ) : (

                  <Button
                    key={item[0]}
                    onClick={() => scrollToSection(item[1])}
                    sx={{

                      color: "white",

                      fontSize: "15px",

                      fontWeight: 500,

                      textTransform: "none",

                      padding: "10px 16px",

                      borderRadius: "10px",

                      transition: "0.3s ease",

                      "&:hover": {

                        background:
                          "rgba(255,255,255,0.05)",

                        color: "#c084fc",
                      },
                    }}
                  >

                    {currentText[item[0]]}

                  </Button>

                )

              ))}

            </Box>

            {/* LANGUAGE */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",

                background:
                  "rgba(255,255,255,0.05)",

                padding: "6px 10px",

                borderRadius: "12px",

                border:
                  "1px solid rgba(255,255,255,0.06)",
              }}
            >

              <LanguageIcon
                sx={{
                  color: "#c084fc",
                  fontSize: "20px",
                }}
              />

              <Select
                value={language}
                onChange={handleLanguageChange}
                variant="standard"
                disableUnderline
                sx={{

                  color: "white",

                  fontSize: "14px",

                  ".MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >

                <MenuItem value="en">
                  English
                </MenuItem>

                <MenuItem value="hi">
                  हिन्दी
                </MenuItem>

              </Select>

            </Box>

            {/* MOBILE MENU */}

            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: {
                  sm: "none",
                },

                color: "white",
              }}
            >
              <MenuIcon />
            </IconButton>

          </Box>

        </Toolbar>

      </AppBar>

      {/* MOBILE DRAWER */}

      <nav>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{

            display: {
              xs: "block",
              sm: "none",
            },

            "& .MuiDrawer-paper": {

              boxSizing: "border-box",

              width: drawerWidth,

              background: "#050816",

              color: "white",
            },
          }}
        >

          {drawer}

        </Drawer>

      </nav>

    </Box>
  );
}

export default Navigation;