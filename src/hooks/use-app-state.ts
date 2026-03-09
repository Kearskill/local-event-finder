// src\hooks\use-app-state.ts
import { useState } from "react";

export function useAppState() {
  const [state, setState] = useState({
    location: null,
    events: [],
    favorites: [],
  });}