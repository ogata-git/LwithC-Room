import React from 'react';
import Accordion from '../components/Accordion'; // 先ほどのアコーディオンコンポーネント

const faqs = [
  {
    question: 'LINEってすぐ返ってきますか？',
    answer: '対応可能時間（00:00~23:59）は、出来る限り早く友達のようなスピード感を意識しております。なにか作業が伴うことなどについては一定の精査をした上で返信いたします。'
  },
  {
    question: '無料相談ってビデオ通話だけですか？',
    answer: '基本的にはZOOMを用いていますが、LINEやメールでの質問の対応も行っているので、是非、気軽に連絡してください！'
  },
  {
    question: '誰が指導してくれるんですか？',
    answer: '生徒の情報を把握したスタッフが対応しています。また、指導員の希望があればできるだけ応えます！'
  },
  {
    question: 'サービスの退会方法を教えてください。',
    answer: 'メールやLINE,お電話でその旨をお伝え下さい。'
  },
  {
    question: '友達のように接して下さいって、どういうことですか？',
    answer: '友達に話すノリで話題を振ったり、誰にも言えない悩みを相談してくれてもかまいません。楽しく続けてくれたらな、と思ってます♪'
  }
];

const FAQPage = () => {
  return (
    <div className=" min-h-screen px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-600 mb-12">よくある質問（FAQ）</h1>

      <div className="space-y-4 max-w-2xl mx-auto text-white">
        {faqs.map((faq, index) => (
          <Accordion key={index} title={faq.question} content={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
