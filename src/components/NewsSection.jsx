/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import handloadingAnimation from '../assets/hand-loading.json';

import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';

const NewsSection = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const q = query(
          collection(db, 'news'),
          orderBy('date_posted', 'desc'),
          limit(3)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setNewsList(data);
      } catch (error) {
        console.error('データ取得エラー:', error);
      }
    };

    fetchNews();
  }, []);

  const listVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', bounce: 0.3, duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="bg-gray-800/85"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="w-full pt-8 px-4 md:px-20">
        <div className="w-full md:w-4/5 lg:w-3/5 mx-auto text-white">
          <motion.h2
            className="news-title text-2xl md:text-3xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(2px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          >
            お知らせ
          </motion.h2>

          <motion.ul
            className="space-y-2"
            variants={listVariants}
            initial="hidden"
            animate="show"
          >
            {newsList.length > 0 ? (
              newsList.map((news, index) => (
                <motion.li
                  key={news.id}
                  className="border-b border-gray-600 pt-2 flex items-center min-h-[50px] md:min-h-[80px] px-2 md:px-5 relative"
                  variants={itemVariants}
                >
                  <p className="text-sm text-gray-400 w-20 md:w-24 flex-shrink-0">
                    {news.date_posted}
                  </p>
                  <Link
                    to={`/news/${news.id}`}
                    className="flex items-start md:items-center w-full hover:underline gap-2"
                  >
                    <div className="flex flex-col ml-4">
                      <p className="text-xs text-blue-400">{news.category}</p>
                      <h5 className="text-lg md:text-md font-normal text-white">
                        {news.title}
                      </h5>
                    </div>
                  </Link>

                  {index === newsList.length - 1 && (
                    <div className="absolute right-1 bottom-2">
                      <Link
                        to="/news"
                        className="inline-block bg-gray-600 hover:bg-gray-500 text-white text-xs md:text-sm px-1 py-1 md:px-3 md:py-2 rounded transition"
                      >
                        もっと見る
                      </Link>
                    </div>
                  )}
                </motion.li>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-4">
                <div className="w-1/5 h-1/5 bg-gray-800/90 flex items-center justify-center rounded-3xl">
                  <Lottie animationData={handloadingAnimation} loop={true} />
                </div>
                <p className="mt-2 text-gray-300 text-sm animate-pulse">
                  now loading...
                </p>
              </div>
            )}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsSection;
