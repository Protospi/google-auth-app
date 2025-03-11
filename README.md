# React Firebase Authentication

A React application with Google Firebase authentication.

## Features

- Google Sign-in Authentication
- Protected Routes
- Dashboard with User Profile

## Setup

1. Clone the repository
```
git clone <your-repo-url>
cd <your-repo-name>
```

2. Install dependencies
```
npm install
```

3. Configure Firebase
   - Copy `src/firebase.template.ts` to `src/firebase.ts`
   - Replace the placeholder values in `firebase.ts` with your actual Firebase credentials

4. Start the development server
```
npm start
```

## Firebase Setup

To set up Firebase for this application:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Register your web application
4. Enable Google Authentication in the Firebase console
5. Copy your Firebase configuration to `src/firebase.ts`

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
REACT_APP_API_KEY=your_firebase_api_key
REACT_APP_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_PROJECT_ID=your_firebase_project_id
REACT_APP_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_APP_ID=your_firebase_app_id
```

## Building for Production

```
npm run build
```

## Project Structure

- `/src`
  - `/components` - Reusable UI components
  - `/contexts` - React Context for global state
  - `/pages` - Main application pages
  - `firebase.ts` - Firebase configuration
  - `index.tsx` - Application entry point