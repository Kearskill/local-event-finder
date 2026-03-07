// src\app\index.tsx

import { Home, Map, Search, Ticket, User } from "lucide-react-native";
import { Text, View } from "react-native";

const NAV_ITEMS = [
  { key: "home", label: "Home", icon: Home },
  { key: "search", label: "Search", icon: Search },
  { key: "map",  label: "Map", icon: Map},
  { key: "tickets", label: "Tickets", icon: Ticket },
  { key: "profile", label: "Profile", icon: User },
]



export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to my Local Event Finder app!</Text>
      <Text>Use the navigation menu to explore nearby events and find something fun to do!</Text>
    </View>

    
  );
}
