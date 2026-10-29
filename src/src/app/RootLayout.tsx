import { Outlet, NavLink, ScrollRestoration, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const links = [
  { to: "/projects", label: "Projets" },
  { to: "/experience", label: "Parcours" },
  { to: "/education", label: "Formations" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

export default function RootLayout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden bg-background text-foreground">
      {/* rideaux de transition entre les pages (vert puis marron) */}
      <motion.div
        key={pathname + "-vert"}
        className="pointer-events-none fixed inset-0 z-50 bg-gold"
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "0%", "100%"] }}
        transition={{ duration: 0.9, times: [0, 0.5, 1], ease: "easeInOut" }}
      />
      <motion.div
        key={pathname + "-marron"}
        className="pointer-events-none fixed inset-0 z-50 bg-navy"
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "0%", "100%"] }}
        transition={{ duration: 0.9, delay: 0.12, times: [0, 0.5, 1], ease: "easeInOut" }}
      />

      <header className="sticky top-0 z-40 border-b-4 border-gold bg-navy text-white">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
          <NavLink to="/" className="font-serif text-xl font-semibold">
            Marouane <span className="italic text-gold">Chafiqi</span>
          </NavLink>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm font-medium">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "border-b-2 border-transparent py-1 text-white/75 transition-colors hover:border-gold hover:text-white",
                    isActive && "border-gold text-gold",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <motion.main
        key={pathname}
        className="mx-auto w-full max-w-6xl flex-1 px-6 pb-16"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>

      <footer className="border-t-4 border-gold bg-navy py-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} • {profile.name} • {profile.location}
      </footer>
      <ScrollRestoration />
    </div>
  );
}
