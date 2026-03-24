# Sticky Notes Django Application

A full-stack CRUD application for managing personal notes with a clean, interactive user interface. This project is built using Python, Django, and SQLite, featuring a modern sticky-note aesthetic.

## Features

- **Create, Read, Update, Delete (CRUD):** Manage your sticky notes efficiently.
- **User Authentication:** Secure user login and registration.
- **Modern UI:** Built with custom HTML/CSS for a polished "sticky note" look-and-feel.

## Setup Instructions

### Prerequisites
- Python 3.8 or higher installed on your system.

### 1. Quick Start (Navigate to Directory)

```bash
cd "Sticky Notes"
```

### 2. Set up a Virtual Environment (Recommended)

```bash
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

### 3. Install Dependencies
Install Django (the project uses standard Django packages without external dependencies by default):

```bash
pip install django
```

*If there are any other dependencies added later, you can usually find them in a `requirements.txt` file.*

### 4. Apply Database Migrations
Set up the SQLite database by running the initial migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Create a Superuser (Optional)
If you want to access the Django admin panel to manage users and notes manually:

```bash
python manage.py createsuperuser
```

### 6. Run the Development Server
Start the Django development server:

```bash
python manage.py runserver
```

The application will now be running. Open a web browser and navigate to:
[http://127.0.0.1:8000/](http://127.0.0.1:8000/)

## Tech Stack

- **Backend:** Python, Django
- **Database:** SQLite3
- **Frontend:** HTML5, CSS3
