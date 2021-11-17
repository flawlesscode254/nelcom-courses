import React from "react";

function intro() {
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
        src="https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/Why%20I%20Recommend%20the%20GPL%20License.mp4?alt=media&token=689cabed-0641-46f2-8b85-c16eb957c545"
      ></video>
    </div>
  );
}

export default intro;
