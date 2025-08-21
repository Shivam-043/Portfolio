# Portfolio Website - Shivam Krishan Varshney

## Overview

This is a professional portfolio website for Shivam Krishan Varshney, a Software Engineer specializing in Flutter and Android development. The project is a full-stack web application built with React (frontend) and Express.js (backend), featuring a modern design with shadcn/ui components, contact form functionality, and comprehensive portfolio sections including education, experience, skills, and leadership achievements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety and modern development practices
- **Vite** as the build tool and development server for fast hot reloading
- **Wouter** for client-side routing, providing a lightweight alternative to React Router
- **TanStack Query (React Query)** for server state management and caching
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable UI components
- **Tailwind CSS** for utility-first styling with custom CSS variables for theming
- **Component-based architecture** with reusable UI components organized in separate directories

### Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **RESTful API design** with clear separation of concerns
- **Middleware-based request/response handling** with logging and error management
- **Memory-based storage** for development with interface-based design for easy database swapping
- **Zod validation** for type-safe request/response validation using shared schemas

### Data Layer
- **Drizzle ORM** configured for PostgreSQL with type-safe database operations
- **Shared schema definitions** between frontend and backend using Zod for validation
- **Database migrations** managed through Drizzle Kit
- **Neon Database** integration for serverless PostgreSQL hosting

### Styling and Design System
- **CSS custom properties** for consistent theming across light/dark modes
- **Responsive design** with mobile-first approach using Tailwind breakpoints
- **Gradient-based color scheme** with primary, secondary, accent, and vibrant color variations
- **Inter font family** for modern typography
- **Shadcn/ui design tokens** with customizable radius, spacing, and color variables

### Development and Build Process
- **TypeScript configuration** with path mapping for clean imports
- **ESLint and Prettier** for code formatting and linting (implied by project structure)
- **Vite plugin ecosystem** including React plugin and Replit-specific development tools
- **Environment-based builds** with separate development and production configurations

### Contact Form System
- **Form validation** using React Hook Form with Zod resolvers
- **Toast notifications** for user feedback on form submission
- **Server-side validation** and error handling for contact form data
- **RESTful endpoints** for creating and retrieving contact messages

### SEO and Performance
- **Meta tags optimization** with Open Graph and Twitter Card support
- **Structured data (JSON-LD)** for search engine understanding
- **Font preloading** and optimization for performance
- **Static asset optimization** through Vite build process

## External Dependencies

### Core Frameworks and Libraries
- **React 18** - Frontend UI library with hooks and modern patterns
- **Express.js** - Backend web application framework
- **TypeScript** - Type safety across the entire application
- **Vite** - Build tool and development server

### Database and ORM
- **Drizzle ORM** - Type-safe database toolkit for TypeScript
- **Neon Database** - Serverless PostgreSQL database hosting
- **Zod** - Schema validation library for TypeScript

### UI and Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Low-level UI component primitives
- **shadcn/ui** - Component library built on Radix UI
- **Lucide React** - Icon library for React applications

### State Management and Data Fetching
- **TanStack Query** - Server state management and caching
- **React Hook Form** - Form state management and validation
- **Wouter** - Lightweight client-side routing

### Development Tools
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefix automation
- **ESBuild** - Fast JavaScript bundler for production builds

### Third-party Services
- **Font Awesome** - Icon font library
- **Google Fonts** - Web font service for Inter font family
- **Replit** - Development environment with specific Vite plugins for enhanced development experience