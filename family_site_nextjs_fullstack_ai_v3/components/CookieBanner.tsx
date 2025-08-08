
"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const seen = localStorage.getItem("cookie-consent");
    if (!seen) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 inset-x-0 px-4">
      <div className="container mx-auto">
        <div className="card bg-white/90 dark:bg-black/80 backdrop-blur flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">We use cookies for analytics. By using this site, you accept our privacy policy.</p>
          <div className="flex gap-2">
            <a href="/privacy" className="btn btn-secondary">Learn more</a>
            <button className="btn btn-primary" onClick={() => { localStorage.setItem("cookie-consent", "1"); setShow(false); }}>Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
}
