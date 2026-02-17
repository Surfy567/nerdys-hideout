# Nerdy's Hideout - Official Website

Official website for Nerdy's Hideout - exclusive invite-only music events in Lagos, Nigeria.

**Live Site:** [https://nerdys-hideout.vercel.app]

---

## What This Is

A website for Nerdy's Hideout featuring:
- Mix archive showcasing live dj recorded sets
- Waitlist application via Tally forms
- Contact page for bookings
- Mobile-responsive, dark theme design

---

## Tech Stack

- **Next.js 14** 
- **TypeScript** 
- **Tailwind CSS**
- **Tally** - Forms (free, unlimited submissions)
- **Vercel** - Hosting (free tier)
- **Docker**

---

## Local Development

### Prerequisites
- Docker & Docker Compose installed
- Git

### Setup

1. **Clone the repo:**
```bash
git clone https://github.com/Surfy567/nerdys-hideout.git
cd nerdys-hideout-website
```

2. **Start Docker:**
```bash
docker-compose up
```

3. **Open browser:**
```
http://localhost:3001
```

That's it! Hot reload is enabled - edit files and see changes instantly.

### Alternative (without Docker)

If you prefer running directly with Node:
```bash
npm install
npm run dev
# Open http://localhost:3001
```

---

## Deployment

### Connect to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel auto-deploys on every push to `main` branch.

### Tally Forms

Forms are embedded via Tally. To update form IDs:
- Waitlist form: `components/WaitlistForm.tsx` 
- Contact form: `app/contact/page.tsx`


---

## Adding Mixes

Edit `lib/mixes.ts` and add a new mix object:
```typescript
{
  id: '002',
  slug: 'your-mix-slug',
  title: "Mix Title",
  date: '2026-03-01',
  city: 'Lagos',
  country: 'Nigeria',
  genres: ['Afrobeats', 'Amapiano'],
  duration: '90:00',
  youtubeUrl: 'https://youtu.be/VIDEO_ID',
  youtubeId: 'VIDEO_ID',
  description: 'Mix description',
  featured: false,
}
```

Push to GitHub - Vercel rebuilds automatically.

---

## File Structure
```
nerdys-hideout-website/
├── app/
│   ├── page.tsx
│   ├── mixes/             
│   ├── about/            
│   └── contact/           
├── components/            
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── WaitlistForm.tsx
├── public/images/ 
│   ├── logo-3.png   
│   └── dj-purple.jpg  
├── lib/  
│   └── mixes.ts    
├── docker-compose.yml 
└── tailwind.config.js 
```

---

## Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  accent: '#8B5CF6',        // Purple
  'accent-green': '#10B981', // Green
}
```

### Fonts
Current: Playfair Display (headings) + Inter (body)

To change, update `app/globals.css` font imports.

### Logo
Replace `public/images/logo-3.png` with your logo.

---

## Costs

- Vercel hosting: **Free**
- Tally forms: **Free** (unlimited)
- Domain (optional): **~$15/year**

**Total: $0-15/year**

---

## Docker Commands
```bash
# Start
docker-compose up

# Start in background
docker-compose up -d

# Stop
docker-compose down

# Rebuild
docker-compose up --build

# View logs
docker-compose logs -f
```

---

## Troubleshooting

**Site not updating on Vercel?**
- Check Vercel dashboard → Deployments
- Verify GitHub connection in project settings

**Logo too small/big?**
- Adjust in `components/Navbar.tsx` (className on img tag)

**Forms not working?**
- Verify Tally Form IDs are correct
- Check browser console for errors

---

## Contact

**The Nerdy DJ**
- Email: info.nerdyshideout@gmail.com
- Instagram: [@the_nerdydj](https://instagram.com/the_nerdydj)

---

**For Real Ones Only.**