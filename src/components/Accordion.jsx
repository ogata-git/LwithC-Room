import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Accordionコンポーネント
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-xl mx-auto mb-3">
      {/* タイトル部分とコンテンツ表示ボタン */}
      <div
        className={`text-white p-5 shadow-md flex justify-between items-center ${
          isOpen ? 'rounded-t-md' : 'rounded-md'
        } bg-gray-800/85`} // アコーディオンの開閉に応じてボーダーを変更
      >
        <h3 className="text-lg font-medium">{title}</h3>

        {/* コンテンツ表示ボタン */}
        <button
          onClick={toggleAccordion}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 text-white font-semibold transition-transform transform hover:scale-110 hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }} // アコーディオンが開閉する際に矢印が回転
            transition={{ duration: 0.3 }}
          >
            <span className="text-xl">{isOpen ? '▲' : '▼'}</span> {/* 矢印の記号 */}
          </motion.div>
        </button>
      </div>

      {/* アコーディオンコンテンツ */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden mb-0"
      >
        <div className="p-4 bg-gray-700/85 rounded-b-md shadow-inner border-t-1">
          <p>{content}</p> {/* コンテンツ表示 */}
        </div>
      </motion.div>
    </div>
  );
};

export default Accordion;
