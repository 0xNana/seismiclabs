#!/usr/bin/env node

/**
 * Brand Assets Generator
 * Generates all production-ready logo sizes for web, social, and presentations
 * 
 * Requirements:
 * npm install sharp --save-dev
 * 
 * Usage:
 * npm run generate-brand-assets
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import sharp from 'sharp';

// Optional archiver import (will be loaded dynamically if needed)
async function loadArchiver() {
  try {
    const archiverModule = await import('archiver');
    return archiverModule.default || archiverModule;
  } catch (e) {
    return null;
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  inputDir: path.join(__dirname, '../public'),
  outputDir: path.join(__dirname, '../exports'),
  backgrounds: {
    transparent: null,
    dark: '#0B1220',
    light: '#FFFFFF'
  },
  logoPadding: 0.10, // 10% padding for app icons
  bannerLogoHeight: 0.65 // Logo occupies 65% of banner height
};

// Input file detection
function findMasterLogo() {
  const svgPath = path.join(config.inputDir, 'logo-master.svg');
  const pngPath = path.join(config.inputDir, 'logo-master-4096.png');
  const fallbackPath = path.join(config.inputDir, 'seismic-icon.svg');
  
  if (fs.existsSync(svgPath)) return svgPath;
  if (fs.existsSync(pngPath)) return pngPath;
  if (fs.existsSync(fallbackPath)) return fallbackPath;
  
  throw new Error('Master logo file not found. Expected: logo-master.svg, logo-master-4096.png, or seismic-icon.svg');
}

// Square logo sizes
const squareSizes = [1024, 512, 256, 128, 64, 32];

// Banner sizes with names
const bannerSizes = [
  { width: 2560, height: 1440, name: 'hero-retina' },
  { width: 1920, height: 1080, name: 'hero-standard' },
  { width: 1500, height: 500, name: 'x-twitter' },
  { width: 1584, height: 396, name: 'linkedin-personal' },
  { width: 1128, height: 191, name: 'linkedin-company' },
  { width: 1280, height: 640, name: 'github-social' }
];

// App icon sizes
const appIconSizes = [1024, 512, 192, 180, 152, 120];

// Create directory structure
function createDirectories() {
  const dirs = [
    path.join(config.outputDir, 'square'),
    path.join(config.outputDir, 'banner'),
    path.join(config.outputDir, 'social'),
    path.join(config.outputDir, 'app')
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
}

// Generate square logos
async function generateSquareLogos(masterLogo) {
  console.log('\n📐 Generating square logos...\n');
  
  for (const size of squareSizes) {
    const outputPath = path.join(config.outputDir, 'square', `logo-${size}.png`);
    
    try {
      await sharp(masterLogo)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png({ 
          quality: 100,
          compressionLevel: 9
        })
        .toFile(outputPath);
      
      console.log(`✓ logo-${size}.png`);
    } catch (error) {
      console.error(`✗ Error generating logo-${size}.png:`, error.message);
    }
  }
}

// Generate banner logos with gradient backgrounds
async function generateBanners(masterLogo) {
  console.log('\n🖼️  Generating banners...\n');
  
  for (const banner of bannerSizes) {
    const logoHeight = Math.floor(banner.height * config.bannerLogoHeight);
    const logoWidth = logoHeight; // Maintain square aspect
    
    // Create gradient background (dark, subtle)
    const gradient = sharp({
      create: {
        width: banner.width,
        height: banner.height,
        channels: 4,
        background: { r: 11, g: 18, b: 32, alpha: 1 } // #0B1220
      }
    });
    
    // Resize logo
    const logo = await sharp(masterLogo)
      .resize(logoWidth, logoHeight, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    // Calculate position to center logo
    const x = Math.floor((banner.width - logoWidth) / 2);
    const y = Math.floor((banner.height - logoHeight) / 2);
    
    // Composite logo onto gradient background
    const outputPath = path.join(config.outputDir, 'banner', `banner-${banner.width}x${banner.height}.png`);
    
    try {
      await gradient
        .composite([{
          input: logo,
          left: x,
          top: y
        }])
        .png({ quality: 100 })
        .toFile(outputPath);
      
      console.log(`✓ banner-${banner.width}x${banner.height}.png (${banner.name})`);
    } catch (error) {
      console.error(`✗ Error generating banner-${banner.width}x${banner.height}.png:`, error.message);
    }
  }
}

// Generate social media assets
async function generateSocialAssets(masterLogo) {
  console.log('\n📱 Generating social media assets...\n');
  
  const socialSizes = [
    { name: 'facebook-profile', width: 180, height: 180 },
    { name: 'facebook-cover', width: 820, height: 312 },
    { name: 'instagram-profile', width: 320, height: 320 },
    { name: 'instagram-post', width: 1080, height: 1080 },
    { name: 'instagram-story', width: 1080, height: 1920 },
    { name: 'twitter-profile', width: 400, height: 400 },
    { name: 'twitter-header', width: 1500, height: 500 },
    { name: 'linkedin-profile', width: 400, height: 400 },
    { name: 'linkedin-cover', width: 1128, height: 191 },
    { name: 'youtube-thumbnail', width: 1280, height: 720 },
    { name: 'youtube-channel-art', width: 2560, height: 1440 }
  ];
  
  for (const social of socialSizes) {
    // Generate transparent version
    const transparentPath = path.join(config.outputDir, 'social', `${social.name}-transparent.png`);
    try {
      await sharp(masterLogo)
        .resize(social.width, social.height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png({ quality: 100 })
        .toFile(transparentPath);
      
      console.log(`✓ ${social.name}-transparent.png`);
    } catch (error) {
      console.error(`✗ Error generating ${social.name}:`, error.message);
    }
    
    // Generate dark background version
    const darkPath = path.join(config.outputDir, 'social', `${social.name}-dark.png`);
    try {
      const logo = await sharp(masterLogo)
        .resize(social.width, social.height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toBuffer();
      
      await sharp({
        create: {
          width: social.width,
          height: social.height,
          channels: 4,
          background: { r: 11, g: 18, b: 32, alpha: 1 }
        }
      })
        .composite([{ input: logo, left: 0, top: 0 }])
        .png({ quality: 100 })
        .toFile(darkPath);
      
      console.log(`✓ ${social.name}-dark.png`);
    } catch (error) {
      console.error(`✗ Error generating ${social.name}-dark:`, error.message);
    }
    
    // Generate light background version
    const lightPath = path.join(config.outputDir, 'social', `${social.name}-light.png`);
    try {
      const logo = await sharp(masterLogo)
        .resize(social.width, social.height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toBuffer();
      
      await sharp({
        create: {
          width: social.width,
          height: social.height,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        }
      })
        .composite([{ input: logo, left: 0, top: 0 }])
        .png({ quality: 100 })
        .toFile(lightPath);
      
      console.log(`✓ ${social.name}-light.png`);
    } catch (error) {
      console.error(`✗ Error generating ${social.name}-light:`, error.message);
    }
  }
}

// Generate app icons with padding
async function generateAppIcons(masterLogo) {
  console.log('\n📲 Generating app icons...\n');
  
  for (const size of appIconSizes) {
    // Calculate logo size with 10% padding
    const logoSize = Math.floor(size * (1 - config.logoPadding * 2));
    const padding = Math.floor(size * config.logoPadding);
    
    const outputPath = path.join(config.outputDir, 'app', `app-icon-${size}.png`);
    
    try {
      // Resize logo
      const logo = await sharp(masterLogo)
        .resize(logoSize, logoSize, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toBuffer();
      
      // Create canvas with padding
      await sharp({
        create: {
          width: size,
          height: size,
          channels: 4,
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        }
      })
        .composite([{
          input: logo,
          left: padding,
          top: padding
        }])
        .png({ quality: 100 })
        .toFile(outputPath);
      
      console.log(`✓ app-icon-${size}.png`);
    } catch (error) {
      console.error(`✗ Error generating app-icon-${size}.png:`, error.message);
    }
  }
}

// Generate WebP versions
async function generateWebPVersions() {
  console.log('\n🌐 Generating WebP versions...\n');
  
  const folders = ['square', 'banner', 'social', 'app'];
  
  for (const folder of folders) {
    const folderPath = path.join(config.outputDir, folder);
    if (!fs.existsSync(folderPath)) continue;
    
    const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.png'));
    
    for (const file of files) {
      const inputPath = path.join(folderPath, file);
      const outputPath = path.join(folderPath, file.replace('.png', '.webp'));
      
      try {
        await sharp(inputPath)
          .webp({ quality: 90 })
          .toFile(outputPath);
        
        console.log(`✓ ${file.replace('.png', '.webp')}`);
      } catch (error) {
        console.error(`✗ Error generating WebP for ${file}:`, error.message);
      }
    }
  }
}

// Generate README
function generateREADME() {
  const readmePath = path.join(config.outputDir, 'README.md');
  const readmeContent = `# Brand Assets

This directory contains all production-ready logo assets generated from the master logo file.

## Directory Structure

### \`/square\`
Square logo variants in standard sizes (32px to 1024px). Use for:
- Favicons
- App icons (with additional padding)
- General web use
- Presentations

**Files:**
- \`logo-1024.png\` - High resolution
- \`logo-512.png\` - Standard high res
- \`logo-256.png\` - Medium resolution
- \`logo-128.png\` - Small resolution
- \`logo-64.png\` - Very small
- \`logo-32.png\` - Favicon size

### \`/banner\`
Banner images with logo centered on dark gradient background. Logo occupies 65% of banner height.

**Files:**
- \`banner-2560x1440.png\` - Hero retina (16:9)
- \`banner-1920x1080.png\` - Hero standard (16:9)
- \`banner-1500x500.png\` - X/Twitter header (3:1)
- \`banner-1584x396.png\` - LinkedIn personal header (4:1)
- \`banner-1128x191.png\` - LinkedIn company header (5.9:1)
- \`banner-1280x640.png\` - GitHub social preview (2:1)

### \`/social\`
Social media assets with three background variants:
- **Transparent** (\`-transparent.png\`) - For use on any background
- **Dark** (\`-dark.png\`) - On dark backgrounds (#0B1220)
- **Light** (\`-light.png\`) - On light backgrounds (#FFFFFF)

**Platforms:**
- Facebook (profile, cover)
- Instagram (profile, post, story)
- Twitter/X (profile, header)
- LinkedIn (profile, cover)
- YouTube (thumbnail, channel art)

### \`/app\`
App icons with 10% padding to prevent clipping on iOS/Android.

**Files:**
- \`app-icon-1024.png\` - App Store (iOS)
- \`app-icon-512.png\` - App Store (iOS)
- \`app-icon-192.png\` - Android
- \`app-icon-180.png\` - iOS
- \`app-icon-152.png\` - Windows
- \`app-icon-120.png\` - iOS

## File Formats

All assets are available in:
- **PNG-24** - Full quality, transparent backgrounds where applicable
- **WebP** - Optimized for web (90% quality)

## Technical Specifications

- **Resampling**: Lanczos (high-quality)
- **Transparency**: Preserved where applicable
- **Padding**: 10% for app icons
- **Banner Logo Size**: 65% of banner height
- **Background Colors**:
  - Dark: #0B1220
  - Light: #FFFFFF
  - Transparent: Full alpha channel

## Usage Guidelines

1. **Square logos**: Use for general branding, favicons, and presentations
2. **Banners**: Use for hero sections, social media headers, and marketing materials
3. **Social assets**: Choose background variant based on platform requirements
4. **App icons**: Use for PWA and mobile app development

## Generation

Assets are generated using \`npm run generate-brand-assets\` from the master logo file.

**Last generated:** ${new Date().toISOString()}
`;

  fs.writeFileSync(readmePath, readmeContent);
  console.log(`\n📄 Generated README.md`);
}

// Create ZIP archive
async function createZipArchive() {
  const archiverLib = await loadArchiver();
  if (!archiverLib) {
    throw new Error('archiver not installed');
  }
  
  return new Promise((resolve, reject) => {
    const output = createWriteStream(path.join(config.outputDir, 'brand-assets.zip'));
    const archive = archiverLib('zip', { zlib: { level: 9 } });
    
    output.on('close', () => {
      console.log(`\n📦 Created brand-assets.zip (${archive.pointer()} bytes)`);
      resolve();
    });
    
    archive.on('error', reject);
    archive.pipe(output);
    
    // Add all files except the zip itself and README
    const files = fs.readdirSync(config.outputDir, { withFileTypes: true });
    files.forEach(file => {
      const filePath = path.join(config.outputDir, file.name);
      if (file.isDirectory()) {
        archive.directory(filePath, file.name);
      } else if (!file.name.endsWith('.zip') && file.name !== 'README.md') {
        archive.file(filePath, { name: file.name });
      }
    });
    
    archive.finalize();
  });
}

// Main execution
async function generateBrandAssets() {
  console.log('🎨 Brand Assets Generator\n');
  console.log('=' .repeat(50));
  
  try {
    const masterLogo = findMasterLogo();
    console.log(`\n📁 Master logo: ${masterLogo}\n`);
    
    createDirectories();
    
    // Generate all assets
    await generateSquareLogos(masterLogo);
    await generateBanners(masterLogo);
    await generateSocialAssets(masterLogo);
    await generateAppIcons(masterLogo);
    await generateWebPVersions();
    generateREADME();
    
    // Create ZIP archive
    try {
      await createZipArchive();
    } catch (error) {
      console.warn('\n⚠️  Could not create ZIP archive (archiver may not be installed)');
      console.warn('   Install with: npm install archiver --save-dev');
    }
    
    console.log('\n' + '='.repeat(50));
    console.log('✅ Brand assets generation complete!');
    console.log(`📁 Output directory: ${config.outputDir}\n`);
    
  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the script
generateBrandAssets();

