import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../img/loading.json"; // Ensure correct path

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let loaded = false;

    const handleLoad = () => {
      loaded = true;
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "auto"; // ✅ enable scroll
      }, 800);
    };

    window.addEventListener("load", handleLoad);

    // Fallback if load event never fires (e.g., on mobile)
    const timeout = setTimeout(() => {
      if (!loaded) {
        handleLoad();
      }
    }, 5000); // 5 seconds max wait

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
      document.body.style.overflow = "auto"; // fallback cleanup
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#282c33",
            zIndex: 9999,
            opacity: fadeOut ? 0 : 1,
            transition: "opacity 0.8s ease-out",
            overflow: "hidden", // prevents scrollbars
          }}
        >
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            style={{
              width: "40vw",
              maxWidth: 200,
              height: "auto",
            }}
          />
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
