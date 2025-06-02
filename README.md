# Portfolio

A modern, responsive, and animated personal portfolio web application built with React, TypeScript, Vite, and Tailwind CSS. This project showcases your skills, projects, and professional experience in a visually appealing and interactive way.

## Features

- **Animated UI:** Smooth transitions and engaging animations using Framer Motion.
- **Role-based Sections:** Switch between Developer, Blockchain, and Content roles to highlight different skill sets and experiences.
- **Responsive Design:** Fully responsive layout for desktop and mobile devices.
- **Dark/Light Theme:** Toggle between light and dark modes with a single click.
- **Reusable Components:** Modular and reusable UI components for easy customization and scalability.
- **Social Media Style Number Formatting:** Large numbers are formatted as 1K, 1M, etc., for a modern look.

## Tech Stack

- **Frontend:** React, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, PostCSS
- **Animation:** Framer Motion
- **Routing:** React Router

## Project Structure

```
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Main content sections
│   │   └── ui/             # Reusable UI components
│   ├── context/            # React Context providers
│   ├── data/               # Data files for projects, content, etc.
│   ├── images/             # Project and logo images
│   ├── pages/              # Page components
│   ├── types/              # TypeScript types
│   └── utils/              # Utility functions
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
$ git clone <your-repo-url>
$ cd Portfolio

# Install dependencies
$ npm install
# or
yarn install
```

### Running the App

```bash
# Start the development server
$ npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Building for Production

```bash
$ npm run build
# or
yarn build
```

### Linting

```bash
$ npm run lint
# or
yarn lint
```

## Customization
- Update your personal information, skills, and projects in the `src/data/` directory.
- Replace the logo in `src/images/logo.png` with your own branding.
- Adjust theme colors and Tailwind config as needed.

## License

This project is open source and available under the [MIT License](LICENSE).

---

> Designed and developed by [ Aman Upadhyay ].
