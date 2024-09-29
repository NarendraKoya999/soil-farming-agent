# Soil Farming Agent Application

## Overview

The **Soil Farming Agent Application** is a web-based platform designed to help farmers and agricultural professionals manage soil and crop details effectively. The application allows administrators to manage soil and distributor data, while users can view and interact with this information to make informed farming decisions.

## Features

- **User Authentication**:
  - User Registration and Login (with Firebase).
  - Protected routes for both users and administrators.
- **Admin Dashboard**:
  - Ability to post and manage soil and distributor details.
  - Edit or update existing records in the database.
- **User Dashboard**:
  - View detailed information on soils and distributors.
  - Accessible and easy-to-navigate interface.
- **Responsive Design**:
  - Fully responsive design, adaptable to all screen sizes.
  - Interactive elements with hover animations and modern UI/UX.
- **Real-Time Data**:
  - Real-time updates using Firebase Firestore for data management.

## Technologies Used

- **Frontend**:
  - React.js (with Hooks and functional components)
  - React Router for navigation
  - Redux for global state management
  - CSS3 for styling components
- **Backend**:
  - Firebase Authentication for secure user management
  - Firebase Firestore for database operations
- **Other Tools**:
  - Webpack and Babel for module bundling and transpiling.
  - npm/Yarn for package management.

## System Architecture

The system follows a client-server architecture, with React as the frontend and Firebase providing backend services for authentication and data storage.

## Installation and Setup

### Prerequisites

- Node.js installed (>= v14.x)
- npm or Yarn for package management

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/NarendraKoya999/soil-farming-agent.git
   ```

2. Navigate to the project directory:
   ```bash
   cd soil-farming-agent
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. Create a Firebase project and add your Firebase credentials in a `.env` file:
   ```env
   REACT_APP_API_KEY=your_firebase_api_key
   REACT_APP_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_PROJECT_ID=your_firebase_project_id
   REACT_APP_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_APP_ID=your_firebase_app_id
   ```

5. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure (More files and folders are included)

```
├── src
│   ├── components
│   │   ├── Admin
│   │   │   ├── PostDistributorDetails.js
│   │   │   ├── PostSoilDetails.js
│   │   └── User
│   │       ├── ViewDistributorDetails.js
│   │       ├── ViewSoilDetails.js
│   ├── styles
│   │   ├── Navbar.css
│   │   └── Dashboard.css
│   ├── redux
│   │   ├── actions
│   │   └── reducers
│   └── firebase
│       └── firebaseConfig.js
└── .env
```

## Challenges Faced

- Aligning the hamburger menu icon correctly on mobile views.
- Centering buttons across various screen sizes.
- Maintaining a consistent design across all components.

## Future Enhancements

- User profile management and edit functionality.
- Real-time alerts and notifications for critical data updates.
- Data analytics and visualizations for better insights.
- Multi-language support.

## Contributions

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
