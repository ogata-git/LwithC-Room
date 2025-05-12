import React, { useState } from 'react';
import axios from 'axios';

function NewsPostPage() {
  const [title, setTitle] = useState('');  // タイトル・題名
  const [content, setContent] = useState('');  // 本文
  const [image, setImage] = useState(null);  // 画像添付
  const [date, setDate] = useState('');  // 日付選択
  const [url, setUrl] = useState('');    // URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image); // 画像は任意
    }
    formData.append('date', date);
    formData.append('url', url);

    try {
      await axios.post('http://localhost/api/news_post.php', formData, { headers: { 'Content-Type': 'multipart/form-data' } });

      alert('投稿が完了しました！');
      setTitle('');
      setContent('');
      setImage(null);
      setDate('');
      setUrl('');
    } catch (error) {
      console.error('投稿エラー:', error);
      alert('投稿に失敗しました...');
    }
  };

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
