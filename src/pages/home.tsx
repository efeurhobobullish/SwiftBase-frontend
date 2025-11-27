import ModeToggle from "@/components/ui/mode-toggle";
import { Pattern } from "@/components/ui";
import { Github, ArrowRight, Search, Phone, MapPin, Clock, Shield, Truck, Plane, Ship } from "lucide-react";

// Mock data for services
const services = [
  {
    id: 1,
    name: "Ground Shipping",
    description: "Reliable road transportation for all your cargo needs",
    icon: Truck,
    features: ["Door-to-door delivery", "Real-time tracking", "24/7 support"]
  },
  {
    id: 2,
    name: "Air Freight",
    description: "Fast and secure air cargo solutions worldwide",
    icon: Plane,
    features: ["Express delivery", "Global coverage", "Priority handling"]
  },
  {
    id: 3,
    name: "Sea Freight",
    description: "Cost-effective ocean shipping for large shipments",
    icon: Ship,
    features: ["FCL & LCL options", "Port-to-port", "Customs clearance"]
  },
  {
    id: 4,
    name: "Warehousing",
    description: "Secure storage and inventory management solutions",
    icon: Shield,
    features: ["Climate control", "24/7 security", "Inventory management"]
  }
];

const stats = [
  { number: "50+", label: "Countries Served" },
  { number: "500+", label: "Team Members" },
  { number: "10M+", label: "Packages Delivered" },
  { number: "99.8%", label: "On-Time Delivery" }
];

export default function Home() {
  return (
    <>
      <Pattern>
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="layout py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-main to-main/70">
                  LogiSwift
                </h1>
              </div>

              {/* Navigation - Desktop */}
              <nav className="hidden md:flex items-center gap-8">
                <a href="#" className="text-sm font-medium hover:text-main transition-colors">Home</a>
                <a href="#" className="text-sm font-medium hover:text-main transition-colors">Services</a>
                <a href="#" className="text-sm font-medium hover:text-main transition-colors">Tracking</a>
                <a href="#" className="text-sm font-medium hover:text-main transition-colors">About</a>
                <a href="#" className="text-sm font-medium hover:text-main transition-colors">Contact</a>
              </nav>

              {/* Contact Info - Desktop */}
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-main" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <button className="bg-main text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-main/90 transition-colors">
                  Get Quote
                </button>
              </div>

              {/* Mobile Menu */}
              <div className="flex items-center gap-4 md:hidden">
                <button className="p-2 hover:bg-secondary rounded-full transition-colors">
                  <Phone size={20} />
                </button>
                <ModeToggle />
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 py-20 layout">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-main to-main/70 leading-tight">
              Global Logistics Solutions
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Delivering excellence worldwide with reliable, fast, and secure logistics services tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="bg-main text-white px-8 py-3 rounded-full font-medium hover:bg-main/90 transition-colors center gap-2">
                Track Shipment
                <ArrowRight size={20} />
              </button>
              <button className="border border-line px-8 py-3 rounded-full font-medium hover:bg-secondary transition-colors">
                Get Free Quote
              </button>
            </div>
          </div>
        </section>

        {/* Tracking Section */}
        <section className="py-12 bg-secondary/20">
          <div className="layout">
            <div className="max-w-2xl mx-auto bg-background border border-line rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-center mb-6">Track Your Shipment</h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter tracking number..."
                  className="flex-1 px-4 py-3 border border-line rounded-full bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-main/20"
                />
                <button className="bg-main text-white px-6 py-3 rounded-full font-medium hover:bg-main/90 transition-colors whitespace-nowrap">
                  Track Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 layout">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Comprehensive logistics solutions designed to meet your unique supply chain requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-secondary/30 border border-line rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-main/30"
              >
                <div className="w-12 h-12 bg-main/10 rounded-full center mb-4 group-hover:bg-main/20 transition-colors">
                  <service.icon className="text-main" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-main transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-main rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary/20">
          <div className="layout">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-main mb-2">{stat.number}</div>
                  <div className="text-muted text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 layout">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-main/10 rounded-full center mx-auto">
                <Clock className="text-main" size={24} />
              </div>
              <h3 className="font-semibold text-lg">24/7 Monitoring</h3>
              <p className="text-muted">Round-the-clock tracking and support for all your shipments</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-main/10 rounded-full center mx-auto">
                <Shield className="text-main" size={24} />
              </div>
              <h3 className="font-semibold text-lg">Secure Handling</h3>
              <p className="text-muted">Advanced security measures to protect your valuable cargo</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-main/10 rounded-full center mx-auto">
                <MapPin className="text-main" size={24} />
              </div>
              <h3 className="font-semibold text-lg">Global Network</h3>
              <p className="text-muted">Extensive worldwide coverage with local expertise</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-main text-white">
          <div className="layout text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Ship?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Get a free quote for your logistics needs and experience the LogiSwift difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-main px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors">
                Request Quote
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-line py-12 layout">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">LogiSwift</h3>
              <p className="text-muted text-sm">
                Your trusted partner in global logistics and supply chain solutions. Delivering excellence since 2010.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-main transition-colors">Ground Shipping</a></li>
                <li><a href="#" className="hover:text-main transition-colors">Air Freight</a></li>
                <li><a href="#" className="hover:text-main transition-colors">Sea Freight</a></li>
                <li><a href="#" className="hover:text-main transition-colors">Warehousing</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-main transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-main transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-main transition-colors">News</a></li>
                <li><a href="#" className="hover:text-main transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-main transition-colors">Track Shipment</a></li>
                <li><a href="#" className="hover:text-main transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-main transition-colors">Shipping Guidelines</a></li>
                <li><a href="#" className="hover:text-main transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-line mt-8 pt-8 text-center text-sm text-muted">
            <p>&copy; 2024 LogiSwift Logistics. All rights reserved.</p>
          </div>
        </footer>
      </Pattern>
    </>
  );
}