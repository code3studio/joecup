import "./main.css";
import Tokenomics from "./components/Tokenomics";
import CA from "./components/CA";
export function Main() {

  return (
    <>
      <div style={{ position: "relative" }} className="main">
        {/* <img src={JoeLogo} className="logo react" width={"80%"}  alt="React logo" /> */}
        {/* <div style={{position:"absolute",top:300,right:"50%"}}> */}
        <div
          style={{ position: "absolute", bottom: "8vh", right: 0, left: 0, display:"flex",alignItems:"center",flexDirection:"column" }}
        >
          <h2 style={{ textAlign: "center" }}>What's meme token of the meme</h2>
          <h3 style={{ textAlign: "center" }}>
            conpe hours this funly these lemoun?
          </h3>
          <CA/>

          <Tokenomics/>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
