# Sanampalli PavanKalyan | Portfolio

A responsive, dark-themed personal portfolio website showcasing my education, technical skills, projects, internship experience, certifications and contact details. Built with plain **HTML, CSS and JavaScript**, with no frameworks or build step.

> **AI & Data Science graduate** focused on practical machine learning and computer vision applications, seeking an entry-level **AI/ML Engineer** role.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Portfolio Sections](#portfolio-sections)
- [Featured Projects](#featured-projects)
- [Certifications](#certifications)
- [Contact](#contact)

---

## Features

- Responsive layout that works on desktop, tablet and mobile
- Dark theme with the Poppins font (Google Fonts)
- Sticky navigation bar with a mobile hamburger menu
- Scroll-spy that highlights the active nav link
- Header shadow on scroll and smooth scrolling between sections
- Subtle section reveal animation using `IntersectionObserver`
- Project cards with tech-stack tags and GitHub links
- Experience timeline and certifications grid
- Downloadable / viewable resume (PDF)
- Footer year that updates automatically

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Flexbox / Grid, responsive design) |
| Behaviour | Vanilla JavaScript (ES6) |
| Fonts | Google Fonts (Poppins) |
| Version control | Git & GitHub |

## Project Structure

```
PavanKalyan-Portfolio/
├── index.html      # Page structure and content
├── style.css       # Styling, theme and responsive layout
├── script.js       # Menu toggle, scroll-spy, reveal animation
└── resume.pdf      # Resume linked from the portfolio
```

## Getting Started

No installation or build step is needed.

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanampalliPavanKalyan04/Portfolio.git
   cd Portfolio
   ```

2. **Open the site**
   - Double-click `index.html`, or
   - Serve it locally (optional):
     ```bash
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000`.

### Customizing

- **Content:** edit the text, project cards and links in `index.html`.
- **Theme:** adjust colors and spacing in `style.css`.
- **Resume:** replace `resume.pdf` with an updated copy, keeping the same file name.

## Portfolio Sections

| Section | Description |
|---------|-------------|
| **Home** | Introduction and call-to-action buttons |
| **About** | Education, experience and current focus |
| **Skills** | Programming, AI/ML, data science, visualization, frontend and tools |
| **Projects** | Featured academic and practical projects |
| **Experience** | Data Science Internship timeline |
| **Certifications** | Courses and professional certificates |
| **Resume** | Link to the PDF resume |
| **Contact** | Email, GitHub, LinkedIn and phone |

## About Me

- **Education:** B.Tech in Computer Science Engineering (AI & Data Science), Siddartha Institute of Science and Technology, Puttur, Andhra Pradesh (2022 – 2026), CGPA 8.2 / 10.0
- **Experience:** Data Science Intern at Codec Technologies (Aug 2025 – Oct 2025)
- **Current focus:** Deep Learning, Computer Vision, AI applications, FastAPI and full-stack development

### Technical Skills

| Category | Skills |
|----------|--------|
| Programming | Python, Java, SQL |
| AI & Machine Learning | TensorFlow, PyTorch, Scikit-learn, Deep Learning, CNN, Computer Vision, Transfer Learning, Model Evaluation, Model Deployment (TFLite) |
| Data Science | Pandas, NumPy, EDA, Data Cleaning, Data Preprocessing |
| Data Visualization | Matplotlib, Power BI, Tableau |
| Frontend | HTML, CSS, JavaScript |
| Frameworks & Tools | FastAPI, Streamlit, Git, GitHub, VS Code, Jupyter Notebook, Google Colab |

## Featured Projects

### 🌿 Plant Disease Detection & Classification
End-to-end computer vision tool that helps farmers identify crop diseases early.
- Fine-tuned **ResNet50** on 70,000+ PlantVillage images across **38 classes**
- Reached **95% accuracy** and a **0.97 weighted F1-score**
- Cut model size by **70%** with TFLite quantization for edge deployment
- Served through a **FastAPI** backend with Streamlit and React frontends

**Tech:** Python, TensorFlow, ResNet50, CNN, FastAPI, TFLite, Streamlit
🔗 [View Project](https://github.com/SanampalliPavanKalyan04/Plant-disease-detection)

### 🏛️ Citizen Connect
Full-stack civic grievance portal modelled on the AP PGRS (Meekosam) system.
- Three user roles (Citizen, Employee, Admin) with JWT authentication
- 21 departments and 62 issue types with automatic routing and SLA tracking
- Photo evidence, map location capture, duplicate detection and escalation of reopened complaints
- Public tracking page, analytics dashboard (charts, heatmap, CSV export)
- Three languages (English, Telugu, Hindi), dark mode and installable PWA

**Tech:** Python, JavaScript, React, Vite, Flask, REST APIs, PostgreSQL, Git
🔗 [View Project](https://github.com/SanampalliPavanKalyan04/citizen-connect)

### 📊 E-commerce Sales Data Analytics Dashboard
Power BI dashboard analyzing e-commerce sales performance.
- **+30.76% YoY** sales growth (2024 → 2025), consistent across every month
- Top product drives about 17% of total revenue (a concentration risk)
- West and East regions contribute over 51% of total sales
- Corporate customers have the highest average order value despite fewer orders

**Tech:** Python, SQL, Power BI, DAX
🔗 [View Project](https://github.com/SanampalliPavanKalyan04/E-commerce-sales-analytics-dashboard)

### 🎉 Festival Sales Dashboard
Analysis of two years (Jan 2023 – Dec 2024) of daily Amazon.in / Flipkart-style sales data, showing how major Indian sale seasons (Republic Day, Holi, Summer, Independence Day, Big Billion Days, Diwali, Black Friday / Cyber Monday and Year-End) affect revenue, discounts and returns compared with normal days.

**Tech:** Python, Pandas, HTML, CSS, JavaScript
🔗 [View Project](https://github.com/SanampalliPavanKalyan04/Festival-sales-dashboard)

### 💻 Portfolio Website
This repository: a responsive, dark-themed personal portfolio built with HTML, CSS and JavaScript.

**Tech:** HTML, CSS, JavaScript
🔗 [View Project](https://github.com/SanampalliPavanKalyan04/Portfolio)

## Internship Experience

**Data Science Intern, Codec Technologies** (Aug 2025 – Oct 2025)
- Cleaned two years of daily e-commerce sales data with Python, Pandas and NumPy, tagging each date with its sale event across 8 major Indian sale seasons
- Performed EDA, Pareto and YoY analysis, finding the top 10% of products drove 45% of revenue
- Built interactive Power BI dashboards comparing each season's impact on revenue, discounts and returns
- Enabled data-backed stock and promotion planning ahead of peak sale events

## Certifications

| Certification | Issuer |
|---------------|--------|
| Fundamentals of Machine Learning and AI | AWS Training |
| Python for Data Analysis: Pandas & NumPy | Coursera |
| Google AI Essentials | Coursera |
| Power BI Data Modelling | Simplilearn |
| What is Generative AI | LinkedIn Learning |
| Industry 4.0 & IIoT | NPTEL |
| Claude 101 | Anthropic |

## Contact

- 📧 **Email:** [sanampallipavankalyan36@gmail.com](mailto:sanampallipavankalyan36@gmail.com)
- 💻 **GitHub:** [SanampalliPavanKalyan04](https://github.com/SanampalliPavanKalyan04)
- 🔗 **LinkedIn:** [sanampalli-pavankalyan](https://linkedin.com/in/sanampalli-pavankalyan)

---

© 2026 Sanampalli PavanKalyan. Built with HTML, CSS & JavaScript.
