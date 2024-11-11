CSS Frameworks Project

This is a simple front-end project built with Tailwind CSS and Vite to explore and learn Tailwind's utility-first styling approach. The project includes static pages: login, feed, create and profile.

Project Structure

Pages:

login: The main login page of the application.

feed: Displays the main feed of content.

create: Forms to creat lists

profile: A user profile page.

Getting Started

Prerequisites

Node.js (v16+ recommended)

npm (comes with Node.js) or yarn

Installation

Clone the repository:

git clone <repository-url>
cd css-frameworks

Install dependencies:

npm install

Running the Project

To start a development server with live reloading:

npm run dev

This will launch the app on http://localhost:3000, or another available port.

Building the Project

To build the project for production, run:

npm run build

This will create an optimized build in the dist folder.

Preview the Production Build

To preview the production build:

npm run preview

This will serve the production build on a local server.

Project Configuration

The main configuration for Vite is in vite.config.js, which specifies the following entry points:

index.html (login page)

src/create.html (creation page)

src/feed.html (feed page)

src/profile.html (profile page)

Using Tailwind CSS

Tailwind CSS is configured in the project’s PostCSS configuration, so you can start using utility classes right away in your HTML files. Refer to Tailwind’s documentation for guidance on using the various classes.

License

This project is intended for personal and educational use.
