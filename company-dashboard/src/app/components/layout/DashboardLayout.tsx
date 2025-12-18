'use client'

import { useState } from 'react'
import { 
  Menu, 
  X, 
  Fuel, 
  LayoutDashboard,
  Users,
  Settings,
  Bell,
  User
} from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard', current: true },
    { name: 'Fuel Management', icon: Fuel, href: '/dashboard/fuel', current: false },
    { name: 'Team', icon: Users, href: '/dashboard/team', current: false },
    { name: 'Settings', icon: Settings, href: '/dashboard/settings', current: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`lg:hidden ${mobileSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 z-40 flex">
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <Fuel className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold">Company Dashboard</span>
              </div>
              <nav className="mt-5 space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.current
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } group flex items-center rounded-md px-2 py-2 text-base font-medium`}
                  >
                    <item.icon className={`${
                      item.current ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                    } mr-4 h-6 w-6`} />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className={`hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col ${!sidebarOpen && 'lg:w-20'}`}>
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
          <div className="flex flex-shrink-0 items-center px-4">
            <Fuel className="h-8 w-8 text-blue-600" />
            {sidebarOpen && (
              <span className="ml-2 text-xl font-bold">Company Dashboard</span>
            )}
          </div>
          <div className="mt-5 flex flex-grow flex-col">
            <nav className="flex-1 space-y-1 px-2 pb-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.current
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } group flex items-center rounded-md px-2 py-2 text-sm font-medium`}
                >
                  <item.icon className={`${
                    item.current ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                  } mr-3 h-6 w-6`} />
                  {sidebarOpen && item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex flex-1 flex-col ${sidebarOpen ? 'lg:pl-64' : 'lg:pl-20'}`}>
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
            onClick={() => setMobileSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1"></div>
            <div className="ml-4 flex items-center lg:ml-6">
              <button
                type="button"
                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>
              <div className="relative ml-3">
                <div className="flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}