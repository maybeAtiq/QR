"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [qrSrc, setQrSrc] = useState("");

  const generateQR = () => {
    if (!url.trim()) return;
    setQrSrc(`/api/qrcode?url=${encodeURIComponent(url)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <div className="flex flex-col items-center">
        <img src="/logo.png" alt="QR Generator Logo" width={150} height={150} />
        <h1 className="text-4xl font-audiowide">QR Code Generator</h1>
      </div>

      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="mt-6 p-3 text-black w-full max-w-md text-center rounded-lg bg-white border border-black"
      />

      <button
        onClick={generateQR}
        className="mt-4 px-6 py-2 bg-black text-white font-audiowide rounded-lg cursor-pointer hover:py-4"
      >
        Generate QR Code
      </button>

      {qrSrc && (
        <div className="mt-6 p-4 bg-black rounded-lg text-center">
          <img src={qrSrc} alt="QR Code" className="w-48 h-48" />
          <a href={qrSrc} download="qrcode.png" className="block mt-4 text-black cursor-pointer bg-white rounded-lg font-audiowide">
            Download QR Code
          </a>
        </div>
      )}
    </div>
  );
}
