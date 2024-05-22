import "./main.css";
import Tokenomics from "./components/Tokenomics";
import CA from "./components/CA";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import pump from "./assets/logopump.webp";
// import telegram from './assets/telgrum-1.png'
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";

export function Main() {
  return (
    <>
      {/* <header className="header">hello</header> */}
      <AppBar
        sx={{
          backgroundColor: "#FFCE58",
          boxShadow: "none",
          color: "black",
          px: 6,
          fontWeight:900,
          fontSize:"30px"
        }}
      >
        <Toolbar>
          CupOfJoe
          <Box flexGrow={1} />
          <IconButton sx={{ mr: 2 }}>
            <img src={pump} alt="pump.fun" />
          </IconButton>
          <IconButton sx={{ mr: 2 }}>
            <TelegramIcon />
          </IconButton>
          <IconButton sx={{ mr: 2 }}>
            <XIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ position: "relative" }} className="main">
        {/* <img src={JoeLogo} className="logo react" width={"80%"}  alt="React logo" /> */}
        {/* <div style={{position:"absolute",top:300,right:"50%"}}> */}
        <div
          style={{
            position: "absolute",
            bottom: "8vh",
            right: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2 style={{ textAlign: "center" }}>What's meme token of the meme</h2>
          <h3 style={{ textAlign: "center" }}>
            conpe hours this funly these lemoun?
          </h3>
          <CA />

          <Tokenomics />
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
