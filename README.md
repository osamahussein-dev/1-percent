# 1 Percent - Frontend

A modern social media platform built with React and Vite that allows users to share posts, interact with others, and explore content based on topics.

## Features

### Authentication & Access
- User registration with form validation
- Secure login system
- Persistent sessions using local storage
- Profile management and secure logout

### Post Management
- Create posts with topics, title, and content
- View personal and other users' posts
- Like/unlike functionality
- Comment system
- Post deletion (for post owners)

### Topics & Discovery
- Browse posts by topics
- Explore page with topic-based filtering
- Curated advice from third-party API

### Profile & Social Features
- View personal and other user profiles
- Follow/unfollow system (in development)
- Profile statistics (posts count, followers, following)

### Settings & Customization
- Profile information management (name, email, phone)
- Password change functionality
- Theme customization (in development)

## Tech Stack
- React
- Vite
- React Query
- Axios
- React Router DOM
- TailwindCSS
- React Icons

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone [https://github.com/osamahussein-dev/1-percent]
cd 1-percent
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```
VITE_API_BASE_URL=http://localhost:3000/api
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production
```bash
npm run build
```
