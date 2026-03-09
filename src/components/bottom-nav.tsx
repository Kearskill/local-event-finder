import { Home, Map, Search, Ticket, User } from "lucide-react-native";
import { useState } from "react";

type Screen = "home" | "detail" | "search" | "map" | "tickets" | "profile";

const NAV_ITEMS = [ // this is for the bottom navigation bar, we can reuse the same icons and labels as in the main navigation
  { key: "home", label: "Home", icon: Home }, 
  { key: "search", label: "Search", icon: Search },
  { key: "map",  label: "Map", icon: Map},
  { key: "tickets", label: "Tickets", icon: Ticket },
  { key: "profile", label: "Profile", icon: User },
]

export default function BottomNavigation() {
    const [screen, setScreen] = useState<Screen>("home");
    const [activeNav, setActiveNav] = useState("home");
    const [selectedEvent, setSelectedEvent] = useState<any>(null);

    const handleNavClick = (key: string) => {
        setActiveNav(key);
        setScreen(key as Screen);
        setSelectedEvent(null);
    };
    
    return (
        <div className="flex-shrink-0 bg-white border-t border-gray-100 px-2 pb-2 pt-2 relative z-30">
        {/* This is a comment inside a JSX element  */}
          <div className="flex items-center justify-around">
            {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
              const isActive = activeNav === key && screen !== "detail";
              return (
                <button
                  key={key}
                  onClick={() => handleNavClick(key)}
                  className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl transition-all"
                  style={{ minWidth: 56 }}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isActive ? "bg-violet-600" : "bg-transparent"}`}>
                    <Icon size={20} className={isActive ? "text-white" : "text-gray-400"} />
                  </div>
                  <span
                    style={{ fontSize: "10px", fontWeight: isActive ? 700 : 400 }}
                    className={isActive ? "text-violet-600" : "text-gray-400"}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
    )
}