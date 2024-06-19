import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import aiLogo from "./assets/ai-images/ai-logo.png";
import dashboard from "./assets/ai-images/dashboard.png";
import applications from "./assets/ai-images/applications.png";
import assets from "./assets/ai-images/assets.png";
import settings from "./assets/ai-images/settings.png";
import menu from "./assets/ai-images/menu.png";
import { relative } from "path";
interface Styles {
  appFlex: React.CSSProperties;
  sideBar: React.CSSProperties;
  imgStack: React.CSSProperties;
  menuPosition: React.CSSProperties;
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
    padding: 0,
    width: "15%",
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
    justifyContent: "space-between",
    gap: "1px",
    height: "400px",
  },
  menuPosition: {
    position: "relative",
    backgroundColor: "white",
    padding: "7px",
    border: "2px solid rgb(0, 106, 255)",
    borderRadius: "10px",
    width: "15px",
    left: 72,
    top: 55,
  },
};

const App: React.FC<Iprops> = () => {
  const imgData = [
    {
      img: aiLogo,
      caption: "",
    },
    {
      img: dashboard,
      caption: "dashboard",
    },
    {
      img: applications,
      caption: "applications",
    },
    {
      img: assets,
      caption: "assets",
    },
  ];
  return (
    <div className="App" style={styles.appFlex}>
      <Box component="section" style={styles.sideBar}>
        <div style={styles.imgStack}>
          <img src={menu} alt="menu" style={styles.menuPosition} title="menu" />
          {imgData.map((item, index) => (
            <div key={index}>
              <img
                src={item.img}
                alt={item.caption}
                style={{ width: "fit-content" }}
                title={item.caption}
              />
              <p>{item.caption.toUpperCase()}</p>
            </div>
          ))}
        </div>
        <div>
          <img
            src={settings}
            alt="settings"
            style={{ width: "fit-content" }}
            title="settings"
          />
          <p>{"settings".toUpperCase()}</p>
        </div>
      </Box>
      <Box component="section" sx={{ p: 2, width: "90%" }}></Box>
    </div>
  );
};

export default App;
