import * as React from "react";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <div className="min-h-screen flex flex-col relative overflow-hidden">
          {/* === Background Gradient === */}
          <div
            className="absolute inset-0 -z-10 pointer-events-none select-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(69,118,255,1) 0%, rgba(89,133,255,0.8) 30%, rgba(235,242,255,0.6) 60%, rgba(255,255,255,1) 100%)",
            }}
          />

          {/* === Blue Glow Blob for Depth === */}
          <div
            className="absolute -left-[241px] -top-[284px] w-[1886px] h-[694px] -z-10 pointer-events-none select-none"
            style={{
              background: "rgba(89,133,255,0.6)",
              borderRadius: "9999px",
              filter: "blur(400px)",
              opacity: 1,
            }}
          />

          {/* === Header === */}
          <Header />

          {/* === Main Content === */}
          <main className="flex-grow">
            <HeroSection />
          </main>
        </div>
      </ProtectedRoute>
    </AuthProvider>
  );
}

export default App;
