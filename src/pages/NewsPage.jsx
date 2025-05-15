import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import { db } from '../firebase';
import Loading from '../components/Loading';

function NewsPage() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [categoryCounts, setCategoryCounts] = useState({});

  const categories = ['すべて', '一般お知らせ', '生徒向け', 'メンテナンス'];

  // ニュース一覧の取得（カテゴリ絞り込み）
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        let q;
        if (selectedCategory === 'すべて') {
          q = query(collection(db, 'news'), orderBy('date_posted', 'desc'), limit(20));
        } else {
          q = query(
            collection(db, 'news'),
            where('category', '==', selectedCategory),
            orderBy('date_posted', 'desc'),
            limit(20)
          );
        }

        const snapshot = await getDocs(q);
        const list = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNewsList(list);
      } catch (error) {
        console.error('データ取得エラー:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [selectedCategory]);

  // カテゴリ別件数の取得
  useEffect(() => {
    const fetchCategoryCounts = async () => {
      const counts = {};
      for (let cat of categories) {
        let q;
        if (cat === 'すべて') {
          q = query(collection(db, 'news'));
        } else {
          q = query(collection(db, 'news'), where('category', '==', cat));
        }
        const snap = await getDocs(q);
        counts[cat] = snap.size;
      }
      setCategoryCounts(counts);
    };

    fetchCategoryCounts();
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-10 px-4 md:px-20">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">お知らせ一覧</h1>

      {/* カテゴリボタン */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full text-sm border ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-blue-600 border-blue-600'
            }`}
          >
            {cat}（{categoryCounts[cat] ?? 0}）
          </button>
        ))}
      </div>

      {loading ? (
        <Loading />
      ) : (
        <ul className="space-y-6">
          {newsList.map((newsItem) => (
            <li
              key={newsItem.id}
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-200"
            >
              <Link to={`/news/${newsItem.id}`} className="block">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex flex-col">
                    <p className="text-xs md:text-sm text-gray-500">
                      {newsItem.date_posted}
                    </p>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-700 hover:text-blue-600 flex items-center gap-2">
                    {newsItem.title}
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                      {newsItem.category}
                    </span>
                  </h2>
                </div>
              </Link>
            </li>
          ))}
          {newsList.length === 0 && (
            <p className="text-gray-500 text-sm mt-4">このカテゴリにはまだ投稿がありません。</p>
          )}
        </ul>
      )}
    </section>
  );
}

export default NewsPage;
