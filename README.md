# Folio-Metrics v0.3.0

**Folio-Metrics** is a professional-grade open-source portfolio built with **Next.js 15**. This project is designed as an architecture showcase, moving beyond a simple CV to demonstrate production-ready engineering patterns, data persistence, and high-performance metrics.

**[Live Demo](https://arbuz.buzz) | [Admin Panel](https://arbuz.buzz/admin/login)** 
> Demo access is enabled via environment configuration.
> Credentials are not hardcoded in the source code.

## ✨ Core Features

* **Hybrid Analytics Engine:** Powered by the **Repository Pattern**. The system automatically switches between `LocalStorage` (Demo mode) and `PostgreSQL/Supabase` (Production) without modifying business logic.
* **Concurrency Management:** Implements the **Web Locks API** to prevent data race conditions when multiple browser tabs are recording metrics simultaneously.
* **Smart Data Orchestration:** Features a service layer with **"Time-shifting"** logic — historical mock data is automatically rejuvenated to the current date, ensuring vibrant and relevant charts in the demo dashboard.
* **Privacy-First Tracking:** Custom-built `SectionObserver` for engagement metrics, avoiding intrusive third-party cookies.
* **Performance-Driven:** Optimized for Core Web Vitals and Lighthouse metrics (95+ in controlled environments). Perfectly balancing aesthetics and accessibility. Utilizes **Dynamic Imports** and lazy loading for heavy visualization libraries (ECharts).
---

## 🧱 Architecture

The project is structured using **Feature-Sliced Design (FSD)** with strict layer boundaries:

- **app** — routing, providers, entry points
- **widgets** — page-level UI composition
- **features** — user interactions (e.g. tracking, auth actions)
- **entities** — business logic and domain models (analytics, users)
- **shared** — reusable infrastructure (API, utils, database)

### Key Rules

- No upward imports between layers
- `shared` contains no business logic
- `entities` encapsulate domain logic
- `features` represent user intent
- `widgets` compose UI without owning business logic

## 📊 Architecture & Patterns

The project follows **Clean Architecture** and **Dependency Inversion** (DI) principles, strictly decoupling the UI from infrastructure details.

### How it works:
1.  **Interface (`IMetricsRepository`)**: Defines a strict contract for data persistence.
2.  **Strategy Injection**: The `AnalyticsProvider` detects the environment and injects the appropriate implementation:
    * `LocalStorageMetricsRepository`: For standalone browser-only operation.
    * `HttpMetricsRepository`: For client-to-server network communication in Production.
    * `NoopMetricsRepository`: Ensures hydration stability during SSR.
3.  **MetricsService**: Acts as an orchestrator, preparing and filtering data for the visualization processors.

---

## ⚖️ Trade-offs & Limitations

This project intentionally makes several trade-offs to balance simplicity and production-readiness:

- **Rate limiting** is implemented using an in-memory LRU cache  
  → suitable for single-instance deployments, but should be replaced with Redis/Upstash in distributed environments

- **Analytics storage** switches between LocalStorage and PostgreSQL  
  → simplifies demo setup, but introduces different consistency guarantees

- **Demo mode** disables strict persistence and uses mock data  
  → improves UX for reviewers, but differs from production behavior

- **Logging** is environment-aware  
  → verbose in development, minimal in production

- **Supabase client support is optional**  
  → included for extensibility, not required for core functionality

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router), TypeScript.
* **Architecture:** Feature-Sliced Design (FSD).
* **Data Layer:** Prisma ORM, PostgreSQL (Supabase), Web Locks API.
* **Auth:** Auth.js v5 (Edge-compatible, JWT Strategy, DB-less sessions).
* **Visualization:** Apache ECharts.
* **i18n:** Full multi-language support via `next-intl`.

---

## 🔍 How to Review This Project

If you are evaluating this project:

1. Start from `app/` to understand routing and providers
2. Explore `widgets/admin/dashboard` for UI composition
3. Check `entities/analytics` for domain logic and metrics processing
4. Review `features/analytics` for tracking behavior
5. Inspect `shared` for infrastructure (API, Prisma, utilities)

Key areas of interest:
- Repository pattern implementation
- MetricsService orchestration
- Feature-Sliced Design boundaries
- Demo vs production behavior

## 🔐 Demo Access

The admin panel includes a demo login for portfolio review.
Demo credentials are **not stored in the repository** and must be provided via environment variables:

- `SECRET_DEMO_USER`
- `SECRET_DEMO_PASSWORD`

If these variables are not set, demo login will be disabled.
---

## 🚀 Getting Started

### "Zero-Config" Development
The project is designed to run out-of-the-box in demo mode without requiring a database setup.

1.  **Clone & Install:**
    ```sh
    git clone [https://github.com/devforthewin/folio-metrics.git](https://github.com/devforthewin/folio-metrics.git)
    cd folio-metrics
    pnpm install
    ```

2.  **Run Locally:**
    ```sh
    pnpm dev
    ```

### Production Mode
To enable the full PostgreSQL/Supabase suite, create a `.env` file based on `.env.example`:
```env
NEXT_PUBLIC_ANALYTICS_MODE=prod
DATABASE_URL="postgresql://user:password@host:port/db"