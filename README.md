# Jackson Lee Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS showcasing my work as a software engineer.

![Portfolio Preview](/images/placeholder.svg)

## Overview

This portfolio site is designed to highlight my professional work, projects, and personal activities. It features a clean, minimal design with dark/light mode support, responsive layouts, and interactive components.

## Features

- **Modern Design**: Clean, accessible interface with custom typography and components
- **Responsive**: Fully responsive design that works on devices of all sizes
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Projects Showcase**: Detailed project pages with comprehensive information
- **Outside the Office**: Section dedicated to personal activities and hobbies
- **Performance Optimized**: Fast page loads and optimized images
- **Accessibility**: Built with accessibility in mind

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) & [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Project Structure

├── app/                    # Next.js app router pages
│   ├── data/               # Data for projects and activities
│   ├── globals.css         # Global CSS styles
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Homepage component
│   ├── projects/           # Projects pages
│   └── outside/            # Outside the office page
├── components/             # React components
│   ├── layout/             # Layout components (navigation, footer)
│   ├── theme/              # Theme components (provider, toggle)
│   └── ui/                 # UI components (button, card, etc.)
├── lib/                    # Utility functions
├── public/                 # Static assets and images
│   └── images/             # Project and content images
└── styles/                 # Additional styles

## Component Library

This project uses [shadcn/ui](https://ui.shadcn.com/), a collection of reusable components built using Radix UI and Tailwind CSS. These components are not installed as dependencies but rather copied into the project for full customization.

Key components include:
- Button
- Card
- Dialog
- Dropdown Menu
- Navigation Menu
- Avatar
- Badge
- and many more

## Setup and Development

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JacksonLee45/portfolio.git
cd portfolio
```

Start the development server:

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser.

### Building for Production
To build the application for production:
```bash
npm run build
```

To start the production server:
```bash
npm start
```

## Customization

### Content

Most content is stored in data files located in the `app/data` directory:
* `projects.ts`: Information about all projects
* `activities.ts`: Information about outside activities

### Styling

* Global styles are in `app/globals.css`
* Theme configuration is in `tailwind.config.js`
* Component-specific styles are in their respective component files

### Components

To add or modify components:
1. For shadcn/ui components, use the CLI to add new components
2. For custom components, add them to the appropriate directory in `components/`

## Deployment

This site is configured for deployment on Vercel:
1. Push to your GitHub repository
2. Connect to Vercel
3. Configure your deployment settings
4. Deploy

## Credits and Acknowledgements

* UI Components: [shadcn/ui](https://ui.shadcn.com/)
* Icons: [Lucide Icons](https://lucide.dev/)
* Fonts: [Google Fonts](https://fonts.google.com/)


## Contact

* Email: Jacksonhlee1@gmail.com
* LinkedIn: [linkedin.com/in/Jackson-Leeee](https://www.linkedin.com/in/jackson-leeee)
* GitHub: [github.com/JacksonLee45](https://github.com/JacksonLee45)