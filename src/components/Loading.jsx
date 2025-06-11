import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../img/loading.json"; // Ensure correct path

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true); // Start fade-out effect
      setTimeout(() => setIsLoading(false), 800); // Remove after fade-out
    };

    // Detect when page is fully loaded
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {isLoading && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#282c33",
          zIndex: 9999,
          opacity: fadeOut ? 0 : 1, // Fading effect
          transition: "opacity 0.8s ease-out", // Smooth fade-out
        }}>
          <Lottie animationData={loadingAnimation} loop={true} style={{ width: 150, height: 150 }} />
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
