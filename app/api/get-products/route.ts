import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const productsDir = path.join(process.cwd(), "public", "products");
  let filenames: string[] = [];

  try {
    if (fs.existsSync(productsDir)) {
      filenames = fs.readdirSync(productsDir).filter(file => 
        file.match(/\.(png|jpe?g|svg|webp)$/i)
      );
    }
  } catch (error) {
    console.error("Error reading products directory");
  }
  return NextResponse.json(filenames);
}