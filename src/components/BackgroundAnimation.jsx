"use client";
import { useAnimationFrame } from "motion/react";
import { useRef, forwardRef } from "react";
import '../styles/main.scss';

const BackgroundAnimation = forwardRef(({ frontImage, ...props }, ref) => {  const cubeRef = useRef(null);

  useAnimationFrame((t) => {
    if (!cubeRef.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;

    cubeRef.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div
      ref={ref}
      className="background-animation -z-10"
    >
      <div className="cube" ref={cubeRef}>
        <div className="side front" />
        <div
          className="side front"
          style={{
            backgroundImage: `url(${frontImage})`,
          }}
        />

        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
    </div>
  );
});

BackgroundAnimation.displayName = "BackgroundAnimation";

export default BackgroundAnimation;
