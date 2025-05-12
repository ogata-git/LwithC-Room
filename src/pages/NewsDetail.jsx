import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading'; // Loadingコンポーネントをインポート

function NewsDetail() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true); // ローディング状態を管理

  useEffect(() => {
    // データを取得
    axios.get(`http://localhost/api/news_detail.php?id=${id}`)
      .then(response => {
        setNewsItem(response.data);
        setLoading(false); // データが取得できたらローディングを解除
      })
      .catch(error => {
        console.error('データ取得エラー:', error);
        setLoading(false); // エラー発生時もローディングを解除
      });
  }, [id]);

  return (
    <section className="max-w-4xl mx-auto py-10 px-4 md:px-20">
      {loading ? (
        <Loading /> // ローディング画面表示
      ) : (
        <>
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">{newsItem.title}</h1>
          <p className="text-xs text-gray-400 mb-4">{newsItem.date_posted}</p>
          <div className='flex flex-col md:flex-row border-l-1 border-r-1'>
            <div className="w-full md:w-1/2 text-gray-700 leading-relaxed whitespace-pre-wrap">
              {newsItem.content}
            </div>
            {newsItem.image_path && (
              <img src={`http://localhost/${newsItem.image_path}`} alt="記事画像" className="w-full md:w-1/2 p-16 md:p-4 h-auto mb-6 rounded" />
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default NewsDetail;
