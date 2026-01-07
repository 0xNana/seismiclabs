#!/usr/bin/env node

/**
 * Logo Size Generator Script
 * Generates all logo sizes specified in logoguide.md
 * 
 * Requirements:
 * npm install sharp --save-dev
 * 
 * Usage:
 * npm run generate-logos
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Logo size specifications from logoguide.md
const logoSpecs = [
  // Documents & Print - Square
  { name: "Letter-A4-Documents", width: 300, height: 300, category: "documents-print", dpi: 300 },
  { name: "Business-Cards", width: 500, height: 500, category: "documents-print", dpi: 300 },
  { name: "Brochures-Flyers", width: 800, height: 800, category: "documents-print", dpi: 300 },
  { name: "Banners-Posters", width: 2000, height: 2000, category: "documents-print", dpi: 300 },
  
  // Documents & Print - Rectangular
  { name: "Letterhead-Horizontal", width: 600, height: 200, category: "documents-print", dpi: 300 },
  { name: "Business-Card-Horizontal", width: 800, height: 400, category: "documents-print", dpi: 300 },
  { name: "Banner-Horizontal", width: 2400, height: 800, category: "documents-print", dpi: 300 },
  { name: "Poster-Vertical", width: 800, height: 2000, category: "documents-print", dpi: 300 },
  
  // Social Media - Square
  { name: "Facebook-Profile", width: 180, height: 180, category: "social-media" },
  { name: "Instagram-Profile", width: 320, height: 320, category: "social-media" },
  { name: "Instagram-Post", width: 1080, height: 1080, category: "social-media" },
  { name: "Twitter-Profile", width: 400, height: 400, category: "social-media" },
  { name: "LinkedIn-Profile", width: 400, height: 400, category: "social-media" },
  
  // Social Media - Rectangular
  { name: "Facebook-Cover", width: 820, height: 312, category: "social-media" },
  { name: "Twitter-Header", width: 1500, height: 500, category: "social-media" },
  { name: "LinkedIn-Cover", width: 1128, height: 191, category: "social-media" },
  { name: "Instagram-Story", width: 1080, height: 1920, category: "social-media" },
  { name: "YouTube-Thumbnail", width: 1280, height: 720, category: "social-media" },
  { name: "YouTube-Channel-Art", width: 2560, height: 1440, category: "social-media" },
  
  // Website & Digital - Square
  { name: "Website-Header", width: 200, height: 200, category: "website-digital" },
  { name: "Website-Favicon", width: 32, height: 32, category: "website-digital" },
  { name: "Email-Signature", width: 150, height: 150, category: "website-digital" },
  { name: "WhatsApp-Business", width: 500, height: 500, category: "website-digital" },
  { name: "Google-My-Business", width: 720, height: 720, category: "website-digital" },
  
  // Website & Digital - Rectangular
  { name: "Website-Header-Horizontal", width: 400, height: 100, category: "website-digital" },
  { name: "Website-Banner", width: 1920, height: 400, category: "website-digital" },
  { name: "Email-Header", width: 600, height: 200, category: "website-digital" },
  { name: "Newsletter-Header", width: 600, height: 150, category: "website-digital" },
  { name: "App-Store-Feature", width: 2048, height: 2732, category: "website-digital" },
];

const inputLogo = path.join(__dirname, '../public/seismic-icon.svg');
const outputDir = path.join(__dirname, '../public/logos');

// Create output directories
function createDirectories() {
  const categories = ['documents-print', 'social-media', 'website-digital'];
  categories.forEach(category => {
    const dir = path.join(outputDir, category);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
}

// Generate logo sizes
async function generateLogos() {
  if (!fs.existsSync(inputLogo)) {
    console.error(`Error: Logo file not found at ${inputLogo}`);
    process.exit(1);
  }

  createDirectories();

  console.log(`\nGenerating ${logoSpecs.length} logo variants...\n`);

  for (const spec of logoSpecs) {
    const outputPath = path.join(outputDir, spec.category, `${spec.name}.png`);
    const outputPathWebp = path.join(outputDir, spec.category, `${spec.name}.webp`);
    
    try {
      // Generate PNG
      await sharp(inputLogo)
        .resize(spec.width, spec.height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
        })
        .png({ 
          quality: 100,
          ...(spec.dpi ? { density: spec.dpi } : {})
        })
        .toFile(outputPath);

      // Generate WebP (for web use)
      await sharp(inputLogo)
        .resize(spec.width, spec.height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .webp({ quality: 90 })
        .toFile(outputPathWebp);

      console.log(`✓ Generated: ${spec.name} (${spec.width}x${spec.height}px)`);
    } catch (error) {
      console.error(`✗ Error generating ${spec.name}:`, error.message);
    }
  }

  console.log(`\n✅ Logo generation complete!`);
  console.log(`📁 Output directory: ${outputDir}\n`);
  
  // Generate manifest file
  generateManifest();
}

// Generate a manifest JSON file with all logo information
function generateManifest() {
  const manifest = {
    generated: new Date().toISOString(),
    source: 'seismic-icon.svg',
    logos: logoSpecs.map(spec => ({
      name: spec.name,
      width: spec.width,
      height: spec.height,
      category: spec.category,
      formats: ['png', 'webp'],
      paths: {
        png: `logos/${spec.category}/${spec.name}.png`,
        webp: `logos/${spec.category}/${spec.name}.webp`
      },
      ...(spec.dpi && { dpi: spec.dpi })
    }))
  };

  const manifestPath = path.join(outputDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`📄 Generated manifest: ${manifestPath}`);
}

// Run the script
generateLogos().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
