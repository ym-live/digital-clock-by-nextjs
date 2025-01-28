"use client";
import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState<string>("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-4xl font-bold px-10 py-4 rounded-sm bg-white/20 backdrop-blur-sm shadow-sm shadow-white/80">
      {time}
    </div>
  );
};

export default DigitalClock;
