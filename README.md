# Calculator App

A simple web calculator with light/dark themes and sound toggle.  

---

## Task

- [Task description](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8)

---

## How to run the app

### Online deploy

- [Deploy](https://yuyuu-8.github.io/simple-calculator/build/)

### Locally

Make sure you have **Node.js** installed.

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm start
   ```
4. Open in browser:
   http://localhost:3000

---

## Project structure / Структура проекта
```bash
├── 📁build/                             # project build with combined js file 
├── 📁public/                            # index.html template and favicon
└── 📁src/
    ├── 📁app/                           # main folder with source files
    │   ├── 📁utils/                     # tools components
    │   │   ├── 📁button/                # button creator class and styles
    │   │   ├── calculator.js            # calculator functionality file
    │   │   └── element-creator.js       # main class for creating new objects on page
    │   └── 📁view/                      # page view js file and styles
    ├── 📁assets/                        # multimedia files
    └── index.js                         # entry point for webpack
```

## Stack
HTML, CSS, JavaScript (ES6);
GitHub Pages for deployment
