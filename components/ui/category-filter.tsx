"use client"

/**
 * @description
 * CategoryFilter component displays a list of buttons for each unique category of KannadaEntry.
 * It allows users to filter cards by category.
 * 
 * Key features:
 * - Category Filtering: Displays buttons for each unique category.
 * - Active State: Highlights the currently selected category.
 * - All Categories Option: Includes an 'All' button to show all cards.
 * 
 * @dependencies
 * - none
 */

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string | null
  onCategorySelect: (category: string | null) => void
}

export function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategorySelect 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors
          ${activeCategory === null 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-accent/50 hover:bg-accent text-accent-foreground'}`}
        onClick={() => onCategorySelect(null)}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors
            ${activeCategory === category 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-accent/50 hover:bg-accent text-accent-foreground'}`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
} 