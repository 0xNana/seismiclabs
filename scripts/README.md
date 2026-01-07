# Logo Generation Script

This script automatically generates all logo sizes specified in `logoguide.md`.

## Setup

1. Install the required dependency:
```bash
npm install sharp --save-dev
```

## Usage

Run the script to generate all logo variants:

```bash
npm run generate-logos
```

## Output

The script will generate:

- **PNG files** for all specified sizes (with transparent backgrounds)
- **WebP files** for web optimization
- **Organized folders** by category:
  - `public/logos/documents-print/` - Print materials
  - `public/logos/social-media/` - Social media profiles and covers
  - `public/logos/website-digital/` - Website and digital assets
- **manifest.json** - A JSON file listing all generated logos with metadata

## Generated Sizes

### Documents & Print (300 DPI) - Square
- Letter/A4 Documents: 300x300px
- Business Cards: 500x500px
- Brochures/Flyers: 800x800px
- Banners/Posters: 2000x2000px

### Documents & Print (300 DPI) - Rectangular
- Letterhead Horizontal: 600x200px
- Business Card Horizontal: 800x400px
- Banner Horizontal: 2400x800px
- Poster Vertical: 800x2000px

### Social Media - Square
- Facebook Profile: 180x180px
- Instagram Profile: 320x320px
- Instagram Post: 1080x1080px
- Twitter/X Profile: 400x400px
- LinkedIn Profile: 400x400px

### Social Media - Rectangular
- Facebook Cover: 820x312px
- Twitter/X Header: 1500x500px
- LinkedIn Cover: 1128x191px
- Instagram Story: 1080x1920px (vertical)
- YouTube Thumbnail: 1280x720px
- YouTube Channel Art: 2560x1440px

### Website & Digital - Square
- Website Header: 200x200px
- Website Favicon: 32x32px
- Email Signature: 150x150px
- WhatsApp Business: 500x500px
- Google My Business: 720x720px

### Website & Digital - Rectangular
- Website Header Horizontal: 400x100px
- Website Banner: 1920x400px
- Email Header: 600x200px
- Newsletter Header: 600x150px
- App Store Feature: 2048x2732px (vertical)

## Notes

- All logos maintain transparent backgrounds
- Print materials are generated at 300 DPI
- The script preserves the original aspect ratio
- Both PNG and WebP formats are generated for flexibility

