"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** Pathname from Next + current URL hash (for /#projects etc.). */
export function useHashSync(): { pathname: string; hash: string } {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const read = () => setHash(typeof window !== "undefined" ? window.location.hash : "");
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [pathname]);

  return { pathname, hash };
}
