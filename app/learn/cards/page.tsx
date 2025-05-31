"use server";

/**
 * @description
 * Page for displaying Kannada learning cards. Part of the "Learn" section.
 * Fetches CSV data server-side and displays it in a grid.
 * This page is publicly accessible.
 *
 * Key features:
 * - Async Data Fetching: Loads card data with Suspense for a loading state.
 * - Grid Layout: Uses CardGrid for responsive display.
 *
 * @dependencies
 * - react: Supplies Suspense for async rendering.
 * - CardGrid: Renders cards with filtering and expanded view functionality.
 */

import { Suspense } from "react";
import { CardGrid } from "@/app/cards/_components/card-grid";

export default async function LearnCardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-foreground mb-6 text-3xl font-semibold">
        Learn Kannada Cards
      </h1>

      {/* Suspense boundary for async CSV loading */}
      <Suspense
        fallback={
          <div className="text-muted-foreground text-center">
            Loading cards...
          </div>
        }
      >
        <CardGrid />
      </Suspense>
    </div>
  );
}
