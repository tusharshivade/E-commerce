# Nova E-Commerce Application (3-Tier Architecture)

A modern, production-grade 3-tier E-commerce web application designed with dedicated **frontend**, **backend**, and **database** tiers, complete with automated CI/CD pipelines, Docker containerization, and AWS Elastic Beanstalk deployment.

---

## Architecture Overview

The repository is structured into distinct, clean layers:

```
e-commerce-github-actions/
├── frontend/                     # Client-side user interface
│   ├── index.html                # Responsive single-page storefront
│   ├── css/
│   │   ├── style.css             # Store styling, layouts, animations
│   │   └── cart.css              # Slide-in cart & checkout styling
│   ├── js/
│   │   └── script.js             # Cart management, catalog & handlers
│   ├── images/                   # Local images & product media
│   └── README.md
├── backend/                      # Python / Flask API server
│   ├── app.py                    # REST API routes & static asset serving
│   ├── test_app.py               # Unit tests (pytest)
│   ├── requirements.txt          # Python dependencies
│   ├── __init__.py
│   └── README.md
├── database/                     # Database schemas, seeds & migrations
│   ├── schema.sql                # Relational DDL (products, categories, users, orders)
│   ├── seed_data.sql             # Catalog seed data (44 products across 8 categories)
│   ├── init_db.py                # Database initialization script (SQLite / SQL)
│   └── README.md
├── .github/                      # GitHub Actions CI/CD workflows
├── beanstalk/                    # AWS Elastic Beanstalk deployment configs
├── app.py                        # Root entrypoint forwarding to backend.app
├── test_app.py                   # Root test runner for CI/CD
├── Dockerfile                    # Container definition
├── docker-compose.yml            # Multi-tier container orchestration
└── requirements.txt              # Root dependencies for CI/CD & Docker
```

---

## 1. Quick Start (Local Development)

### Prerequisites
- Python 3.12+
- `pip`

### Step 1: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 2: Initialize Database
```bash
python database/init_db.py
```

### Step 3: Start the Backend Server
```bash
python app.py
```
Open your browser and navigate to:
- **Storefront**: [http://localhost:8080](http://localhost:8080)
- **Health Check**: [http://localhost:8080/health](http://localhost:8080/health)
- **Products API**: [http://localhost:8080/api/products](http://localhost:8080/api/products)

---

## 2. Running Automated Tests

Run the full pytest suite from the project root:
```bash
pytest
```

Run code formatting / lint checks:
```bash
ruff check .
```

---

## 3. Docker & Docker Compose

### Run with Docker Compose
```bash
docker compose up -d
```
Access the application on [http://localhost](http://localhost).

### Build Custom Image Locally
```bash
docker build -t ecommerce-app:latest .
docker run -p 8080:8080 ecommerce-app:latest
```

---

## 4. Deploy on AWS Elastic Beanstalk (Standard Mode)

Elastic Beanstalk runs the containerized application and manages server provisioning, load balancing, and health checks.

This app ships as a Docker image on Docker Hub, so the only file required to upload is `beanstalk/docker-compose.yml`.

### Deployment Steps:
1. Sign in to AWS Console > **Elastic Beanstalk**.
2. Click **Create environment** > **Web server environment**.
3. Set application name to `ecommerce-app`.
4. Platform: **Docker** on **64bit Amazon Linux 2023**.
5. Application code: Select **Upload your code** > upload `beanstalk/docker-compose.yml` with version label `v1`.
6. Configure IAM service role and EC2 instance profile (`AWSElasticBeanstalkWebTier`).
7. Click **Submit** and wait for the environment health to turn green (**Ok**).
8. Visit the environment URL to view the live storefront.

---

## 5. GitHub Actions CI/CD Pipelines

Automated workflows included in `.github/workflows/`:
- `lint_and_test.yml`: Multi-version Python linting (`ruff`) and testing (`pytest`).
- `docker.yml` / `docker_push.yml`: Automated Docker image building and registry publishing.
- `trivy_scans.yml`: Container security vulnerability scanning.
- `secrets-scanning.yml`: Secret detection and credential leak prevention.
- `sonar_scan.yml`: Static application security testing (SAST).
- `github_pages.yml`: Automated static frontend deployment.
