import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Loading from '../components/Loading';

function NewsDetail() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const docRef = doc(db, 'news', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNewsItem(docSnap.data());
        } else {
          console.error('データが見つかりません');
        }
      } catch (err) {
        console.error('取得エラー:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  return (
    <section className="max-w-4xl mx-auto py-10 px-4 md:px-20">
      {loading ? (
        <Loading />
      ) : (
        newsItem && (
          <>
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">{newsItem.title}</h1>
            <p className="text-sm text-blue-600 mb-2">{newsItem.category}</p>
            <p className="text-xs text-gray-400 mb-4">{newsItem.date_posted}</p>
            <div className='flex flex-col md:flex-row border-l-1 border-r-1'>
              <div className="w-full md:w-1/2 text-gray-700 leading-relaxed whitespace-pre-wrap">
                {newsItem.content}
              </div>
              {newsItem.imageUrl && (
                <img
                  src={newsItem.imageUrl}
                  alt="記事画像"
                  className="w-full md:w-1/2 p-16 md:p-4 h-auto mb-6 rounded"
                />
              )}
            </div>
            {newsItem.url && (
              <p className="mt-4">
                関連リンク: <a href={newsItem.url} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{newsItem.url}</a>
              </p>
            )}
          </>
        )
      )}
    </section>
  );
}

export default NewsDetail;
