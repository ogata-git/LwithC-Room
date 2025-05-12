import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/send_mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const json = await res.json();
      if (json.success) setStatus('success');
      else throw new Error(json.error || '送信に失敗しました');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  // モーダルボックスのアニメーション設定
  const modalVariants = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: { y: '0', opacity: 1, transition: { type: 'spring', stiffness: 180, damping: 12 } },
    exit: { y: '-100vh', opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative flex flex-col"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={onClose}
              aria-label="Close"
            >
              ✕
            </button>

            {status === 'loading' && (
              <div className="flex-1 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                <span className="ml-4 text-lg">送信中...</span>
              </div>
            )}

            {status === 'success' && (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">送信完了！</h3>
                <p className="mb-6">お問い合わせありがとうございました。折り返しご連絡いたします。</p>
                <button
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                  onClick={onClose}
                >
                  閉じる
                </button>
              </div>
            )}

            {status === 'error' && (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-red-600 mb-2">エラー(something went wrong)</h3>
                <p className="mb-4">送信中に問題が発生しました。再度お試しください。</p>
              </div>
            )}

            {status === 'idle' && (
              <form onSubmit={handleSubmit} className="flex flex-col">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dotgothic16-regular">お問い合わせ</h2>

                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-1">お名前</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">メールアドレス</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">お問い合わせ内容</label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full shadow-lg"
                >
                  送信する
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;