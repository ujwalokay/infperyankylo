# Ankylo Gaming POS Landing Page

## Overview

This is a modern, professional landing page for Ankylo Gaming POS built with React, TypeScript, and Express. The application showcases a complete gaming center management system with purple/black modern tech aesthetics, featuring comprehensive operational tools for session tracking, booking management, inventory control, financial oversight, happy hours management, and flexible discount systems. The project uses a full-stack architecture with a React frontend powered by Vite and an Express backend for API handling.

## Recent Changes

**November 14, 2025**
- Added Happy Hours Management feature card to home page and features page
- Added Flexible Discount & Free Hours feature card to home page and features page
- Features positioned before Live Seat Availability Mini Webpage as requested
- Enabled mobile two-finger zoom (maximum-scale: 5.0, user-scalable: yes)
- Used PartyPopper icon for Happy Hours and Percent icon for Discount features
- Integrated user-provided screenshots for feature visualization

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing (alternative to React Router)
- **TanStack Query** for server state management and API data fetching

**UI Component System**
- **shadcn/ui** component library based on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for managing component variants
- Design system inspired by Arc Browser with vibrant purple/blue gradients and modern glass morphism effects

**Styling Architecture**
- Custom CSS variables for theme colors (dark mode primary)
- Tailwind configuration with custom border radius, colors, and spacing
- Typography system using Inter (headings/UI) and Manrope (body text) from Google Fonts
- Elevation system with hover/active states using CSS custom properties

### Backend Architecture

**Server Framework**
- **Express.js** as the HTTP server with TypeScript
- Middleware for JSON parsing, URL encoding, and request logging
- Custom error handling middleware for consistent error responses
- Development-only Vite integration for SSR and HMR

**API Design**
- RESTful endpoint structure (`/api/*` prefix)
- Email signup endpoint (`POST /api/email-signup`) with validation
- Request/response logging with performance metrics
- Credential-based fetch configuration for session handling

**Data Validation**
- **Zod** schemas for runtime type validation
- **Drizzle-Zod** integration for database schema validation
- Email validation with custom error messages

### Data Storage

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL via `@neondatabase/serverless`
- Schema-first approach with TypeScript type inference
- Migration system using `drizzle-kit`
- Connection via `DATABASE_URL` environment variable

**Current Storage Implementation**
- **In-Memory Storage** (MemStorage class) for development/demo purposes
- Implements IStorage interface for easy swapping to database persistence
- Email signup storage with duplicate prevention

**Database Schema**
```typescript
emailSignups {
  id: UUID (primary key, auto-generated)
  email: text (unique, not null)
  createdAt: timestamp (default now)
}
```

### External Dependencies

**UI Component Libraries**
- **@radix-ui/react-*** - Headless UI primitives for accessible components (accordion, dialog, dropdown, popover, etc.)
- **lucide-react** - Icon library for UI elements
- **react-icons** - Additional icons (SiX, SiGithub, SiDiscord for social links)
- **embla-carousel-react** - Carousel/slider functionality
- **cmdk** - Command menu component
- **vaul** - Drawer component

**Form Handling**
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Form validation resolvers

**Development Tools**
- **@replit/vite-plugin-runtime-error-modal** - Runtime error overlay for development
- **@replit/vite-plugin-cartographer** - Replit-specific dev tooling
- **@replit/vite-plugin-dev-banner** - Development environment banner

**Database & ORM**
- **@neondatabase/serverless** - Serverless PostgreSQL driver for Neon
- **drizzle-orm** - TypeScript ORM
- **drizzle-kit** - Schema migration toolkit
- **connect-pg-simple** - PostgreSQL session store (for future session management)

**Utilities**
- **date-fns** - Date manipulation and formatting
- **clsx** & **tailwind-merge** - Conditional className utilities
- **nanoid** - Unique ID generation

**Build & Development**
- **esbuild** - Fast JavaScript bundler for production server build
- **tsx** - TypeScript execution for development server
- **postcss** & **autoprefixer** - CSS processing