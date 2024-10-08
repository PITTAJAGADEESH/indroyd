import { QRCodeCanvas } from "qrcode.react";
import React from "react";
import "./index.css";

const GameHome = () => {
  const localIp = "192.168.198.183";
  const port = "3000";

  return (
    <div className="qr-code">
      <QRCodeCanvas value={`http://${localIp}:${port}/join`} size={200} />
      <p>Scan to join the game!</p>
    </div>
  );
};

export default GameHome;
