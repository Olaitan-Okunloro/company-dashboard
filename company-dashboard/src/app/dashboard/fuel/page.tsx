import DashboardLayout from '../../components/layout/DashboardLayout'
import FuelStats from '../../components/fuel/FuelStats'
import FuelApplications from '../../components/fuel/FuelApplications'
import NewRequestButton from '../../components/fuel/NewRequestButton'

export default function FuelManagementPage() {
  return (
    <DashboardLayout>
      <div className="py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Fuel Management System</h1>
            <p className="text-gray-600 mt-2">
              Apply for fuel allocations and track approval progress
            </p>
          </div>
          <NewRequestButton />
        </div>

        <FuelStats />
        <FuelApplications />
      </div>
    </DashboardLayout>
  )
}