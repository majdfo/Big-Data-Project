# BloomWatch (React + TS + Firebase)
## Setup
1) Copy `.env.example` to `.env` and verify these values are set:
   - VITE_FIREBASE_API_KEY
   - VITE_FIREBASE_AUTH_DOMAIN
   - VITE_FIREBASE_PROJECT_ID
   - VITE_FIREBASE_APP_ID
2) In Firebase Console:
   - Enable Authentication → Email/Password.
   - Enable Firestore (Production).
   - Publish the Firestore Rules (below).
3) Install & run:
   npm install
   npm run dev

### Development server options
To expose the Vite dev server on all interfaces (useful for remote previews), run:

```
npm run dev -- --host 0.0.0.0 --port 5173
```

## Firestore Rules (paste in Firebase Console → Firestore → Rules → Publish)
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read: if request.auth != null && request.auth.uid == uid;
      allow create, update: if request.auth != null && request.auth.uid == uid;
      allow delete: if false;
    }
  }
}

## Expected
- On sign-up/sign-in, a `users/{uid}` doc is created/updated with:
  { email, subscribed:false, createdAt, updatedAt }.
- UI shows the signed-in email and a Sign out button.
