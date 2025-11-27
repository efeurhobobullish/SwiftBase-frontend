import { Pattern } from "@/components/ui";
import { 
  Search, 
  Plus,
  Download,
  MoreVertical,
  Truck,
  Package,
  MapPin,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Edit,
  ChevronDown,
  Building
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Mock data
const shipments = [
  {
    id: "SH-7845",
    origin: "New York, NY",
    destination: "Los Angeles, CA",
    status: "delivered",
    estimatedDelivery: "2024-01-15",
    actualDelivery: "2024-01-14",
    carrier: "FedEx Ground",
    weight: "15.2 kg",
    dimensions: "40×30×25 cm",
    value: "$1,250.00",
    customer: "TechCorp Inc.",
    createdAt: "2024-01-10"
  },
  {
    id: "SH-7844",
    origin: "Chicago, IL",
    destination: "Miami, FL",
    status: "in_transit",
    estimatedDelivery: "2024-01-18",
    actualDelivery: null,
    carrier: "UPS",
    weight: "8.7 kg",
    dimensions: "35×25×20 cm",
    value: "$850.00",
    customer: "Global Supplies",
    createdAt: "2024-01-11"
  },
  {
    id: "SH-7843",
    origin: "Seattle, WA",
    destination: "Boston, MA",
    status: "delayed",
    estimatedDelivery: "2024-01-12",
    actualDelivery: null,
    carrier: "USPS",
    weight: "22.1 kg",
    dimensions: "50×40×30 cm",
    value: "$2,100.00",
    customer: "Ocean Imports",
    createdAt: "2024-01-09"
  },
  {
    id: "SH-7842",
    origin: "Denver, CO",
    destination: "Atlanta, GA",
    status: "in_transit",
    estimatedDelivery: "2024-01-16",
    actualDelivery: null,
    carrier: "DHL",
    weight: "5.3 kg",
    dimensions: "25×20×15 cm",
    value: "$450.00",
    customer: "Mountain Gear",
    createdAt: "2024-01-12"
  },
  {
    id: "SH-7841",
    origin: "Austin, TX",
    destination: "Portland, OR",
    status: "delivered",
    estimatedDelivery: "2024-01-10",
    actualDelivery: "2024-01-10",
    carrier: "FedEx Express",
    weight: "12.8 kg",
    dimensions: "38×28×22 cm",
    value: "$980.00",
    customer: "TechStart LLC",
    createdAt: "2024-01-07"
  },
  {
    id: "SH-7840",
    origin: "San Francisco, CA",
    destination: "Houston, TX",
    status: "in_transit",
    estimatedDelivery: "2024-01-19",
    actualDelivery: null,
    carrier: "UPS",
    weight: "18.5 kg",
    dimensions: "45×35×28 cm",
    value: "$1,650.00",
    customer: "Bay Area Exports",
    createdAt: "2024-01-13"
  },
  {
    id: "SH-7839",
    origin: "Phoenix, AZ",
    destination: "Detroit, MI",
    status: "delivered",
    estimatedDelivery: "2024-01-11",
    actualDelivery: "2024-01-11",
    carrier: "FedEx Ground",
    weight: "7.2 kg",
    dimensions: "30×25×18 cm",
    value: "$620.00",
    customer: "Desert Traders",
    createdAt: "2024-01-06"
  },
  {
    id: "SH-7838",
    origin: "Philadelphia, PA",
    destination: "Charlotte, NC",
    status: "delayed",
    estimatedDelivery: "2024-01-13",
    actualDelivery: null,
    carrier: "USPS",
    weight: "25.8 kg",
    dimensions: "55×42×35 cm",
    value: "$2,850.00",
    customer: "East Coast Logistics",
    createdAt: "2024-01-08"
  }
];

const carriers = ["All Carriers", "FedEx", "UPS", "DHL", "USPS"];
const statuses = ["All Status", "Delivered", "In Transit", "Delayed", "Out for Delivery"];

export default function Shipments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCarrier, setSelectedCarrier] = useState("All Carriers");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedShipments, setSelectedShipments] = useState<string[]>([]);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      delivered: { 
        color: "bg-green-500/10 text-green-500 border-green-500/20", 
        icon: CheckCircle2,
        label: "Delivered"
      },
      in_transit: { 
        color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20", 
        icon: Clock,
        label: "In Transit"
      },
      delayed: { 
        color: "bg-red-500/10 text-red-500 border-red-500/20", 
        icon: AlertTriangle,
        label: "Delayed"
      },
      out_for_delivery: { 
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20", 
        icon: Truck,
        label: "Out for Delivery"
      }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.in_transit;
    const IconComponent = config.icon;

    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${config.color}`}>
        <IconComponent size={12} />
        {config.label}
      </span>
    );
  };

  const filteredShipments = shipments.filter(shipment => {
    const matchesSearch = 
      shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.destination.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCarrier = selectedCarrier === "All Carriers" || 
      shipment.carrier.toLowerCase().includes(selectedCarrier.toLowerCase());
    
    const matchesStatus = selectedStatus === "All Status" || 
      shipment.status === selectedStatus.toLowerCase().replace(' ', '_');

    return matchesSearch && matchesCarrier && matchesStatus;
  });

  const sortedShipments = [...filteredShipments].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case "oldest":
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case "value_high":
        return parseFloat(b.value.replace('$', '').replace(',', '')) - parseFloat(a.value.replace('$', '').replace(',', ''));
      case "value_low":
        return parseFloat(a.value.replace('$', '').replace(',', '')) - parseFloat(b.value.replace('$', '').replace(',', ''));
      default:
        return 0;
    }
  });

  const toggleSelectShipment = (shipmentId: string) => {
    setSelectedShipments(prev =>
      prev.includes(shipmentId)
        ? prev.filter(id => id !== shipmentId)
        : [...prev, shipmentId]
    );
  };

  const toggleSelectAll = () => {
    setSelectedShipments(
      selectedShipments.length === sortedShipments.length
        ? []
        : sortedShipments.map(s => s.id)
    );
  };

  return (
    <>
      <Pattern>
        <div className="min-h-[100dvh] flex">
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-line">
              <div className="flex items-center justify-between p-6">
                <div>
                  <h1 className="text-2xl font-bold">Shipments</h1>
                  <p className="text-muted">Manage and track all your shipments</p>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    to="/dashboard"
                    className="text-muted hover:text-main transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button className="flex items-center gap-2 bg-main text-white px-4 py-2 rounded-lg hover:bg-main/90 transition-colors">
                    <Plus size={16} />
                    New Shipment
                  </button>
                </div>
              </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 p-6">
              {/* Filters and Search */}
              <div className="bg-secondary/30 border border-line rounded-xl p-6 mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  {/* Search */}
                  <div className="lg:col-span-2">
                    <label className="text-sm font-medium mb-2 block">Search Shipments</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
                      <input
                        type="text"
                        placeholder="Search by ID, customer, location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-line rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-main/20"
                      />
                    </div>
                  </div>

                  {/* Carrier Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Carrier</label>
                    <div className="relative">
                      <select
                        value={selectedCarrier}
                        onChange={(e) => setSelectedCarrier(e.target.value)}
                        className="w-full pl-3 pr-10 py-2 border border-line rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-main/20 appearance-none"
                      >
                        {carriers.map(carrier => (
                          <option key={carrier} value={carrier}>{carrier}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted pointer-events-none" size={16} />
                    </div>
                  </div>

                  {/* Status Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Status</label>
                    <div className="relative">
                      <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="w-full pl-3 pr-10 py-2 border border-line rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-main/20 appearance-none"
                      >
                        {statuses.map(status => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted pointer-events-none" size={16} />
                    </div>
                  </div>
                </div>

                {/* Secondary Filters */}
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="text-sm border border-line rounded-lg px-3 py-1 bg-background focus:outline-none focus:ring-2 focus:ring-main/20"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="value_high">Value: High to Low</option>
                      <option value="value_low">Value: Low to High</option>
                    </select>
                  </div>

                  <div className="flex-1"></div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted">
                      {filteredShipments.length} shipments found
                    </span>
                    <button className="flex items-center gap-2 border border-line px-3 py-1 rounded-lg hover:bg-secondary transition-colors text-sm">
                      <Download size={14} />
                      Export
                    </button>
                  </div>
                </div>
              </div>

              {/* Shipments Table */}
              <div className="bg-secondary/30 border border-line rounded-xl overflow-hidden">
                {/* Table Header */}
                <div className="bg-background border-b border-line p-4">
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedShipments.length === sortedShipments.length && sortedShipments.length > 0}
                        onChange={toggleSelectAll}
                        className="rounded border-line text-main focus:ring-main/20"
                      />
                      <span className="text-sm font-medium">Select All</span>
                    </label>
                    
                    {selectedShipments.length > 0 && (
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <span>{selectedShipments.length} selected</span>
                        <button className="text-red-500 hover:text-red-600 transition-colors">
                          Archive
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Shipments List */}
                <div className="divide-y divide-line">
                  {sortedShipments.map((shipment) => (
                    <div key={shipment.id} className="bg-background hover:bg-secondary/30 transition-colors">
                      <div className="p-4">
                        <div className="flex items-start gap-4">
                          {/* Checkbox */}
                          <input
                            type="checkbox"
                            checked={selectedShipments.includes(shipment.id)}
                            onChange={() => toggleSelectShipment(shipment.id)}
                            className="mt-2 rounded border-line text-main focus:ring-main/20"
                          />

                          {/* Shipment Icon */}
                          <div className="w-12 h-12 bg-main/10 rounded-lg center flex-shrink-0">
                            <Package className="text-main" size={24} />
                          </div>

                          {/* Shipment Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-lg">{shipment.id}</h3>
                              {getStatusBadge(shipment.status)}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                              <div>
                                <div className="flex items-center gap-2 text-muted mb-1">
                                  <MapPin size={14} />
                                  <span>Route</span>
                                </div>
                                <div>{shipment.origin} → {shipment.destination}</div>
                              </div>

                              <div>
                                <div className="flex items-center gap-2 text-muted mb-1">
                                  <Truck size={14} />
                                  <span>Carrier & Delivery</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>{shipment.carrier}</span>
                                  <span className="text-muted">•</span>
                                  <span>{shipment.estimatedDelivery}</span>
                                </div>
                              </div>

                              <div>
                                <div className="flex items-center gap-2 text-muted mb-1">
                                  <Building size={14} />
                                  <span>Customer</span>
                                </div>
                                <div>{shipment.customer}</div>
                              </div>

                              <div>
                                <div className="flex items-center gap-2 text-muted mb-1">
                                  <span>Value & Weight</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{shipment.value}</span>
                                  <span className="text-muted">•</span>
                                  <span>{shipment.weight}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button 
                              className="p-2 hover:bg-secondary rounded-lg transition-colors"
                              title="View Details"
                            >
                              <Eye size={16} />
                            </button>
                            <button 
                              className="p-2 hover:bg-secondary rounded-lg transition-colors"
                              title="Edit Shipment"
                            >
                              <Edit size={16} />
                            </button>
                            <button 
                              className="p-2 hover:bg-secondary rounded-lg transition-colors"
                              title="More Options"
                            >
                              <MoreVertical size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Empty State */}
                {sortedShipments.length === 0 && (
                  <div className="text-center py-12">
                    <Package className="mx-auto text-muted mb-4" size={48} />
                    <h3 className="text-lg font-medium mb-2">No shipments found</h3>
                    <p className="text-muted mb-4">
                      {searchTerm || selectedCarrier !== "All Carriers" || selectedStatus !== "All Status" 
                        ? "Try adjusting your filters to find what you're looking for."
                        : "Get started by creating your first shipment."
                      }
                    </p>
                    {!searchTerm && selectedCarrier === "All Carriers" && selectedStatus === "All Status" && (
                      <button className="flex items-center gap-2 bg-main text-white px-4 py-2 rounded-lg hover:bg-main/90 transition-colors mx-auto">
                        <Plus size={16} />
                        Create First Shipment
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Pagination */}
              {sortedShipments.length > 0 && (
                <div className="flex items-center justify-between mt-6">
                  <div className="text-sm text-muted">
                    Showing 1-{sortedShipments.length} of {sortedShipments.length} shipments
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 border border-line rounded-lg hover:bg-secondary transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                      Previous
                    </button>
                    <button className="px-3 py-1 bg-main text-white rounded-lg text-sm">
                      1
                    </button>
                    <button className="px-3 py-1 border border-line rounded-lg hover:bg-secondary transition-colors text-sm">
                      Next
                    </button>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </Pattern>
    </>
  );
}