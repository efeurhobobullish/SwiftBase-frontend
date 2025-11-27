import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { ScrollToTop } from "@/components/ui";
import { Home } from "@/pages";
import { Signup, Login } from "@/pages/auth";
import { Dashboard, Shipments } from "@/pages/main";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/shipments" element={<Shipments />} />
      </Routes>
    </>
  );
}
