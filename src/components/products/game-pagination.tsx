"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface Props {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function GamePagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null

  return (
    <Pagination className="mt-10">
      <PaginationContent>

        <PaginationItem>
          <PaginationPrevious
            onClick={() =>
              currentPage > 1 && onPageChange(currentPage - 1)
            }
          />
        </PaginationItem>

        {[...Array(totalPages)].slice(0, 5).map((_, i) => {
          const pageNumber = i + 1

          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                isActive={currentPage === pageNumber}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        <PaginationItem>
          <PaginationNext
            onClick={() =>
              currentPage < totalPages &&
              onPageChange(currentPage + 1)
            }
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  )
}
