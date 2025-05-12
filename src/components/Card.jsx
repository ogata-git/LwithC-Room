/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * 汎用サービスカードコンポーネント
 * クリックで拡大し、詳細を展開。
 */
export default function ServiceCard({
  icon,
  title,
  description,
  details,
  expanded,
  onToggle,
}) {
  const [showDetails, setShowDetails] = useState(false);

  // 展開後に詳細表示
  useEffect(() => {
    let timer;
    if (expanded) {
      timer = setTimeout(() => setShowDetails(true), 300);
    } else {
      setShowDetails(false);
    }
    return () => clearTimeout(timer);
  }, [expanded]);

  // クリックハンドラ
  const handleClick = (e) => {
    e.stopPropagation();
    onToggle(expanded ? null : title);
  };

  return (
    <motion.div
      layout
      onClick={handleClick}
      className={
        `relative flex flex-col items-center text-center cursor-pointer p-6 rounded-lg transition-all ` +
        (expanded
          ? 'bg-white bg-opacity-80 backdrop-blur-sm shadow-2xl z-50'
          : 'bg-gray-100 hover:bg-gray-200')
      }
      initial={false}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* アイコンとテキストは常に同サイズ */}
      <div className="mb-4">
        {typeof icon === 'string' && (icon.startsWith('http') || /\.(png|jpe?g|svg)$/.test(icon)) ? (
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain mx-auto"
          />
        ) : (
          <span className="text-5xl">{icon}</span>
        )}
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 leading-relaxed mb-2">{description}</p>

      {/* 詳細部分：高さのみ(y方向)変化で展開 */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full text-left mt-4"
          >
            <p className="text-gray-700 mb-4 p-4 border-t-1">{details}</p>
            <motion.button onClick={(e) => {
                e.stopPropagation();
                onToggle(null);
            }}
            whileHover={{ scale: 1.05, backgroundColor: '#14B8A6' }}
            whileTap={{ scale: 0.9 }} // モバイル表示などでの押し込み感
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="px-4 py-2 rounded-xl text-white shadow-md bg-gray-800 hover:shadow-lg active:shadow-inner">閉じる</motion.button>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
