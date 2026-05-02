# Web Application

This repository contains the source code for [martinbraquet.com](https://martinbraquet.com), my personal website. Built with Next.js, React and TypeScript.

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 3.3.3
- **State Management**: React Context + Custom Hooks
- **Charts**: Recharts

## Project Structure

```
web/
├── components/            # React components
├── hooks/                 # Custom React hooks (50+)
├── lib/                   # Utilities and services
├── pages/                # Next.js pages
│   ├── api/              # API routes
│   ├── _app.tsx          # App wrapper
│   ├── _document.tsx     # Document setup
├── public/               # Static assets
├── styles/               # Global CSS
└── types/                # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 20.x or later
- Yarn 1.x


Install `yarn` (if not already installed):

```bash
npm install --global yarn
```

### Installation

```bash
# From root directory
yarn install
```

### Development

```bash
# Run web app with hot reload
yarn dev
```

Visit http://localhost:3000

### Build

```bash
# Production build
yarn build

# Start production server
yarn start
```

### Linting

```bash
# Check lint
yarn lint

# Fix lint issues
yarn lint-fix
```

### See Also

- [web.md](docs/web.md): further information on key concepts, etc.
