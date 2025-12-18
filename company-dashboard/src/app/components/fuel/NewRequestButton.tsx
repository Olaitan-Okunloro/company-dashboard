'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'

export default function NewRequestButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Plus className="h-4 w-4 mr-2" />
        New Fuel Request
      </button>

      {/* Modal will be added in next step */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Modal content will go here */}
        </div>
      )}
    </>
  )
}