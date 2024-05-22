import React from "react";

type Props = {};

const Tokenomics = (props: Props) => {
  return (
    <div style={{ display: "flex", columnGap: 6, marginTop: 20 }}>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          display: "flex",
          backgroundColor: "blue",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>LP burn</h4>
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          display: "flex",
          backgroundColor: "green",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>LP burn</h4>
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          display: "flex",
          backgroundColor: "yellow",
          color: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>LP burn</h4>
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          display: "flex",
          backgroundColor: "red",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>LP burn</h4>
      </div>
    </div>
  );
};

export default Tokenomics;
