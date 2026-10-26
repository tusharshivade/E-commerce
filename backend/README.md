# Backend Tier

This directory contains the Python / Flask REST API service for the Nova E-Commerce platform.

## Directory Structure

- `app.py`: Main Flask application, routing, API endpoints, and static asset serving for the frontend.
- `test_app.py`: Automated pytest suite testing health check, home page delivery, product listing, and order creation.
- `requirements.txt`: Python package requirements.
- `__init__.py`: Package initialization.

## Available Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Serves the frontend single-page application (`frontend/index.html`) |
| `GET` | `/health` | Health check endpoint returning `{"status":"ok"}` (used by Docker & Elastic Beanstalk) |
| `GET` | `/api/health` | Comprehensive API status including database connectivity check |
| `GET` | `/api/products` | Returns all catalog products or filters by `?category=` from database |
| `GET` | `/api/categories` | Returns catalog categories |
| `POST` | `/api/orders` | Accepts checkout order data and persists to database |
| `GET` | `/<path:filename>` | Serves static assets directly from `frontend/` |

## Running Locally

```bash
# Install dependencies
pip install -r requirements.txt

# Start Flask server
python app.py
```

The service will run on `http://127.0.0.1:8080`.

## Running Tests

```bash
pytest test_app.py
```
