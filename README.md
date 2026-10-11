# 🌐 Biraj Baral — Personal Portfolio

[![GitHub repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Biraj2006/Personal-Portfolio)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, responsive, and performance-focused personal portfolio website built with clean HTML5, CSS3, and vanilla JavaScript. Features a sleek dark glassmorphism theme, dynamic typewriter effects, scroll reveal animations, and an interactive contact form.

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start / How to Run](#-quick-start--how-to-run)
- [📁 Project Structure](#-project-structure)
- [⚙️ Customization Guide](#️-customization-guide)
- [🌐 Deployment](#-deployment)
- [👤 About the Author](#-about-the-author)
- [📄 License](#-license)

---

## ✨ Features

- **🎨 Modern Glassmorphism & Dark UI**: Styled with deep dark tones (`#0a0a0b`), purple-to-blue gradients, and backdrop-blur glass cards.
- **⚡ Interactive Typewriter Effect**: Dynamic cycling of professional titles and skill highlights on the hero section.
- **📱 Fully Responsive Design**: Seamless navigation and layout adaptation for desktops, tablets, and mobile devices (includes animated hamburger drawer).
- **👁️ Smooth Scroll Reveal**: Lightweight, native Intersection Observer animations that gracefully reveal sections as you scroll.
- **💼 Project & Skill Showcase**: Clean grid layouts for showcasing technical competencies, ongoing projects, and education milestones.
- **📬 Functional Contact Form**: AJAX-based form submission handled smoothly via [Formspree](https://formspree.io/) with real-time user feedback.
- **✨ Lucide Icons**: Modern, crisp vector icons integrated throughout the page.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic web structure and SEO-friendly metadata |
| **CSS3** | Custom design system, CSS variables, glassmorphism, responsive grid & flexbox |
| **Vanilla JavaScript (ES6+)** | Dynamic typewriter effect, scroll animations, mobile menu toggle, async form submission |
| **Lucide Icons** | Minimalist and customizable icon pack |
| **Google Fonts** | `Inter` (body copy) & `Outfit` (headings) typography |
| **Formspree** | Serverless contact form email forwarding |

---

## 🚀 Quick Start / How to Run

> **Note**: This is a pure static web project (HTML, CSS, JS) and does not require a Node.js build process. You do not need to run `npm run dev` unless you configure a custom local dev server.

### Option 1: Open Directly in Browser (Simplest)
Simply double-click `index.html` or right-click and choose **Open with > Google Chrome** (or your preferred browser).

### Option 2: VS Code Live Server (Recommended)
1. Open this project folder in **Visual Studio Code**.
2. Install the **Live Server** extension by *Ritwick Dey*.
3. Right-click `index.html` and click **"Open with Live Server"** (or click **Go Live** in the bottom status bar).
4. The site will launch automatically at `http://127.0.0.1:5500` with hot reloading.

### Option 3: Local Python HTTP Server
If you have Python installed, open your terminal inside the project directory:

```bash
# Python 3
python -m http.server 3000
```
Then visit: [`http://localhost:3000`](http://localhost:3000)

### Option 4: Local Node `npx serve`
If you have Node.js installed:

```bash
npx serve .
```

---

## 📁 Project Structure

```text
Personal-Portfolio/
├── assets/
│   └── Biraj_Baral_Resume.pdf   # Official resume PDF available for download
├── index.html                   # Main HTML markup and semantic page sections
├── style.css                    # Global design tokens, layout styling, and glassmorphism
├── script.js                    # Typewriter effect, IntersectionObserver, menu, & form handlers
├── profile.jpg                  # Profile photograph featured in the About section
├── hero_bg.png                  # Hero background visual asset
└── README.md                    # Project documentation and setup guide
```

---

## ⚙️ Customization Guide

### 1. Update Personal Info & Bio
Open `index.html`:
- Modify the title and meta tags in `<head>`.
- Update the heading and bio text under `<section id="hero">` and `<section id="about">`.

### 2. Customize Typewriter Roles
Open `script.js` and modify the strings in `textArray` (line 5):
```javascript
const textArray = [
  "B.Tech IT Student",
  "Software Developer",
  "Java & Full-Stack Enthusiast",
  "Problem Solver"
];
```

### 3. Configure the Contact Form
In `index.html`, locate the form tag:
```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Replace the `action` attribute with your unique endpoint from [Formspree](https://formspree.io/).

### 4. Update Resume File
Place updated resume PDF files in `assets/Biraj_Baral_Resume.pdf`. The download links automatically reference:
```html
<a href="assets/Biraj_Baral_Resume.pdf" class="btn btn-outline" download="Biraj_Baral_Resume.pdf">
    <i data-lucide="download"></i> Download Resume
</a>
```

### 5. Social Links
Update the social URLs in both the desktop side dock and the footer:
- **GitHub**: `https://github.com/Biraj2006`
- **LinkedIn**: `https://www.linkedin.com/in/biraj-baral-425082345/`
- **Email**: `birajbaral102@gmail.com`

---

## 🌐 Deployment

You can host this website completely free using any static hosting platform:

### Deploy to GitHub Pages (Recommended)
1. Push your latest code to your repository:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
2. Navigate to your repository on GitHub.
3. Go to **Settings** > **Pages**.
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. Your portfolio will be live at `https://<your-username>.github.io/<repo-name>/`.

### Deploy to Vercel or Netlify
- Drag and drop this folder directly into [Netlify Drop](https://app.netlify.com/drop).
- Or import your GitHub repository into [Vercel](https://vercel.com/) with zero configuration.

---

## 👤 About the Author

**Biraj Baral**
- B.Tech in Information Technology — Sharda University (2023 - Present)
- GitHub: [@Biraj2006](https://github.com/Biraj2006)
- LinkedIn: [Biraj Baral](https://www.linkedin.com/in/biraj-baral-425082345/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to customize and use it for your own portfolio!
