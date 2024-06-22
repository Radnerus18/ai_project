import React, { useState } from "react";
import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import aiLogo from "./assets/ai-images/ai-logo.png";
import dashboard from "./assets/ai-images/dashboard.png";
import applications from "./assets/ai-images/applications.png";
import assets from "./assets/ai-images/assets.png";
import settings from "./assets/ai-images/settings.png";
import menu from "./assets/ai-images/menu.png";
import Login from "./components/login";
import SearchArea from "./components/searchArea";
interface Styles {
  appFlex: React.CSSProperties;
  sideBar: React.CSSProperties;
  imgStack: React.CSSProperties;
  menuPosition: React.CSSProperties;
  imgDefault: React.CSSProperties;
  imgClicked: React.CSSProperties;
}
interface Iprops {}
const styles: Styles = {
  appFlex: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  sideBar: {
    backgroundColor: "rgb(0, 106, 255)",
    padding: "20px 0px",
    width: "20%",
    maxWidth: "150px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    color: "white",
    fontSize: "0.8rem",
  },
  imgStack: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "420px",
  },
  menuPosition: {
    position: "relative",
    backgroundColor: "white",
    padding: "7px",
    border: "2px solid rgb(0, 106, 255)",
    borderRadius: "10px",
    width: "15px",
    left: 74,
    top: 60,
  },
  imgDefault: {
    width: "fit-content",
    padding: 10,
    marginBottom: 10,
  },
  imgClicked: {
    width: "fit-content",
    backgroundColor: "rgb(5, 53, 210)",
    padding: 10,
    marginBottom: 10,
  },
};
const imgData = [
  {
    img: aiLogo,
    caption: "",
    id: 0,
  },
  {
    img: dashboard,
    caption: "dashboard",
    id: 1,
  },
  {
    img: applications,
    caption: "applications",
    id: 2,
  },
  {
    img: assets,
    caption: "assets",
    id: 3,
  },
];
const App: React.FC<Iprops> = () => {
  const [click, setClick] = useState<boolean>(false);
  const [heading, setHeading] = useState<String>("Dashboard");
  const onhandleclick = (e: any) => {
    setClick(true);
    if (e.target.title !== "") {
      const newHeading =
        e.target.title[0].toUpperCase() + e.target.title.slice(1);
      setHeading(newHeading);
    }
  };
  return (
    <div className="App" style={styles.appFlex}>
      <Box component="section" style={styles.sideBar}>
        <div style={styles.imgStack}>
          <img src={menu} alt="menu" style={styles.menuPosition} title="menu" />
          {imgData.map((item, index) => (
            <Grid
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 3,
              }}
            >
              <img
                src={item.img}
                alt={item.caption}
                style={click ? styles.imgClicked : styles.imgDefault}
                title={item.caption}
                onClick={(e) => onhandleclick(e)}
              />
              <Typography
                variant="caption"
                gutterBottom
                sx={{ color: "white", fontWeight: 600 }}
              >
                {item.caption.toUpperCase()}
              </Typography>
            </Grid>
          ))}
        </div>
        <Grid>
          <img
            src={settings}
            alt="settings"
            style={click ? styles.imgClicked : styles.imgDefault}
            title="settings"
            onClick={(e) => onhandleclick(e)}
          />
          <p>{"settings".toUpperCase()}</p>
        </Grid>
      </Box>
      <Box
        component="section"
        sx={{ px: 4, width: "100%", maxHeight: 80, mt: 2.5 }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          maxHeight="100px"
        >
          <Grid>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "rgb(50, 50, 50)", fontWeight: 600 }}
            >
              {heading}
            </Typography>
          </Grid>
          <Grid sx={{ position: "absolute", right: 10 }}>
            <Login />
          </Grid>
        </Grid>
        <Grid sx={{ mt: 2 }}>
          <SearchArea />
        </Grid>
      </Box>
    </div>
  );
};

export default App;
