/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// 究極の超リアルメタリック SmallSectionコンポーネント（ボタンに強烈なキラッと演出）
export const SmallSection01 = ({ title, subtitle, moreText, moreLink }) => {
  const [visible, setVisible] = useState(false);
  const [bubbles, setBubbles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(entry.target);
        }
      }, { threshold: 0.3 }
    );
    if (containerRef.current) io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const arr = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      size: Math.random() * 20 + 10,
      duration: 1 + Math.random() * 1,
      delay: Math.random() * 0.5
    }));
    setBubbles(arr);
  }, [visible]);

  return (
    <div className="relative overflow-hidden opacity-90">
      <AnimatePresence>
        {visible && bubbles.map(b => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.5, 0], y: -100 - Math.random() * 60, scale: [0, 1] }}
            transition={{ delay: b.delay, duration: b.duration, ease: 'easeOut' }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute', bottom: 0, left: b.left,
              width: b.size, height: b.size,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(180,180,180,0.6))',
              boxShadow: '0 0 8px rgba(255,255,255,0.9)',
              pointerEvents: 'none',
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={visible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="metal-container"
      >
        <h1 className="metal-title">{title}</h1>
        <p className="metal-subtitle">{subtitle}</p>
        <Link to={moreLink} className="mt-4">
          <button className="metal-button">
            {moreText}
          </button>
        </Link>
      </motion.div>

      <style>{`
        .metal-container {
          position: relative;
          background-color: #333;
          background-image:
            linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(135deg, #2a2a2a, #4f4f4f, #2a2a2a);
          background-size: 2px 2px, 2px 2px, auto;
          border: 1px solid #222;
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow:
            inset 0 3px 6px rgba(255,255,255,0.1),
            inset 0 -3px 6px rgba(0,0,0,0.7),
            0 8px 20px rgba(0,0,0,0.8);
          filter: contrast(1.5) saturate(0.8) brightness(0.9);
          overflow: hidden;
        }
        .metal-container::after {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%;
          background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiAvPjwvc3ZnPg==");
          background-repeat: repeat-x;
          opacity: 0.05;
          pointer-events: none;
        }
        .metal-container::before {
          content: '';
          position: absolute; top: -80%; left: -80%;
          width: 260%; height: 260%;
          background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2), transparent 70%);
          transform: rotate(30deg);
          mix-blend-mode: screen;
        }
        .metal-title {
          font-size: 1.75rem;
          color: #e0e0e0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.7);
          margin-bottom: 12px;
        }
        .metal-subtitle {
          font-size: 1rem;
          color: #ccc;
          margin-bottom: 24px;
        }
        /* Shineアニメーション */
        @keyframes shimmer {
          0% { background-position: -150% 0; }
          100% { background-position: 150% 0; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 2px 8px rgba(255,255,255,0.7), inset 0 1px 4px rgba(255,255,255,0.4); }
          50% { box-shadow: 0 4px 16px rgba(255,255,255,0.9), inset 0 2px 6px rgba(255,255,255,0.6); }
        }
        .metal-button {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(145deg, #bbb, #ddd, #bbb);
          background-size: 200% 100%;
          border: 1px solid #999;
          border-radius: 9999px;
          color: #222;
          font-weight: bold;
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.5), inset 0 1px 4px rgba(255,255,255,0.4);
          transition: transform 0.2s;
        }
        .metal-button::before {
          content: '';
          position: absolute; top: 0; left: -150%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          transform: skewX(-30deg);
        }
        .metal-button:hover {
          transform: translateY(-2px) scale(1.05);
        }
        .metal-button:hover::before {
          animation: shimmer 1s ease-in-out forwards;
        }
        .metal-button:hover {
          animation: glow 2s ease-in-out infinite;
        }
        .metal-button::after {
          content: '';
          position: absolute; top: -50%; left: -60%;
          width: 40%; height: 200%;
          background: rgba(255,255,255,0.6);
          transform: rotate(25deg) translateY(-50%);
          opacity: 0;
          transition: all 0.6s ease-in-out;
        }
        .metal-button:hover::after {
          opacity: 1;
          left: 125%;
        }
      `}</style>
    </div>
  );
};
