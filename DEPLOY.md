# Deployment Instructions

## Option 1: Vercel (Recommended)
1. Visit [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import the repository: `trade84-pro-v2`
4. Deploy automatically

## Option 2: Netlify
1. Visit [netlify.com](https://netlify.com)
2. Connect your GitHub account
3. Import the repository: `trade84-pro-v2`
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out` (if using static export) or `.next` (for SSR)

## Option 3: GitHub Pages (Static Export)
1. Update `next.config.mjs` to enable static export
2. Build with `npm run build && npm run export`
3. Deploy the `out` folder to GitHub Pages

## Repository
https://github.com/amazoncosp-ui/trade84-pro-v2

## Live Demo
The site is production-ready and can be deployed to any static hosting platform.

## Features
- ✅ Mobile-responsive design
- ✅ Framer Motion animations
- ✅ Payment method cards with logos
- ✅ Testimonials and FAQ sections
- ✅ Contact buttons linking to Telegram
- ✅ SEO optimized
- ✅ Fast loading performance