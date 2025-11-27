import { Pattern } from "@/components/ui";
import { ArrowLeft, Mail, Lock, User, Phone, Building, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
    accountType: "individual", // "individual" or "business"
    terms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup data:', formData);
  };

  return (
    <>
      <Pattern>
        <div className="min-h-[100dvh] relative z-10 flex items-center justify-center py-8 layout">
          {/* Back Button */}
          <Link 
            to="/" 
            className="absolute top-8 left-8 flex items-center gap-2 text-muted hover:text-main transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-main to-main/70 mb-2">
                Create Account
              </h1>
              <p className="text-muted">
                Join LogiSwift and streamline your logistics
              </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Account Type Selection */}
              <div className="flex gap-4 mb-4">
                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="accountType"
                    value="individual"
                    checked={formData.accountType === "individual"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div className={`border-2 rounded-lg p-4 text-center transition-all ${
                    formData.accountType === "individual" 
                      ? "border-main bg-main/5" 
                      : "border-line hover:border-main/30"
                  }`}>
                    <div className="font-medium mb-1">Individual</div>
                    <div className="text-xs text-muted">Personal shipping needs</div>
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="accountType"
                    value="business"
                    checked={formData.accountType === "business"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div className={`border-2 rounded-lg p-4 text-center transition-all ${
                    formData.accountType === "business" 
                      ? "border-main bg-main/5" 
                      : "border-line hover:border-main/30"
                  }`}>
                    <div className="font-medium mb-1">Business</div>
                    <div className="text-xs text-muted">Company logistics</div>
                  </div>
                </label>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-line rounded-lg bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-main/20"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-line rounded-lg bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-main/20"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-line rounded-lg bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-main/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-line rounded-lg bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-main/20"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Company (Conditional for Business) */}
              {formData.accountType === "business" && (
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required={formData.accountType === "business"}
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-line rounded-lg bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-main/20"
                      placeholder="Your Company Inc."
                    />
                  </div>
                </div>
              )}

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 border border-line rounded-lg bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-main/20"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted hover:text-main"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 border border-line rounded-lg bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-main/20"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted hover:text-main"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-3">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  checked={formData.terms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-main border-line rounded focus:ring-main/20"
                />
                <label htmlFor="terms" className="text-sm text-muted">
                  I agree to the{" "}
                  <a href="#" className="text-main hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-main hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-main text-white py-3 rounded-lg font-medium hover:bg-main/90 transition-colors focus:outline-none focus:ring-2 focus:ring-main/20 focus:ring-offset-2"
              >
                Create Account
              </button>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-muted text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="text-main font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-line"></div>
              <div className="px-4 text-sm text-muted">Or continue with</div>
              <div className="flex-1 border-t border-line"></div>
            </div>

            {/* Social Signup */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-line py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-line py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                Twitter
              </button>
            </div>
          </div>
        </div>
      </Pattern>
    </>
  );
}