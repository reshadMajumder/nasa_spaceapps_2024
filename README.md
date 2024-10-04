# NASA SpaceApps 2024 Project "Sling Ring"

This project is a fullstack web application built for the NASA SpaceApps Challenge 2024. It combines a Django REST API backend and a React JS frontend styled using Bootstrap CDN.
## view live project
Frontend: [https://nasaspaceapps2024-production-6dc8.up.railway.app/](https://nasaspaceapps2024-production-6dc8.up.railway.app/).
Backend:[https://nasaspaceapps2024-production.up.railway.app/](https://nasaspaceapps2024-production.up.railway.app/).

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Folder Structure](#folder-structure)
5. [Prerequisites](#prerequisites)
6. [Installation](#installation)
7. [Running the Application](#running-the-application)
8. [Frontend Details](#frontend-details)
9. [Deployment](#deployment)
10. [Contributing](#contributing)


## Project Overview

This application leverages the Django Rest Framework for the backend and React JS for the frontend to create an interactive platform. The project is designed to address challenges related to exoplanet exploration and research. It includes a series of APIs that communicate with a responsive React interface to provide real-time data visualization and interaction.

## Features

- **Backend**: Django REST API for data handling and processing.
- **Frontend**: React JS for a dynamic user interface.
- **Styling**: Bootstrap CDN for responsive design and layout.
- **Environment Management**: Python virtual environment for package management.

## Tech Stack

- **Backend**: Django, Django REST Framework
- **Frontend**: React JS, Bootstrap CDN
- **Database**: SQLite (can be switched to PostgreSQL or other databases)
- **Deployment**: Railway, GitHub for version control

## Folder Structure

```plaintext
nasa_spaceapps_2024/
│
├── core/           # Django API backend
│   ├── core/
│   ├── manage.py
│   └── .......
│
├── env/            # Python virtual environment 
│
├── frontend/       # React JS frontend
│   ├── public/
│   ├── src/
│   └── .......
│
└── README.md       # Documentation file
```

## Prerequisites

Ensure you have the following installed before setting up the project:

- **Python 3.8+**
- **Node.js 14+**
- **npm or yarn**
- **Django 3+**
- **Django REST Framework**
- **React 17+**
- **Git**

## Installation

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/reshadMajumder/nasa_spaceapps_2024.git
   cd nasa_spaceapps_2024/core
   ```

2. Create and activate the virtual environment:
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   ```

3. Install the backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run migrations and create a superuser:
   ```bash
   python manage.py migrate
   python manage.py createsuperuser(optional)
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

## Running the Application

### Starting the Backend Server

From the `core` directory, run:
```bash
python manage.py runserver
```

The backend will be available at [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

### Starting the Frontend Server

From the `frontend` directory, run:
```bash
npm start
```

The frontend will be available at [http://localhost:3000/](http://localhost:3000/).



## Frontend Details

The frontend is built with React, using Bootstrap for styling. The folder structure is as follows:

- `src/components` - Contains all the React components.
- `src/Screens` - Includes the main pages/routes of the application.
- `src/Services` - Includes the api url variable .
- `src/assets/images` - Includes the images .
- `src/App.js` - The main application file.
- `public/index.html` - HTML template for React.

## Deployment

The application can be deployed using platforms like Railway. Follow these steps:

1. Create a new Railway project.
2. Connect your GitHub repository.
3. Set up a build command for React (`npm run build`).
4. Deploy the backend and frontend together.

For detailed deployment steps, refer to the [Railway deployment guide](https://docs.railway.app/).

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to your branch and create a pull request.




