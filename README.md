# Folio-Metrics v0.1.0

Welcome to Folio-Metrics, a full-stack open-source project that serves as a live, interactive resume and showcases a modern approach to web development.

This project is more than just a static portfolio; it's a dynamic application with real-time visitor analytics, built with performance and professional practices in mind.

**[Live Demo](https://arbuz.buzz) | [Admin Panel Demo](https://arbuz.buzz/admin/login)** 
*(Note: Use `demo@example.com` / `demo123` for the admin panel)*

## ✨ Core Features (MVP v0.1.0)

-   **Interactive Resume:** A clean, modern presentation of a professional profile.
-   **Live Visitor Analytics:** A custom-built tracking system that records visits, location, session duration, and most viewed sections.
-   **Admin Dashboard:** A secure, login-protected panel (`next-auth`) to visualize all collected analytics.
-   **Internationalization (i18n):** Supports multiple languages with locale-aware routing (`next-intl`).

## 🛠️ Tech Stack

-   **Framework:** Next.js (App Router)
-   **Styling:** Tailwind CSS
-   **Database:** MariaDB with Prisma ORM
-   **Authentication:** NextAuth.js (Auth.js v5)
-   **UI:** Headless UI, FontAwesome
-   **Data Fetching:** SWR

## 🗺️ Roadmap

### 🚀 v0.2.0: Optimization & SEO
- Implement data caching strategies for the analytics API.
- Add lazy loading for heavy components in the admin dashboard (e.g., chart libraries).
- Generate `sitemap.xml` and `robots.txt` for better search engine visibility.
- Implement dynamic meta-tags for improved SEO.
- Add theme (light/dark).

### ✨ v0.3.0: Enhanced Features
- Integrate a Telegram bot for real-time visit notifications.
- Add more complex charts and metrics to the dashboard (e.g., visits by country, daily trends).
- Implement multi-language support for the admin panel.
- First set of resume templates (several ready-made designs).

### 🏆 v1.0.0: Production Ready
- Implement a full suite of tests (Unit, Integration, and E2E).
- Set up a CI/CD pipeline with GitHub Actions for automated testing and deployment.
- (Optional) Integrate a Headless CMS for managing landing page content.
- Add personal user accounts with individual dashboards and personal statistics.

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

-   Node.js (v20.x or later)
-   pnpm
-   A running MariaDB instance

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/devforthewin/folio-metrics.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd folio-metrics
    ```
3.  Install dependencies:
    ```sh
    pnpm install
    ```
4.  Set up your environment variables by copying `.env.example` to `.env` and filling in your database URL and `NEXTAUTH_SECRET`.
    ```sh
    cp .env.example .env
    ```
5.  Apply database migrations:
    ```sh
    pnpm prisma migrate dev
    ```

6. Seed the database with demo data:
    ```sh
    pnpm prisma db seed
    ```
    
7. Run the development server:
    ```sh
    pnpm dev
    ```
    

Open [http://localhost:3000](http://localhost:3000) to view the project.