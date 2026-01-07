# Brand Assets Generator

Automated script that generates all production-ready logo sizes from a master logo file.

## Setup

1. Install required dependencies:
```bash
npm install sharp --save-dev
```

2. (Optional) Install archiver for ZIP creation:
```bash
npm install archiver --save-dev
```

## Usage

```bash
npm run generate-brand-assets
```

## Input Requirements

Place your master logo file in the `public/` directory with one of these names:
- `logo-master.svg` (preferred)
- `logo-master-4096.png` (transparent, 4096x4096)
- `seismic-icon.svg` (fallback)

## Output Structure

```
/exports
  /square          - Square logos (32px to 1024px)
  /banner          - Banner images with centered logo
  /social          - Social media assets (transparent, dark, light)
  /app             - App icons with 10% padding
  README.md        - Documentation
  brand-assets.zip - (Optional) All assets zipped
```

## Generated Assets

### Square Logos (`/square`)
- `logo-1024.png` - High resolution
- `logo-512.png` - Standard high res
- `logo-256.png` - Medium resolution
- `logo-128.png` - Small resolution
- `logo-64.png` - Very small
- `logo-32.png` - Favicon size

All with transparent backgrounds, PNG-24 format.

### Banners (`/banner`)
- `banner-2560x1440.png` - Hero retina (16:9)
- `banner-1920x1080.png` - Hero standard (16:9)
- `banner-1500x500.png` - X/Twitter header (3:1)
- `banner-1584x396.png` - LinkedIn personal header (4:1)
- `banner-1128x191.png` - LinkedIn company header (5.9:1)
- `banner-1280x640.png` - GitHub social preview (2:1)

Logo occupies 65% of banner height, centered on dark gradient background (#0B1220).

### Social Media (`/social`)
Each platform has three variants:
- `-transparent.png` - Transparent background
- `-dark.png` - Dark background (#0B1220)
- `-light.png` - Light background (#FFFFFF)

**Platforms:**
- Facebook (profile, cover)
- Instagram (profile, post, story)
- Twitter/X (profile, header)
- LinkedIn (profile, cover)
- YouTube (thumbnail, channel art)

### App Icons (`/app`)
- `app-icon-1024.png` - App Store (iOS)
- `app-icon-512.png` - App Store (iOS)
- `app-icon-192.png` - Android
- `app-icon-180.png` - iOS
- `app-icon-152.png` - Windows
- `app-icon-120.png` - iOS

All icons have 10% padding to prevent clipping on iOS/Android.

## Technical Specifications

- **Resampling**: Lanczos (high-quality)
- **Transparency**: Preserved where applicable
- **Padding**: 10% for app icons
- **Banner Logo Size**: 65% of banner height
- **Background Colors**:
  - Dark: #0B1220
  - Light: #FFFFFF
  - Transparent: Full alpha channel
- **Formats**: PNG-24 and WebP (90% quality)

## File Formats

All assets are generated in:
- **PNG-24** - Full quality, transparent backgrounds
- **WebP** - Optimized for web (90% quality)

## Success Criteria

✅ Assets drop directly into production  
✅ No manual resizing needed  
✅ Predictable naming convention  
✅ Works for marketing, dev, and design  
✅ Deterministic output (same input → same output)

