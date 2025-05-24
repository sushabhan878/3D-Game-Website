<p align="center">
  <video src="/videos/hero.mp4"></video>
</p>

<h1 align="center">🎮 GAME ARENA</h1>
<p align="center">A next-gen immersive frontend experience for the gaming world.</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#usage">Usage</a> •
  <a href="#contributing">Contributing</a>
</p>

---

<a align="center" href="https://3-d-game-website.vercel.app/">🌐 Visit Live Website</a>

---

## 📌 Overview

**Game Arena** is a futuristic, visually-rich frontend web application for a gaming platform. It features responsive layouts, animated 3D components, NFT highlights, and character previews using modern React and Tailwind CSS. It’s designed to offer a sleek UI for showcasing games, characters, and digital assets.

---

## ✨ Features

- 🔥 Dynamic 3D models with **Spline**
- 📹 Embedded auto-play videos for game characters
- 🌈 Responsive design optimized for mobile, tablet, and desktop
- 🛍️ NFT Store call-to-action component
- 🎮 Real-time interaction with immersive UI
- 💅 Hover effects, animations, and scaling transitions

---

## 🧱 Tech Stack

| Category        | Technology                          |
|----------------|--------------------------------------|
| Framework       | `React`                              |
| Styling         | `Tailwind CSS`                       |
| Icons           | `React Icons`                        |
| 3D Integration  | `Spline (spline-viewer-react)`       |
| Deployment      | `Vercel` (recommended)               |
| Media Assets    | HTML5 `<video>` & `<img>` from `public/` |

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/game-arena.git

# Navigate into the project directory
cd game-arena

# Install all dependencies
npm install

# Start the development server
npm run dev
```
```
game-arena/
├── public/
│ ├── images/ # Static images
│ └── videos/ # Looping background and character videos
├── src/
│ ├── components/
│ │ └── Arena.jsx # Main Arena layout with video/image grid
│ ├── App.jsx
│ └── main.jsx
├── tailwind.config.js
└── README.md
```

## 4. Build for production
```
npm run build
```

## 5. Preview the build (optional)
```
npm run preview
```

## ⚠️ Hosting Tips
Ensure all static assets (images/videos) are referenced without public/ prefix:
```
<img src="/images/bento-card1.png" alt="..." />
<video src="/videos/bento-card3.mp4" />
```
Using public/images/... will break paths after production build!

## 📦 Dependencies
```
"dependencies": {
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-icons": "^4.x",
  "spline-viewer-react": "^1.x" // or any Spline integration you used
}
```

🤝 Contributing
We welcome contributions to Game Arena!

1. 🍴 Fork the repo
2. 🚀 Create your feature branch (git checkout -b feature/YourFeature)
3. ✅ Commit your changes (git commit -m 'Add YourFeature')
4. 📤 Push to the branch (git push origin feature/YourFeature)
5. 🔁 Open a Pull Request







