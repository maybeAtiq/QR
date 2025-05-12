import { NextResponse } from "next/server";
import QRCode from "qrcode-svg";
import sharp from "sharp";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const qr = new QRCode({
      content: url,
      padding: 2,
      width: 1080,
      height: 1080,
      color: "#000000",
      background: "#ffffff",
      ecl: "M",
      join: true,
    });
    const svg = qr.svg();
    console.log(svg);
    // Convert SVG to PNG using sharp
    const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

    return new Response(pngBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    // Log the error for debugging
    console.error("QR API error:", error);
    return NextResponse.json({ error: "Failed to generate QR code" }, { status: 500 });
  }
}
