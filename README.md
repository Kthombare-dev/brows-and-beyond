# Brows & Beyond

A modern, responsive web application for "Brows & Beyond by Sonali", a permanent makeup artistry service. Built with React, Vite, and Tailwind CSS, it showcases services, artist information, and provides an appointment booking interface.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![Version](https://img.shields.io/badge/version-0.0.0-blue) ![Language](https://img.shields.io/badge/language-TypeScript-blue)

- --

## Table of Contents

-   [Key Features](#key-features)

-   [Architecture Overview](#architecture-overview)

-   [Tech Stack](#tech-stack)

-   [Getting Started](#getting-started)

    -   [Prerequisites](#prerequisites)

    -   [Installation](#installation)

-   [Configuration](#configuration)

-   [Usage](#usage)

-   [Project Structure](#project-structure)

-   [Scripts](#scripts)

-   [Roadmap](#roadmap)

-   [Contributing](#contributing)

-   [Testing](#testing)

-   [License](#license)

-   [Acknowledgements](#acknowledgements)

- --

## Key Features

*   **Modern Frontend Stack**: Developed with React, Vite, and TypeScript for a fast, efficient, and type-safe development experience.

*   **Responsive UI**: Utilizes Tailwind CSS and shadcn/ui components to ensure a consistent and adaptive user interface across all devices.

*   **Service Showcase**: Dedicated sections to detail the range of permanent makeup services offered.

*   **Artist Profile**: Features an "About Sonali" section with dynamic statistics to highlight experience and client satisfaction.

*   **Appointment Booking**: An interactive modal form for clients to easily schedule consultations.

*   **Efficient State Management**: Leverages React Query for robust data fetching, caching, and synchronization.

*   **Client-side Routing**: Powered by React Router DOM for seamless navigation between different application views.

- --

## Architecture Overview

This project is a single-page application (SPA) built using React and Vite. It follows a component-based architecture, where the user interface is composed of reusable React components. Client-side routing is handled by React Router DOM, enabling smooth navigation without full page reloads. Data fetching and asynchronous state management are efficiently managed using React Query, providing a robust and performant data layer. The styling is implemented with Tailwind CSS, complemented by shadcn/ui components, which offer a collection of accessible and customizable UI primitives. The application is designed to be fully responsive, adapting to various screen sizes and devices.

- --

## Tech Stack

| Area | Tool | Version |
|---|---|---|
|---|---|---|
| Frontend Framework | React | 18.x |
| Build Tool | Vite | 5.x |
|---|---|---|
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.x |
|---|---|---|
| UI Components | shadcn/ui | Latest |
| Routing | React Router DOM | 6.x |
|---|---|---|
| Data Fetching/State | React Query | 5.x |
| Form Management | React Hook Form | 7.x |
|---|---|---|
| Validation | Zod | 3.x |
| Linting | ESLint | 9.x |



- --

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

*   **Node.js**: Version 18 or higher.

    *   [Download Node.js](https://nodejs.org/en/download/)

    *   Alternatively, use a version manager like `nvm`: `nvm install 18`

*   **npm** (Node Package Manager) or **Yarn** / **pnpm**: Comes with Node.js, or install separately.

### Installation

1.  **Clone the repository**:

```bash
git clone https://github.com/Kthombare-dev/brows-and-beyond.git

```
2.  **Navigate into the project directory**:

```bash
cd brows-and-beyond

```
3.  **Install dependencies**:

```bash
npm install

# or
pnpm install

# or
    yarn install

```
- --

## Configuration

The application can be configured using environment variables. Create a `.env` file in the root directory and populate it with the necessary variables.

| ENV | Description | Example |
|---|---|---|
|---|---|---|
| `VITE_APP_TITLE` | The title of the application displayed in the browser tab. | `Brows & Beyond by Sonali` |
| `VITE_API_BASE_URL` | Base URL for any backend API calls (if applicable). | `https://api.example.com/v1` |



- --

## Usage

To start the development server and view the application in your browser:

```bash
npm run dev

```
The application will typically be available at `http://localhost:8080`.

To create a production-ready build:

```bash
npm run build

```
This will compile the application into the `dist` directory, which can then be served by any static file server.

- --

## Project Structure

```
.

├── public/
│   └── ... (static assets like images, favicon)

├── src/
│   ├── assets/

│   │   └── ... (local images, icons)
│   ├── components/

│   │   ├── ui/
│   │   │   └── ... (shadcn/ui components)

│   │   ├── About.tsx
│   │   ├── BookingForm.tsx

│   │   ├── Footer.tsx
│   │   └── ... (other custom React components)

│   ├── hooks/
│   │   └── ... (custom React hooks)

│   ├── lib/
│   │   └── utils.ts (utility functions)

│   ├── pages/
│   │   ├── Index.tsx

│   │   ├── Services.tsx
│   │   └── NotFound.tsx

│   ├── App.tsx (main application component)
│   ├── index.css (main CSS file, including Tailwind directives)

│   └── main.tsx (entry point for React application)
├── .eslintrc.cjs (ESLint configuration)

├── components.json (shadcn/ui configuration)
├── postcss.config.js (PostCSS configuration for Tailwind CSS)

├── package.json (project metadata and scripts)
├── tailwind.config.ts (Tailwind CSS configuration)

├── tsconfig.app.json (TypeScript config for application code)
├── tsconfig.json (base TypeScript configuration)

├── tsconfig.node.json (TypeScript config for Node.js environment files)
└── vite.config.ts (Vite build configuration)

```
- --

## Scripts

The `package.json` includes several convenient scripts for development and building:

| Command | Description |
|---|---|
|---|---|
| `dev` | Starts the local development server with hot-reloading. |
| `build` | Compiles the project for production deployment. |
|---|---|
| `build:dev` | Compiles the project in development mode (for debugging production builds). |
| `lint` | Runs ESLint to check for code quality and style issues. |
|---|---|
| `preview` | Serves the production build locally for testing before deployment. |


