# 🎨 Portfolio - OMAR KHLIFI

A stunning frontend-only 3D portfolio showcasing expertise in Game Development, Full Stack Web Development, and AI.

## ✨ Features

- 🎮 **Immersive 3D Experience** - Floating geometric shapes with enhanced animations
- ⭐ **Particle Systems** - Dynamic starfield with 7000+ stars and 250+ particles  
- 💼 **Project Showcase** - Detailed project pages with GitHub links
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎨 **Glass-morphism UI** - Modern design with gradient effects
- 🚀 **Single Page Application** - Fast navigation with React Router
- 📧 **Contact Integration** - Email contact form (mailto)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   yarn install
   ```

2. **Start Development Server**
   ```bash
   yarn start
   ```

3. **Open Browser**
   - Navigate to: http://localhost:3000
   - Enjoy your 3D portfolio!

### Build for Production

```bash
yarn build
```

The build folder will contain optimized production files ready for deployment.

## 📝 Customization Guide

### 1. Update Personal Information

Edit `src/config.js`:

```javascript
export const portfolioConfig = {
  name: "YOUR NAME",
  title: "YOUR TITLE",
  tagline: "Your tagline here...",
  profilePicture: "/your-profile.jpg",
  
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername"
  }
};
```

### 2. Add Your Profile Picture

1. Add your image to `public/` folder
2. Update the path in `src/config.js`:
   ```javascript
   profilePicture: "/your-profile-photo.jpg"
   ```

### 3. Customize Projects

Edit `src/projectsData.js`:

```javascript
export const projectsData = [
  {
    id: "unique-project-id",
    title: "Your Project Title",
    category: "Category",
    shortDescription: "Brief description...",
    fullDescription: "Detailed description...",
    tech: ["React", "Node.js", "etc"],
    features: [
      "Feature 1",
      "Feature 2"
    ],
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-url.com",
    color: "cyber-cyan", // cyber-cyan, cyber-purple, or cyber-gold
    year: "2024",
    duration: "X months"
  },
  // Add more projects...
];
```

### 4. Customize Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'space-dark': '#0a0a1a',      // Background
  'space-blue': '#1a1a3e',      // Secondary background
  'cyber-cyan': '#00f0ff',      // Primary accent
  'cyber-purple': '#a855f7',    // Secondary accent
  'cyber-gold': '#fbbf24',      // Tertiary accent
}
```

### 5. Modify 3D Elements

Edit `src/components/Enhanced3D.js` and `src/components/EnhancedScene3D.js`:

- Adjust floating speeds
- Change colors
- Add/remove 3D shapes
- Modify particle counts

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── profile-placeholder.svg
│   └── [your images]
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── ProjectDetail.js
│   │   ├── Contact.js
│   │   ├── Enhanced3D.js
│   │   └── EnhancedScene3D.js
│   ├── config.js           # ⭐ Edit your info here
│   ├── projectsData.js     # ⭐ Edit your projects here
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Key Pages

1. **Home (#home)** - Hero section with 3D background
2. **About (#about)** - Profile, skills, and expertise
3. **Projects (#projects)** - Project showcase grid
4. **Project Detail (/project/:id)** - Individual project pages
5. **Contact (#contact)** - Contact form and social links

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Netlify

1. Run: `yarn build`
2. Drag & drop `build/` folder to Netlify
3. Done!

### GitHub Pages

1. Install gh-pages: `yarn add --dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "yarn build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `yarn deploy`

## 🛠️ Technologies Used

- **Frontend**: React 18
- **3D Graphics**: Three.js, React Three Fiber, @react-three/drei
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: React Icons

## 📧 Contact Form

The contact form uses `mailto:` protocol which opens the user's default email client. 
For form backend integration, consider using:
- Formspree
- EmailJS
- SendGrid
- Your own backend API

## 💡 Tips

- Replace placeholder images with your actual project screenshots
- Update GitHub links to your real repositories
- Customize colors to match your personal brand
- Add your actual work experience and skills
- Test on multiple devices for responsiveness

## 🐛 Troubleshooting

**3D elements not loading:**
- Check browser console for errors
- Ensure Three.js dependencies are installed: `yarn install`

**Build fails:**
- Clear cache: `rm -rf node_modules && yarn install`
- Check Node.js version: `node --version` (should be 16+)

**Port already in use:**
- Change port in package.json or use: `PORT=3001 yarn start`

## 📄 License

MIT License - Free to use for your personal portfolio!

## 🌟 Credits

Built by OMAR KHLIFI with React, Three.js, and passion for creative development.

---

**Need help?** Open an issue or reach out via social media links in the portfolio.

Happy coding! 🚀
