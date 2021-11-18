import React from "react";

function intro({url}) {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }}>
      <video
      style={{
          objectFit: "contain"
      }}
        width="69%"
        height="500"
        controls
        src={url}
        controlsList="nodownload"
      ></video>
    </div>
  );
}

export default intro;
