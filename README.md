# FoodRush Pro — Professional React Food Delivery System

## Tech stack
- React + Vite
- Bootstrap 5
- Custom CSS
- React Context API
- Custom `useLocalStorage` hook
- LocalStorage persistence
- Leaflet + OpenStreetMap
- react-hot-toast
- jsPDF

## Requirements implemented

### Core
- Professional homepage / hero / CTA
- Restaurant listing with real food/restaurant photography
- Food categories
- Menu cards
- Search
- Restaurant/menu filtering
- Dietary filtering
- Price filtering
- Rating and price sorting
- Dynamic cart
- Quantity controls
- Checkout and validation
- Order summary
- Responsive UI
- Navbar/footer

### Advanced frontend simulations
- Dark/light theme persisted in LocalStorage
- Skeleton-ready component architecture
- Toast notifications
- Checkout loading state
- Mock Razorpay / Stripe-style payment flow
- Card number / expiry / CVV validation
- Payment authorization simulation
- Automatic PDF invoice using jsPDF
- Persistent order lifecycle
- Live tracking map
- Browser geolocation detection
- Animated delivery partner
- ETA simulation
- Customer / Restaurant / Delivery / Admin dashboards
- AI-style recommendations based on catalog ratings

## Important production/security note

This repository is a frontend academic/demo application. JWT, true RBAC authorization, rate limiting, real payment verification, WebSocket tracking, SMS/email/push notifications and server-side AI should be implemented in a backend for production.

Never put payment secrets, JWT signing secrets, database credentials or privileged API keys in a React frontend or GitHub Pages repository.

## Run

Install Node.js LTS, then in this folder:

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

For production build:

```bash
npm run build
npm run preview
```

## GitHub Pages

Because this is a Vite/React app, GitHub Pages deployment should be configured with a build workflow or another static deployment method. The simplest internship workflow is GitHub Actions using `npm ci` and `npm run build`, then publishing the `dist` directory.

## Images

The UI uses Unsplash image URLs for realistic food photography. For a production project, replace them with licensed local assets or an approved image API integration.

## Map

The tracking screen uses Leaflet with OpenStreetMap tiles. Clicking "Detect my location" requests browser geolocation permission. "Start live simulation" animates the demo delivery marker toward the detected destination.

## Testing extension

For production, add Vitest/React Testing Library for component logic and Playwright/Cypress for checkout and end-to-end workflows.
