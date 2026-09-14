import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { to: "/", label: "Profil", end: true },
  { to: "/orders", label: "Mes commandes" },
];

export default function AccountLayout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
    : "?";

  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 md:flex-row md:gap-8 md:px-6 md:py-12">
        <aside className="rounded-2xl bg-neutral-900/60 p-5 ring-1 ring-white/10 backdrop-blur-sm md:w-64 md:shrink-0 md:self-start md:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#0071e3] to-[#0047a8] text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,113,227,0.35)]">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-[15px] font-semibold text-white">
                {user?.name || "Mon compte"}
              </p>
              <p className="truncate text-[13px] text-neutral-400">{user?.email}</p>
            </div>
          </div>

          <nav className="mt-7 flex gap-1 overflow-x-auto md:mt-8 md:flex-col md:overflow-visible">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative whitespace-nowrap rounded-lg px-3.5 py-2.5 text-[14.5px] font-medium transition-colors md:whitespace-normal ${
                    isActive
                      ? "bg-blue-500/15 text-blue-400"
                      : "text-neutral-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        isActive ? "bg-blue-400" : "bg-transparent"
                      }`}
                    />
                    {item.label}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="mt-7 border-t border-white/10 pt-5 md:mt-8">
            <button
              onClick={handleLogout}
              className="text-[14px] font-medium text-neutral-500 transition-colors hover:text-red-400"
            >
              Se déconnecter
            </button>
          </div>
        </aside>

        <main key={location.pathname} className="min-w-0 flex-1 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
}