"use client";

import { useEffect, useState } from "react";
import "./Background.css";

const images = [
  "/rock2.jpg",
  "/CEDETEC.jpg",
  "/FES-ACATLAN.jpg",
  "/DSC.jpeg",
];

export default function BackgroundRotator() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrent(next);
        setNext((next + 1) % images.length);
        setIsTransitioning(false);
      }, 2000);
    }, 20000);

    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="backgroundContainer">
      <div
        className="bgImage"
        style={{ backgroundImage: `url(${images[current]})` }}
      />

      <div
        className={`bgImage fade ${isTransitioning ? "active" : ""}`}
        style={{ backgroundImage: `url(${images[next]})` }}
      />
    </div>
  );
}