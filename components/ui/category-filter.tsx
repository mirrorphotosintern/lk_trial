"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"

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
  selectedCategories: string[]
  onCategoriesChange: (categories: string[]) => void
}

export function CategoryFilter({
  categories,
  selectedCategories,
  onCategoriesChange
}: CategoryFilterProps) {
  const [open, setOpen] = React.useState(false)

  const handleSelect = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category]
    onCategoriesChange(updatedCategories)
  }

  const handleRemove = (category: string) => {
    onCategoriesChange(selectedCategories.filter(c => c !== category))
  }

  const handleClear = () => {
    onCategoriesChange([])
  }

  return (
    <div className="flex flex-col gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[300px] justify-between"
          >
            {selectedCategories.length === 0
              ? "Select categories..."
              : `${selectedCategories.length} selected`}
            <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search categories..." />
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup className="max-h-[300px] overflow-auto">
              {categories.map(category => (
                <CommandItem
                  key={category}
                  onSelect={() => handleSelect(category)}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      selectedCategories.includes(category)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {category}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCategories.map(category => (
            <Badge
              key={category}
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1"
            >
              {category}
              <button
                onClick={() => handleRemove(category)}
                className="ring-offset-background focus:ring-ring ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-2"
              >
                <X className="size-3" />
                <span className="sr-only">Remove {category}</span>
              </button>
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="h-7 px-2 text-xs"
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  )
}
