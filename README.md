# React Movie Favorites App

This is a **React** application that communicates with a NestJS backend to manage a list of favorite movies. It allows users to:
- Add movies to their favorites.
- View all favorite movies.
- Remove movies from favorites.

The frontend is built using **React** and communicates with the backend via HTTP requests.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Endpoints](#endpoints)
  - [UI Walkthrough](#ui-walkthrough)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This React application is designed to interact with a **NestJS** backend to manage movies. Users can:
- **Add movies** to a list of favorites.
- **View favorite movies**.
- **Remove movies** from their list of favorites.

The frontend makes API calls to a backend running on port `4000` (configured via `.env` in the backend) to fetch, add, and delete movies from the backend database.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router**: For managing routing within the application.
- **CSS**: For styling the app.

## Installation

Follow these steps to set up the application locally.

### 1. Clone the repository

```bash
git clone URL your-directory
cd your-directory
```

### 2. Install node_modules
```bash
npm install
```

### 3. Start the project

```bash
npm start
```

### 4. Application will be ready on localhost 3000
