
# Rahkaran API

This repository is a reverse-engineered implementation of the Rahkaran ERP system API, widely used in Iran. The ERP app of Rahkaran was decompiled to provide access to its backend services.

**Note**: This project is intended for educational purposes only. Please respect software licensing agreements and intellectual property laws.

---

## 📜 Table of Contents (English)

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Docker Support](#docker-support)
- [How to Use](#how-to-use)
  - [Example: Get Customer Categories](#example-get-customer-categories)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Rahkaran is a popular ERP solution in Iran used by businesses to manage internal processes. This project exposes Rahkaran's API by reverse-engineering the ERP app to provide access to the backend.

### Disclaimer

This project is purely for research and educational purposes. Ensure compliance with all relevant laws before using this in production.

## Features

- Reverse-engineered Rahkaran API
- Dockerized for easy deployment

## Getting Started

### Prerequisites

- Java 8 or higher
- Docker and Docker Compose (optional but recommended)
- Basic knowledge of REST APIs

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/amirhooshmand/rahkaran-api.git
   cd rahkaran-api
   ```

2. Set up environment variables by creating a `.env` file in the root directory.

### Running the Application

#### 1. Local Java Setup

```bash
javac -d ./build src/Main.java
java -cp ./build Main
```

#### 2. Docker Setup

1. Build and run the Docker containers:

   ```bash
   docker-compose up --build
   ```

2. Access the service at `http://localhost:8080`.

## Environment Variables

Create a `.env` file with the following variables:

```bash
RAHKARAN_URL=https://rahkaran.example.com
RAHKARAN_USERNAME=your_user_name
RAHKARAN_PASSWORD=your_password
RAHKARAN_SALES_OFFICE_ID=your_sales_office
```

## Docker Support

The project uses Docker to manage the RSA and proxy services. Run the following to start the containers:

```bash
docker-compose up --build
```

## How to Use

After starting the proxy, you can interact with Rahkaran’s API through the following examples.

### Example: Get Customer Categories

To get customer categories from Rahkaran, call the following URL:

```bash
http://localhost:8182/api/DSD/API/sales.svc/getCustomerCategories/1
```

This will return a list of customer categories from the ERP system.

## Contributing

We welcome contributions. Please submit a pull request with detailed descriptions.

## License

This project is licensed under the [MIT License](LICENSE).
