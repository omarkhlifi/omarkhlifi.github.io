# 🎨 Customization Guide

## Quick Checklist

- [ ] Update name in `src/config.js`
- [ ] Add profile picture to `public/`
- [ ] Update contact information
- [ ] Edit projects in `src/projectsData.js`
- [ ] Add GitHub links to your projects
- [ ] Replace placeholder content
- [ ] Update social media links
- [ ] Test on mobile devices

## Detailed Instructions

### 1. Personal Information

**File**: `src/config.js`

```javascript
name: "OMAR KHLIFI",        // Change to your name
title: "Creative Developer", // Your title
profilePicture: "/profile-placeholder.svg", // Your photo path
```

### 2. Profile Picture

1. Add image to `public/` folder (recommended: 400x400px, square)
2. Supported formats: JPG, PNG, SVG
3. Update path in `config.js`:
   ```javascript
   profilePicture: "/my-photo.jpg"
   ```

### 3. Projects

**File**: `src/projectsData.js`

Each project needs:
- `id`: Unique identifier (lowercase-with-dashes)
- `title`: Project name
- `category`: "3D Game Development", "Full Stack Development", or "AI & Machine Learning"
- `shortDescription`: Brief overview
- `fullDescription`: Detailed explanation
- `tech`: Array of technologies used
- `features`: Array of key features
- `github`: Your GitHub repository URL
- `demo`: Live demo URL (optional)
- `color`: "cyber-cyan", "cyber-purple", or "cyber-gold"
- `year`: Year completed
- `duration`: How long it took

### 4. Contact Links

**File**: `src/config.js`

```javascript
contact: {
  email: "omarkhlifi.contact@gmail.com",
  github: "https://github.com/omarkhlifi",
  linkedin: "https://linkedin.com/in/omarkhlifi4",
  youtube: "https://youtube.com/@OmarDevTN"
}
```

### 5. Colors & Theme

**File**: `tailwind.config.js`

Change any color in the `colors` section:
```javascript
'cyber-cyan': '#00f0ff',    // Your primary color
'cyber-purple': '#a855f7',  // Your secondary color  
'cyber-gold': '#fbbf24',    // Your accent color
```

### 6. 3D Animation Speeds

**File**: `src/components/Enhanced3D.js`

Adjust `speed` parameter for each shape:
```javascript
<FloatingSphere 
  position={[-3, 2, -2]} 
  color="#00f0ff" 
  speed={0.8}  // Lower = slower, Higher = faster
/>
```

## Pro Tips

1. **Images**: Use WebP format for best performance
2. **GitHub**: Make sure repositories are public
3. **Demo Links**: Host demos on Vercel, Netlify, or GitHub Pages
4. **Profile Photo**: Use a professional, high-quality image
5. **Projects**: Show your best 4-6 projects
6. **Testing**: Test on Chrome, Firefox, Safari, and mobile

## Need Help?

- Check browser console for errors
- Ensure all links are valid
- Test contact form  
- Verify 3D elements load properly

Happy customizing! 🎨

## update
- git add .
- git commit -m "Update portfolio"
- git push