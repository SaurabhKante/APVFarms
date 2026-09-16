import { NavLink } from "react-router-dom";

const navigationItems = [
  {
    label: "Home",
    icon: "agriculture",
    path: "/",
  },
  {
    label: "Our Vision",
    icon: "nest_eco_leaf",
    path: "/our-vision",
  },
  {
    label: "Contact",
    icon: "contacts",
    path: "/contact",
  },
];

function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 z-50 w-full bg-surface/90 pb-safe shadow-[0_-2px_12px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="flex h-16 items-center justify-around px-space-sm">
        {navigationItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex min-h-12 min-w-[56px] flex-col items-center justify-center gap-0.5 px-space-xs transition-colors ${
                isActive
                  ? "font-semibold text-primary"
                  : "text-on-surface-variant"
              }`
            }
          >
            <span className="material-symbols-outlined text-[24px]">
              {item.icon}
            </span>

            <span className="font-label-sm text-label-sm">
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default BottomNavigation;