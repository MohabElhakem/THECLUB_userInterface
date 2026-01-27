import { useState, useEffect } from "react";
import './loadingDots.css'

const LoadingDots = ({ text = "تحميل", interval = 500 }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    let dotCount = 0;
    const timer = setInterval(() => {
      dotCount = (dotCount + 1) % 6;       // cycles 0 → 5
      setDots(".".repeat(dotCount));        // update dots
    }, interval);

    return () => clearInterval(timer);       // cleanup on unmount
  }, [interval]);

  return (
    <p className="loading-text">
      <span className="loading-word">{text}</span>
      <span className="loading-dots">{dots}</span>
    </p>
  );
};

export default LoadingDots;