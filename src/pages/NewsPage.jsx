import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading'; // Loadingコンポーネントをインポート

function NewsPage() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true); // ローディング状態の管理

  useEffect(() => {
    axios.get('http://localhost/api/news_list.php?limit=10')
      .then(response => {
        setNewsList(response.data);
        setLoading(false); // データ読み込み完了
      })
      .catch(error => {
        console.error('データ取得エラー:', error);
        setLoading(false); // エラーが発生してもローディングを解除
      });
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-10 px-4 md:px-20">
      {loading ? (
        <Loading /> // ローディング表示
      ) : (
        <>
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">お知らせ一覧</h1>

          <ul className="space-y-6">
            {newsList.map((newsItem) => (
              <li
                key={newsItem.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-200"
              >
                <Link to={`/news/${newsItem.id}`} className="block">
                  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    {/* 日付 */}
                    <p className="text-xs md:text-sm text-gray-500 mb-1 md:mr-4">
                      {newsItem.date_posted}
                    </p>

                    {/* タイトル */}
                    <h2 className="text-lg font-semibold text-gray-700 hover:text-blue-600">
                      {newsItem.title}
                    </h2>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default NewsPage;