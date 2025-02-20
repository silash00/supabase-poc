# User Management POC

A simple proof of concept application demonstrating the integration of:

- Vite
- React
- TypeScript
- Supabase
- Zustand

## Overview

This project showcases a basic user management system with the following features:

- Fetch and display users from Supabase database
- State management using Zustand
- Type-safe development with TypeScript
- Modern development setup with Vite

## Getting Started

### Prerequisites

- Node.js
- npm/yarn
- Supabase account

### Environment Setup

Create a `.env` file in the root directory with your Supabase credentials:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Project Structure

```
src/
  ├── lib/
  │   └── supabase.ts    # Supabase client configuration
  ├── stores/
  │   └── useUserStore.ts # Zustand store for user management
  └── App.tsx            # Main application component
```

## Technologies Used

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Supabase](https://supabase.io/) - Open source Firebase alternative
- [Zustand](https://zustand-demo.pmnd.rs/) - State management solution
