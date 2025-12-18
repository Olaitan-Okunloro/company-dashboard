import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  FileText,
  User,
  Calendar
} from 'lucide-react'

const applications = [
  {
    id: 'F-2024-001',
    date: '2024-01-15',
    liters: 25,
    vehicle: 'Toyota Camry',
    status: 'pending',
    statusText: 'Pending Management Approval',
    manager: 'John Doe',
    currentStep: 1,
    totalSteps: 4,
  },
  {
    id: 'F-2024-002',
    date: '2024-01-14',
    liters: 30,
    vehicle: 'Ford Ranger',
    status: 'approved',
    statusText: 'Approved - Ready for Discharge',
    manager: 'Jane Smith',
    currentStep: 3,
    totalSteps: 4,
  },
  {
    id: 'F-2024-003',
    date: '2024-01-13',
    liters: 20,
    vehicle: 'Honda Civic',
    status: 'rejected',
    statusText: 'Rejected by Management',
    manager: 'Robert Johnson',
    currentStep: 1,
    totalSteps: 4,
  },
]

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
}

const statusIcons = {
  pending: Clock,
  approved: CheckCircle,
  rejected: XCircle,
}

export default function FuelApplications() {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Recent Fuel Requests</h2>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View all requests →
        </button>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Request ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {applications.map((app) => {
                const StatusIcon = statusIcons[app.status as keyof typeof statusIcons]
                return (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{app.id}</div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {app.date}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        <span className="font-medium">{app.liters}L</span> for {app.vehicle}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <User className="h-3 w-3 mr-1" />
                        {app.manager}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[app.status as keyof typeof statusColors]}`}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {app.statusText}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${(app.currentStep / app.totalSteps) * 100}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-xs text-gray-500">
                          Step {app.currentStep} of {app.totalSteps}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        View
                      </button>
                      {app.status === 'pending' && (
                        <button className="text-red-600 hover:text-red-900">
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}