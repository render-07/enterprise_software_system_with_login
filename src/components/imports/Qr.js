import React from 'react';
import QRCode from 'qrcode.react';
import { useParams } from 'react-router-dom'

const styles = {
    h1: {
      textAlign: 'center',
    },
    h6: {
        color: 'red',
        cursor:'pointer',
        width: 110,
        textAlign: 'center',
        display: 'block',
        margin: 'auto'
      },
    qrcode: {
      textAlign: 'center',
      padding: '10px'
    },
};

const downloadQRCode = (value) => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${value}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

const Qr = () => {

    const { value } = useParams();
    console.log(value);

    return (
        <div style={styles.root}>
          <h1 style={styles.h1}>Item name: "{value}" QR code</h1>
          <div style={styles.qrcode}>
            <QRCode
                id = "qr"
                value={value}
            />
          </div>
          <h6 onClick={() => downloadQRCode(value)}
            style={styles.h6}>Download QR</h6>
        </div>
      ); 
}

export default Qr
