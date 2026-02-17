# Nerdy's Hideout - Official Website

A modern, exclusive event platform for Nerdy's Hideout - featuring mixes, event waitlist, and community building.

## Features

- Modern, responsive design with dark theme aesthetic
- Homepage with hero section, about, featured mix showcase
- Mix archive with individual mix pages
- Waitlist application form with detailed fields
- Contact form for bookings and inquiries
- Optimized performance (90+ Lighthouse score)
- SEO-friendly with meta tags and structured data
- Mobile-first design
- Zero-cost hosting (Vercel free tier)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: Tally (free tier)
- **Hosting**: Vercel (free tier)
- **Version Control**: Git/GitHub

## Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account
- Tally account (free - sign up at tally.so)

## Local Development Setup

### 1. Install Dependencies

Since you're offline/restricted, you'll need to install dependencies when you have internet access:

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Formspree form IDs (see Formspree Setup section below).

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tally Setup

Tally handles form submissions for free with unlimited submissions.

### Why Tally?

- **Unlimited forms & submissions** (free tier)
- **Visual form builder** (no coding required)
- **Beautiful UI** (matches your brand)
- **Built-in analytics** (real-time dashboard)
- **Auto-responses** (free)
- **Better than Formspree** in every way

### Step 1: Create Tally Account

1. Go to [https://tally.so](https://tally.so)
2. Sign up for a free account (instant, no email verification)
3. You're ready to create forms

### Step 2: Create Forms

See `TALLY_SETUP_GUIDE.md` for complete step-by-step instructions on:
- Creating the Waitlist form with all required fields
- Creating the Contact form
- Customizing colors to match your brand
- Setting up thank you messages
- Configuring email notifications

### Step 3: Get Form IDs

1. In Tally, open your form
2. Click "Share" → "Embed on your site"
3. Copy the Form ID from the URL (looks like `xxxxxx`)
4. You need 2 Form IDs:
   - Waitlist Form ID
   - Contact Form ID

### Step 4: Update Code

Replace Form IDs in these files:

**File 1:** `components/WaitlistForm.tsx` (line 19)
```typescript
// Replace YOUR_TALLY_FORM_ID with your Waitlist Form ID
data-tally-src="https://tally.so/embed/YOUR_TALLY_FORM_ID?..."
```

**File 2:** `app/contact/page.tsx` (line 105)
```typescript
// Replace YOUR_TALLY_CONTACT_FORM_ID with your Contact Form ID
data-tally-src="https://tally.so/embed/YOUR_TALLY_CONTACT_FORM_ID?..."
```

That's it! No environment variables needed.

### Managing Submissions

**View Submissions:**
1. Log into Tally dashboard
2. Click on your form
3. See all submissions in real-time

**Export Data:**
- Click "Export" → Choose CSV or Excel
- All submission data included

**Auto-Responses:**
- Set up in form settings
- Send automatic emails to applicants
- Customize message with their name/email


## Deployment to Vercel (Free)

### Step 1: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Nerdy's Hideout website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/nerdys-hideout.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login (use GitHub account for easiest setup)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
6. Add Environment Variables:
   - Click "Environment Variables"
   - Add `NEXT_PUBLIC_FORMSPREE_WAITLIST_ID` = your waitlist form ID
   - Add `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` = your contact form ID
   - Add `NEXT_PUBLIC_SITE_URL` = your domain (or leave blank for now)
7. Click "Deploy"

### Step 3: Your Site is Live!

Vercel will give you a URL like: `https://nerdys-hideout-xxxxx.vercel.app`

Test everything:
- Homepage loads
- Mixes page works
- Forms submit successfully
- Navigation works

## Adding a Custom Domain

### Option 1: Buy Domain (Recommended)

1. Buy domain from Namecheap, Cloudflare, or Google Domains ($10-15/year)
2. In Vercel dashboard, go to your project
3. Click "Settings" → "Domains"
4. Click "Add Domain"
5. Enter your domain (e.g., `nerdyshideout.com`)
6. Follow Vercel's instructions to:
   - Add DNS records at your domain registrar
   - Wait for DNS propagation (can take up to 48 hours)

### Option 2: Use Free Vercel Subdomain

Just use the free `your-project.vercel.app` domain until you're ready to buy a custom domain.

## Content Management

### Adding a New Mix

1. Open `lib/mixes.ts`
2. Add a new mix object to the `mixes` array:

```typescript
{
  id: '002',
  slug: 'nerdys-hideout-mix-002',
  title: "Your Mix Title Here",
  date: '2026-02-20',  // YYYY-MM-DD format
  city: 'Lagos',
  country: 'Nigeria',
  genres: ['Afrobeats', 'Amapiano'],
  duration: '1:15:00',  // H:MM:SS format
  youtubeUrl: 'https://youtu.be/YOUR_VIDEO_ID',
  youtubeId: 'YOUR_VIDEO_ID',  // The ID from the YouTube URL
  description: 'Your mix description here',
  featured: false,  // Set to true to feature on homepage
},
```

3. Save the file
4. Commit and push to GitHub:

```bash
git add lib/mixes.ts
git commit -m "Added Mix 002"
git push
```

Vercel will automatically rebuild and deploy your site with the new mix!

### Updating Text Content

To change any text on the site:

1. Find the relevant file:
   - Homepage: `app/page.tsx`
   - About page: `app/about/page.tsx`
   - Contact page: `app/contact/page.tsx`
   - Footer: `components/Footer.tsx`
   - Navbar: `components/Navbar.tsx`

2. Edit the text directly in the file
3. Commit and push changes

### Changing Colors/Styling

1. Open `tailwind.config.js`
2. Modify colors in the `theme.extend.colors` section:

```javascript
colors: {
  accent: '#8B5CF6',  // Change to your preferred purple
  'accent-green': '#10B981',  // Change to your preferred green
  // etc.
}
```

3. Commit and push changes

## Managing Form Submissions

### Via Email

By default, Formspree sends you an email for each submission to the email address associated with your Formspree account.

### Via Formspree Dashboard

1. Log into [formspree.io](https://formspree.io)
2. Click on your form
3. View all submissions
4. Export to CSV if needed

### Building a Custom Dashboard (Future)

If you outgrow Formspree's free tier, you can:
1. Set up a database (PostgreSQL on Railway/Supabase - free tier)
2. Create API routes to save submissions
3. Build an admin dashboard to view/manage submissions

## Troubleshooting

### Forms Not Submitting

1. Check that Formspree IDs are correct in code
2. Verify environment variables are set in Vercel
3. Check Formspree dashboard for blocked submissions
4. Look at browser console for errors

### Images Not Loading

1. YouTube thumbnails load automatically from YouTube
2. If logo doesn't load, check that `public/images/logo-3.png` exists

### Site Not Deploying

1. Check Vercel deployment logs for errors
2. Ensure all dependencies are in `package.json`
3. Run `npm run build` locally to test

### TypeScript Errors

1. Run `npm run lint` to check for errors
2. Fix any TypeScript errors before deploying

## Performance Optimization

The site is already optimized for performance:

- Images lazy-loaded via Next.js Image component
- YouTube embeds use click-to-play for faster initial load
- CSS optimized via Tailwind's purge
- Static pages generated at build time

## Analytics (Optional)

To add analytics:

### Vercel Analytics (Free)

1. In Vercel dashboard, go to your project
2. Click "Analytics" tab
3. Enable Vercel Analytics (free tier available)

### Google Analytics (Free)

1. Create Google Analytics account
2. Get your tracking ID
3. Add to `app/layout.tsx`:

```typescript
import Script from 'next/script'

// In the <head> section:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-YOUR_ID');
  `}
</Script>
```

## Costs

- **Development**: $0
- **Hosting (Vercel)**: $0/month (free tier)
- **Forms (Tally)**: $0/month (unlimited submissions!)
- **Domain (optional)**: ~$12-15/year
- **Total**: $0-15/year

## Support

If you run into issues:

1. Check Vercel deployment logs
2. Check browser console for errors
3. Review Next.js documentation: https://nextjs.org/docs
4. Check Formspree documentation: https://help.formspree.io

## License

Private project. All rights reserved.

---

Built for Nerdy's Hideout by The Nerdy DJ
For Real Ones Only.
