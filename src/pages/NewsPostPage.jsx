import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db, storage, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signOut } from 'firebase/auth';

function NewsPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = '';

    try {
      if (image) {
        const imageRef = ref(storage, `news_images/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, 'news'), {
        title,
        content,
        imageUrl,
        date_posted: date,
        url,
        category, // カテゴリ
        createdAt: serverTimestamp(),
      });

      alert('投稿が完了しました！');
      setTitle('');
      setContent('');
      setImage(null);
      setDate('');
      setUrl('');
    } catch (err) {
      console.error('投稿エラー:', err);
      alert('投稿に失敗しました...');
    }
  };

  // NewsPostPage.jsx が閉じられたらログアウトするように設定
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;

    const unsubscribe = () => {
      if (window.location.pathname !== currentPath) {
        signOut(auth).catch((e) => console.error('ログアウト失敗:', e));
      }
    };

    // イベントリスナー：ページ離脱時（ルート変更）
    window.addEventListener('popstate', unsubscribe);
    window.addEventListener('pushstate', unsubscribe);
    window.addEventListener('beforeunload', unsubscribe);
    return () => {
      unsubscribe(); // ページがアンマウントされたときもログアウト
      window.removeEventListener('popstate', unsubscribe);
      window.removeEventListener('pushstate', unsubscribe);
      window.removeEventListener('beforeunload', unsubscribe);
    };
  }, [location]);
    

  return (
    <section className="max-w-3xl mx-auto py-10 px-4 md:px-20">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">お知らせ投稿ページ</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">本文</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 h-40"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">画像アップロード（任意）</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">日付選択</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">関連URL（任意）</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="https://example.com"
          />
        </div>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required className="w-full border border-gray-300 rounded px-3 py-2">
          <option value="">-- カテゴリを選択 --</option>
          <option value="一般お知らせ">一般お知らせ</option>
          <option value="生徒向け">生徒向け</option>
          <option value="メンテナンス">メンテナンス</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded transition"
        >
          投稿する
        </button>
      </form>
    </section>
  );
}

export default NewsPostPage;
