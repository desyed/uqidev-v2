"use client"

import { useEffect, useState } from "react"

// Utility hook to safely handle client-side only code
export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)
  
  useEffect(() => {
    setHasMounted(true)
  }, [])
  
  return hasMounted
} 