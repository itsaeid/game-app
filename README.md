# 🎮 Mini Game Store – RAWG API (Next.js)

A mini e-commerce style game store built with **Next.js (App Router)**, powered by the **RAWG Video Games Database API**.  
This project demonstrates clean API architecture, filtering, pagination, dynamic routing, and modern UI development using shadcn/ui and Tailwind CSS.

---

## 🚀 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Axios**
- **SWR**
- **RAWG API**

---

## 📦 Features

### ✅ Game Listing
- Fetch games from RAWG API
- Search functionality
- Ordering (rating, release date)
- Dynamic filtering via URL search params
- Pagination with shadcn UI

### ✅ Game Details Page
- Dynamic route: `/games/[id]`
- Game information:
  - Name
  - Description (HTML rendered safely)
  - Rating
  - Release date
  - Platforms
  - Genres
- Screenshots gallery (`/games/{id}/screenshots`)
- Community reactions display

### ✅ Pagination
- Page-based navigation
- URL-driven state
- Fully integrated with SWR
- Refetch on page change
- Smooth scroll to top on page switch

---


---

## 🔑 Environment Variables

Create a `.env.local` file in the root:

NEXT_PUBLIC_RAWG_BASE_URL=https://api.rawg.io/api
NEXT_PUBLIC_RAWG_API_KEY=your_api_key_here



> You must obtain an API key from RAWG and include it in requests.

---

## 🔌 API Architecture

### Axios Instance

`lib/api.ts`

- Centralized base URL
- Reusable axios instance

### Fetch Layer

`lib/game.ts`

- `getGames(query)`
- `getGameById(id)`
- `getGameScreenshots(id)`

All data fetching logic is separated from UI components.

---

## 🔎 Filtering Architecture

Filtering is managed using:

- `useSearchParams`
- `useRouter`
- Custom hook: `useProductFilter`

State is synchronized with URL parameters:

- `search`
- `ordering`
- `page`

This ensures:
- Shareable URLs
- Back/forward navigation support
- Automatic SWR refetch on change

---

## 🔄 Pagination Flow

1. `page` is stored in URL
2. `useProductFilter` reads it
3. SWR key changes when page changes
4. Data refetches automatically
5. `totalPages = Math.ceil(count / page_size)`

---

## 🛠 Installation

```bash
git clone <repo-url>
cd project-name
npm install

## Run development server

npm run dev


