import { Fuel, CheckCircle, Clock, XCircle } from 'lucide-react'

const stats = [
  { 
    name: 'Weekly Allocation', 
    value: '50 L', 
    icon: Fuel,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  { 
    name: 'Approved Requests', 
    value: '3', 
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  { 
    name: 'Pending Approval', 
    value: '2', 
    icon: Clock,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50'
  },
  { 
    name: 'Rejected Requests', 
    value: '1', 
    icon: XCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
]

export default function FuelStats() {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Fuel Overview</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.name}
              className="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow-sm rounded-lg border border-gray-200"
            >
              <div className="flex items-center">
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}