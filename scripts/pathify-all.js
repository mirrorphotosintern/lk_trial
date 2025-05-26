// Install dependencies first:
// npm i -D svgo

import { optimize } from "svgo";
import fs from "node:fs/promises";
import path from "node:path";
import { execSync } from "child_process";

const inDir = path.join(process.cwd(), "public", "letters");
const outDir = path.join(process.cwd(), "public", "letters_paths");

// Function to convert text to path using Inkscape
async function convertTextToPath(svgContent, filePath) {
  // Write the SVG to a temporary file
  const tempFile = path.join(process.cwd(), "temp.svg");
  await fs.writeFile(tempFile, svgContent);
  
  try {
    // Use Inkscape to convert text to path
    execSync(`inkscape --export-filename=${filePath} --export-text-to-path ${tempFile}`);
    return true;
  } catch (error) {
    console.error(`Error converting ${path.basename(filePath)}:`, error.message);
    return false;
  } finally {
    // Clean up temp file
    try {
      await fs.unlink(tempFile);
    } catch (e) {
      // Ignore cleanup errors
    }
  }
}

// Function to clean up the SVG content
function cleanupSvg(svgContent) {
  // Remove the white background rectangle
  svgContent = svgContent.replace(/<path fill="#FFF" d="M0 0h512v512H0z"\/>/, '');
  
  // Remove unnecessary attributes from the letter path
  svgContent = svgContent.replace(/ aria-label="[^"]*"/, '');
  svgContent = svgContent.replace(/ style="[^"]*"/, '');
  
  // Remove any empty lines
  svgContent = svgContent.replace(/^\s*[\r\n]/gm, '');
  
  return svgContent;
}

async function main() {
  try {
    // Check if Inkscape is installed
    try {
      execSync("inkscape --version");
    } catch (error) {
      console.error("Error: Inkscape is not installed. Please install it first:");
      console.error("  - macOS: brew install inkscape");
      console.error("  - Linux: sudo apt-get install inkscape");
      console.error("  - Windows: Download from https://inkscape.org/release");
      process.exit(1);
    }

    await fs.mkdir(outDir, { recursive: true });
    const files = await fs.readdir(inDir);
    
    for (const file of files) {
      if (!file.endsWith('.svg')) continue; // Skip non-SVG files
      
      const src = await fs.readFile(path.join(inDir, file), "utf8");
      const outFile = path.join(outDir, file);
      
      // First convert text to path using Inkscape
      const success = await convertTextToPath(src, outFile);
      if (!success) continue;
      
      // Read the converted file and clean it up
      let optimized = await fs.readFile(outFile, "utf8");
      optimized = cleanupSvg(optimized);
      
      // Then optimize the SVG
      const { data } = optimize(optimized, {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                convertShapeToPath: true,
                removeViewBox: false
              }
            }
          },
          {
            name: "removeAttrs",
            params: {
              attrs: ["fill", "aria-label", "style"]
            }
          }
        ]
      });
      
      await fs.writeFile(outFile, data);
      console.log("✓", file);
    }
    
    console.log("\nConversion complete! Files saved to:", outDir);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
