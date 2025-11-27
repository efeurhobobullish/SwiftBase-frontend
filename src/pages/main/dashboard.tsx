import { Pattern } from "@/components/ui";
import { 
  Search, 
  Bell, 
  User, 
  Settings, 
  LogOut,
  Truck,
  Package,
  MapPin,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Calendar,
  Filter,
  Download,
  Plus,
  MoreVertical,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Mock data
const stats = [
  {
    title: "Total Shipments",
    value: "1,248",
    change: "+12.5%",
    trend: "up",
    icon: Truck,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    title: "Delivered",
    value: "1,089",
    change: "+8.2%",
    trend: "up",
    icon: CheckCircle2,
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    title: "In Transit",
    value: "124",
    change: "-3.1%",
    trend: "down",
    icon: Clock,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  },
  {
    title: "Delayed",
    value: "35",
    change: "+5.7%",
    trend: "up",
    icon: AlertTriangle,
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  }
];

const recentShipments = [
  {
    id: "SH-7845",
    origin: "New York, NY",
    destination: "Los Angeles, CA",
    status: "delivered",
    estimatedDelivery: "2024-01-15",
    actualDelivery: "2024-01-14",
    carrier: "FedEx Ground"
  },
  {
    id: "SH-7844",
    origin: "Chicago, IL",
    destination: "Miami, FL",
    status: "in_transit",
    estimatedDelivery: "2024-01-18",
    actualDelivery: null,
    carrier: "UPS"
  },
  {
    id: "SH-7843",
    origin: "Seattle, WA",
    destination: "Boston, MA",
    status: "delayed",
    estimatedDelivery: "2024-01-12",
    actualDelivery: null,
    carrier: "USPS"
  },
  {
    id: "SH-7842",
    origin: "Denver, CO",
    destination: "Atlanta, GA",
    status: "in_transit",
    estimatedDelivery: "2024-01-16",
    actualDelivery: null,
    carrier: "DHL"
  },
  {
    id: "SH-7841",
    origin: "Austin, TX",
    destination: "Portland, OR",
    status: "delivered",
    estimatedDelivery: "2024-01-10",
    actualDelivery: "2024-01-10",
    carrier: "FedEx Express"
  }
];

const upcomingDeliveries = [
  {
    id: "SH-7846",
    destination: "San Francisco, CA",
    estimatedDelivery: "Today, 2:00 PM",
    status: "out_for_delivery"
  },
  {
    id: "SH-7847",
    destination: "Philadelphia, PA",
    estimatedDelivery: "Tomorrow, 10:00 AM",
    status: "in_transit"
  },
  {
    id: "SH-7848",
    destination: "Detroit, MI",
    estimatedDelivery: "Jan 17, 2024",
    status: "in_transit"
  }
];

const activityLog = [
  {
    id: 1,
    action: "Shipment delivered",
    description: "SH-7845 delivered to Los Angeles, CA",
    time: "2 hours ago",
    type: "success"
  },
  {
    id: 2,
    action: "Delay reported",
    description: "SH-7843 delayed due to weather conditions",
    time: "5 hours ago",
    type: "warning"
  },
  {
    id: 3,
    action: "New shipment created",
    description: "SH-7848 created for Detroit, MI",
    time: "1 day ago",
    type: "info"
  },
  {
    id: 4,
    action: "Payment received",
    description: "Invoice #INV-8452 paid successfully",
    time: "2 days ago",
    type: "success"
  }
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      delivered: { color: "bg-green-500/10 text-green-500 border-green-500/20", icon: CheckCircle2 },
      in_transit: { color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20", icon: Clock },
      delayed: { color: "bg-red-500/10 text-red-500 border-red-500/20", icon: AlertTriangle },
      out_for_delivery: { color: "bg-blue-500/10 text-blue-500 border-blue-500/20", icon: Truck }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.in_transit;
    const IconComponent = config.icon;

    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${config.color}`}>
        <IconComponent size={12} />
        {status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </span>
    );
  };

  return (
    <>
      <Pattern>
        <div className="min-h-[100dvh] flex">
          {/* Sidebar */}
          <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-line transform transition-transform duration-200 lg:translate-x-0 lg:static lg:inset-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="flex flex-col h-full">
              {/* Logo */}
              <div className="flex items-center gap-2 p-6 border-b border-line">
                <Truck className="text-main" size={28} />
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-main to-main/70">
                  LogiSwift
                </h1>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-main/10 text-main font-medium"
                >
                  <TrendingUp size={20} />
                  Dashboard
                </Link>
                <Link
                  to="/shipments"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted hover:bg-secondary hover:text-main transition-colors"
                >
                  <Package size={20} />
                  Shipments
                </Link>
                <Link
                  to="/tracking"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted hover:bg-secondary hover:text-main transition-colors"
                >
                  <MapPin size={20} />
                  Tracking
                </Link>
                <Link
                  to="/reports"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted hover:bg-secondary hover:text-main transition-colors"
                >
                  <Download size={20} />
                  Reports
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted hover:bg-secondary hover:text-main transition-colors"
                >
                  <Settings size={20} />
                  Settings
                </Link>
              </nav>

              {/* User Section */}
              <div className="p-4 border-t border-line">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <div className="w-8 h-8 bg-main/10 rounded-full center">
                    <User size={16} className="text-main" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">John Doe</p>
                    <p className="text-xs text-muted truncate">john@company.com</p>
                  </div>
                  <button className="p-1 hover:bg-secondary rounded transition-colors">
                    <LogOut size={16} className="text-muted" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col lg:ml-0">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-line">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <div className="w-6 h-6 flex flex-col justify-center gap-1">
                      <div className="w-6 h-0.5 bg-current"></div>
                      <div className="w-6 h-0.5 bg-current"></div>
                      <div className="w-6 h-0.5 bg-current"></div>
                    </div>
                  </button>
                  
                  <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
                    <input
                      type="text"
                      placeholder="Search shipments, tracking numbers..."
                      className="w-full pl-10 pr-4 py-2 border border-line rounded-full bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-main/20"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="p-2 hover:bg-secondary rounded-full transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 center">
                      3
                    </span>
                  </button>
                  <div className="w-8 h-8 bg-main/10 rounded-full center">
                    <User size={16} className="text-main" />
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 p-6">
              {/* Welcome Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold">Welcome back, John!</h1>
                  <p className="text-muted">Here's what's happening with your shipments today.</p>
                </div>
                <div className="flex gap-3 mt-4 sm:mt-0">
                  <button className="flex items-center gap-2 border border-line px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
                    <Filter size={16} />
                    Filter
                  </button>
                  <button className="flex items-center gap-2 bg-main text-white px-4 py-2 rounded-lg hover:bg-main/90 transition-colors">
                    <Plus size={16} />
                    New Shipment
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="bg-secondary/30 border border-line rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                          <IconComponent className={stat.color} size={24} />
                        </div>
                        <div className={`flex items-center gap-1 text-sm ${
                          stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {stat.trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                          {stat.change}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                      <p className="text-muted text-sm">{stat.title}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Shipments */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-secondary/30 border border-line rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold">Recent Shipments</h2>
                      <button className="text-main hover:text-main/70 transition-colors text-sm font-medium">
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      {recentShipments.map((shipment) => (
                        <div key={shipment.id} className="flex items-center justify-between p-4 border border-line rounded-lg bg-background hover:bg-secondary/50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-main/10 rounded-lg center">
                              <Package className="text-main" size={20} />
                            </div>
                            <div>
                              <div className="font-medium">{shipment.id}</div>
                              <div className="text-sm text-muted">
                                {shipment.origin} → {shipment.destination}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            {getStatusBadge(shipment.status)}
                            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                              <MoreVertical size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activity Log */}
                  <div className="bg-secondary/30 border border-line rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
                    <div className="space-y-4">
                      {activityLog.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-4 p-4 border border-line rounded-lg bg-background">
                          <div className={`w-2 h-2 mt-2 rounded-full ${
                            activity.type === 'success' ? 'bg-green-500' :
                            activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`} />
                          <div className="flex-1">
                            <div className="font-medium">{activity.action}</div>
                            <div className="text-sm text-muted">{activity.description}</div>
                          </div>
                          <div className="text-sm text-muted">{activity.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                  {/* Upcoming Deliveries */}
                  <div className="bg-secondary/30 border border-line rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-6">Upcoming Deliveries</h2>
                    <div className="space-y-4">
                      {upcomingDeliveries.map((delivery) => (
                        <div key={delivery.id} className="p-4 border border-line rounded-lg bg-background">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium">{delivery.id}</div>
                            {getStatusBadge(delivery.status)}
                          </div>
                          <div className="text-sm text-muted mb-2">{delivery.destination}</div>
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar size={14} />
                            {delivery.estimatedDelivery}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-secondary/30 border border-line rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex flex-col items-center gap-2 p-4 border border-line rounded-lg bg-background hover:bg-secondary transition-colors">
                        <Plus className="text-main" size={24} />
                        <span className="text-sm font-medium">New Shipment</span>
                      </button>
                      <button className="flex flex-col items-center gap-2 p-4 border border-line rounded-lg bg-background hover:bg-secondary transition-colors">
                        <MapPin className="text-main" size={24} />
                        <span className="text-sm font-medium">Track Package</span>
                      </button>
                      <button className="flex flex-col items-center gap-2 p-4 border border-line rounded-lg bg-background hover:bg-secondary transition-colors">
                        <Download className="text-main" size={24} />
                        <span className="text-sm font-medium">Export Data</span>
                      </button>
                      <button className="flex flex-col items-center gap-2 p-4 border border-line rounded-lg bg-background hover:bg-secondary transition-colors">
                        <Settings className="text-main" size={24} />
                        <span className="text-sm font-medium">Settings</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Pattern>
    </>
  );
}