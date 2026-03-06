# Academaniac

A full-stack web platform that helps students predict their university admission chances and discover suitable institutions based on academic performance.

---

## Screenshots

### Home Page
> The landing page showcases destination countries with imagery, giving users an immediate feel for the platform. From here, users can browse by country or navigate to login and sign up.
![Home Page](/pictures/homepage.png)

### Sign Up / Login
> New users register with their email and receive a verification code before their account is activated. Returning users log in with email and password. Password reset is supported via email.

![Login Page](/pictures/login.png)

### Dashboard
> After logging in, users land on their personal dashboard showing their academic profile — CGPA, GRE scores, target country, and current university. This serves as the home base for all features.

![Dashboard](/pictures/dashboard.png)

### Find Universities
> Users enter their academic details (CGPA, GRE scores, desired department) and the ML model returns a list of matching universities ranked by admission probability. Each result shows the university name, country, and predicted chance.

![University Search](/pictures/university_selection.png)

### University Details
> Clicking a university opens a detail page that pulls live academic information from Wikipedia — faculty, programs, rankings, and more. Users can add the university to their wishlist from here.


### Wishlist
> A personal list of saved universities. Users can review their shortlisted institutions, compare options, and remove entries they're no longer interested in.

![Wishlist](/pictures/wishlist.png)

### Edit Profile
> Users can update their academic information at any time — name, current university, CGPA, GRE scores, target country, and profile photo.

![Edit Profile](/pictures/edit_profile.png)

### Community
> A community space where students can interact, share experiences, and discuss university applications.

---

## Features

- **Admission Prediction** — Pre-trained scikit-learn models estimate your admission probability based on CGPA, GRE scores, and target department.
- **University Discovery** — Browse and filter universities by country and department from a curated database.
- **Wishlist** — Save universities you're interested in and manage your shortlist.
- **Live University Info** — Academic details (programs, faculty, rankings) are scraped in real-time from Wikipedia.
- **User Profiles** — Store your academic background, test scores, and target country in one place.
- **Authentication** — Email-verified registration, session-based login, and password reset via Gmail.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, React Router v6, Bootstrap 5 |
| Backend | Flask 2.2.5 (Python 3.9) |
| Database | SQLite via SQLAlchemy |
| ML | scikit-learn, pandas, joblib |
| Scraping | BeautifulSoup4, requests |
| Email | Flask-Mail (Gmail SMTP) |
| Containerization | Docker, Docker Compose |

---

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) and Docker Compose (recommended)
- **Or** Python 3.9+ and Node.js 18+ for manual setup

### Run with Docker (Recommended)

```bash
git clone https://github.com/ShahrinHossain/Academaniac.git
cd Academaniac
docker-compose up
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

### Manual Setup

**Backend**
```bash
cd Academaniac-backend
pip install -r requirements.txt
flask run --host=0.0.0.0 --port 5000
```

**Frontend**
```bash
cd Academaniac-frontend
npm install
npm run dev
```

---

## Project Structure

```
Academaniac/
├── Academaniac-backend/
│   ├── prediction_package/     # ML models and training scripts
│   │   └── saved_models/       # Pre-trained scikit-learn models
│   ├── app.py                  # Flask app entry point
│   ├── models.py               # SQLAlchemy database models
│   ├── auth.py                 # Auth blueprint (login, signup, verify)
│   ├── user.py                 # User profile blueprint
│   ├── prediction.py           # Admission prediction API
│   ├── university.py           # University data API
│   ├── wishlist.py             # Wishlist CRUD
│   ├── uni_scrape.py           # Wikipedia scraper
│   └── requirements.txt
├── Academaniac-frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Hero/           # Landing page
│   │   │   ├── Navbar/         # Navigation
│   │   │   ├── View/           # Login, Signup, University details
│   │   │   ├── dashboard/      # User dashboard and profile
│   │   │   └── community/      # Community features
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── docker-compose.yml
```

---

## API Endpoints

| Blueprint | Route | Method | Description |
|-----------|-------|--------|-------------|
| auth | `/auth/login` | POST | User login |
| auth | `/auth/signup` | POST | User registration |
| auth | `/auth/verify` | POST | Email verification |
| user | `/user/` | GET | Get user profile |
| user | `/user/update` | POST | Update profile |
| prediction | `/prediction/get` | GET | Get admission probability |
| university | `/university/` | GET | List universities |
| university | `/university/dept` | GET | Get departments |
| wishlist | `/wishlist/get-info` | GET | Get user wishlist |
| wishlist | `/wishlist/post` | POST | Add to wishlist |
| uni_scrape | `/uni_scrape/scrape` | POST | Scrape university info |

---

## Machine Learning

The prediction engine uses pre-trained scikit-learn models to estimate admission probability based on:

- **CGPA** — Undergraduate GPA
- **GRE Scores** — Verbal, Quantitative, Writing
- **Department** — Program-specific models

Models are stored in `Academaniac-backend/prediction_package/saved_models/` and loaded via joblib at runtime.

---

## Team

**Team TaranTulas** — Final project, Department of CSE, IUT

| Name | Student ID | GitHub |
|------|-----------|--------|
| Shahrin Hossain | 210041125 | [@ShahrinHossain](https://github.com/ShahrinHossain) |
| Sadman Ahmed Siam | 210041135 | [@Sadman-Rahman-135](https://github.com/Sadman-Rahman135) |
| Md. Abu Bakor Siddique | 210041137 | [@AbDhrubo](https://github.com/AbDhrubo) |
| Sadman Rahman | 210041143 | [@Sadman7890](https://github.com/Sadman7890) |
