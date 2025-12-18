import { Fuel, Calculator, Calendar, FileText, BarChart, Users } from 'lucide-react'

const applications = [
  {
    id: 1,
    name: 'Fuel Management',
    description: 'Apply for fuel, track approvals, and manage allocations',
    icon: Fuel,
    href: '/dashboard/fuel',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'Expense Tracker',
    description: 'Track and submit expense reports',
    icon: Calculator,
    href: '#',
    color: 'bg-green-500',
  },
  {
    id: 3,
    name: 'Leave Management',
    description: 'Apply for leave and track approvals',
    icon: Calendar,
    href: '#',
    color: 'bg-purple-500',
  },
  {
    id: 4,
    name: 'Reports',
    description: 'Generate and view company reports',
    icon: FileText,
    href: '#',
    color: 'bg-yellow-500',
  },
  {
    id: 5,
    name: 'Analytics',
    description: 'View company analytics and metrics',
    icon: BarChart,
    href: '#',
    color: 'bg-red-500',
  },
  {
    id: 6,
    name: 'Team Directory',
    description: 'Browse company employees and contacts',
    icon: Users,
    href: '#',
    color: 'bg-indigo-500',
  },
]

export default function AppGrid() {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Applications</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {applications.map((app) => {
          const Icon = app.icon
          return (
            <a
              key={app.id}
              href={app.href}
              className="group relative bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center">
                <div className={`${app.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                    {app.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{app.description}</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-blue-600 font-medium">
                Open application →
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}