# Ramcharan Pusapally - Developer & Student Portfolio

A modern, interactive, and responsive portfolio web application crafted for **Ramcharan Pusapally**, highlighting Computer Science engineering, Full-Stack React development, IoT/Hardware systems, and academic achievements at Lovely Professional University.

---

## 🌟 Key Features

- **Cyber-Modern Aesthetic**: Glassmorphism UI with smooth dark & light theme modes, glowing gradients, and backdrop blur.
- **Interactive Constellation Particle Canvas**: Dynamic HTML5 canvas network that interacts with cursor movement and adjusts to theme changes.
- **Dynamic Typewriter Hero**: Showcases core identities and live "Available for Internships" status pill.
- **Skills Matrix & Filter**: Categorized interactive capability matrix with proficiency meters (Languages, Web, IoT/Embedded, DBMS, Soft Skills).
- **Featured Projects & Deep-Dive Modals**:
  - **Real-Time Driver Drowsiness Detection System**: Hardware specs (Arduino Uno, IR Eye-Blink Sensor, Pulse Rate Sensor, SIM800L GSM Module, Proteus simulation), 93%+ accuracy, 3–5s SMS response.
  - **CDP - Environmental Awareness (Times Foundations X LPU)**: Community impact & data collection.
  - **Full Stack React Architecture**: Modern component architecture & database integration.
- **Education Journey Timeline**: Visual timeline showcasing B.Tech CSE at Lovely Professional University, Intermediate (91.8%), and High School (93.0%).
- **Verified Certifications Gallery**: Featuring *Learning Full Stack React* and *Basics of Leadership Styles & Theories*.
- **Interactive Developer Terminal (CLI Mini-App)**: Authentic terminal emulator supporting commands like `help`, `skills`, `projects`, `education`, `certs`, `contact`, `theme [dark|light]`, and `sudo hire`.
- **Contact & Connect Hub**: Direct communication cards with one-click clipboard copy for email (`ramcharanpusapally3@gmail.com`) and phone (`+91-7815867359`), plus an interactive message form with toast notifications.
- **Resume Viewer Modal**: Built-in formatted resume preview with direct print-to-PDF support.

---

## 📁 Project Structure

```
portfolio/
├── index.html            # Main semantic HTML5 single-page structure
├── css/
│   └── styles.css        # Custom theme variables, glassmorphism, animations & terminal styling
├── js/
│   ├── main.js           # Typewriter, theme toggling, scroll spy, toasts & contact handlers
│   ├── particles.js      # Interactive constellation particle network canvas
│   ├── projects.js       # Projects catalog & deep-dive architecture modal
│   └── terminal.js       # Interactive developer CLI console emulator
├── assets/               # Folder for custom images, avatars, or PDF documents
├── start_portfolio.bat   # One-click Windows launch script
└── README.md             # Project documentation
```

---

## 🚀 How to Run Locally

### Option 1: Double Click
Double-click `start_portfolio.bat` in File Explorer. It will start a local HTTP server and automatically launch your browser at `http://localhost:8000`.

### Option 2: Python Command Line
Run the following in PowerShell / Command Prompt inside the portfolio directory:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## 🌐 How to Deploy for Free

### 1. Deploy on GitHub Pages
1. Create a repository on GitHub (e.g. `ramcharanpusapally03.github.io` or `portfolio`).
2. Push this folder to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/ramcharanpusapally03/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Go to **Repository Settings > Pages**, select the `main` branch, and click **Save**. Your portfolio will be live at `https://ramcharanpusapally03.github.io/portfolio/`!

### 2. Deploy on Vercel or Netlify
- Drag and drop the `portfolio` folder directly into [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on [Vercel](https://vercel.com).
