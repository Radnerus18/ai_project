import React from "react";
import searchBg from "../assets/ai-images/header-img.png";
import { url } from "inspector";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import TelegramIcon from "@mui/icons-material/Telegram";
interface SearchProps {}

const SearchArea: React.FC<SearchProps> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${searchBg})`,
        height: "237px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <img
        src={searchBg}
        alt=""
        style={{
          width: "100%",
          minHeight: "200px",
        }}
      /> */}
      <Grid
        sx={{
          position: "absolute",
          left: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: "white", ml: 3.2 }}>
          How can i help you today?
        </Typography>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "50vw",
            border: "1px solid rgb(0, 0, 151)",
            borderRadius: "50px",
            backgroundColor: "black",
          }}
        >
          <InputBase
            sx={{
              ml: 3,
              flex: 1,
              color: "rgb(255, 255, 255)",
              fontWeight: 500,
              fontFamily: "sans-serif",
              letterSpacing: 1,
            }}
            placeholder="Enter your Prompt here"
            inputProps={{ "aria-label": "Enter your Prompt here" }}
          />
          <IconButton
            type="button"
            sx={{ p: "10px", color: "rgb(167, 167, 167)" }}
            aria-label="Voice"
          >
            <KeyboardVoiceIcon />
          </IconButton>
          <Divider
            sx={{ height: 28, m: 0.5, borderColor: "rgb(167, 167, 167)" }}
            orientation="vertical"
          />
          <IconButton
            color="primary"
            sx={{ p: "10px", color: "rgb(167, 167, 167)" }}
            aria-label="send"
          >
            <TelegramIcon />
          </IconButton>
        </Paper>
      </Grid>
    </Box>
  );
};
export default SearchArea;
