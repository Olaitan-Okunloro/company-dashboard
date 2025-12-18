import DashboardLayout from '../components/layout/DashboardLayout'
import AppGrid from '../components/dashboard/AppGrid'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="py-4">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your company dashboard</p>
        
        <div className="mt-8">
          <AppGrid />
        </div>
      </div>
    </DashboardLayout>
  )
}