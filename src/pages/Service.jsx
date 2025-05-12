/* eslint-disable */
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/Card';
import { SmallSection01 } from '../components/SmallSection01';
import banner from '../assets/images/service-top.jpg';


const services = [
  {
    icon: '📱',
    title: '24時間LINEサポート',
    description: 'いつでもどこでも質問可能。AIの活用と講師のチームが迅速に返信します。',
    details: '接続できる環境にいれば、LINEでのチャットは24時間対応。課題や質問はすぐに解決できます。常にダブルチェックが行われるため、AIの総合的な知識と講師双方の良いとこどり。',
  },
  {
    icon: '📝',
    title: '個別カリキュラム作成',
    description: '生徒の学力・目標に加え、性格に合わせたプランをご提案。',
    details: 'オリジナルカリキュラムは定期的に見直し、効果的な学習をサポート。',
  },
  {
    icon: '📚',
    title: '要望専門の5教科9科目の授業サポート',
    description: '個々の要求に応える科目学習指導！',
    details: '固定の授業スケジュールを設けていないため、要望に応じて随時対応。5教科9科目（国語・数学・英語・理科・社会）から、個人のニーズに合わせた学習を実現。例えば、三角関数部分の一通りの説明が聞きたいのであればZOOM時に個別的な授業を行います。',
  },
  {
    icon: '💬',
    title: '面接・メンタリング',
    description: 'あらゆる試験の面接対策、メンタルサポートをオンラインで実施。',
    details: '各々の生徒の性格の分析とこれまでの実績等から、最適な手だてを抽出し、個々の最適なロードマップを提案します。面接対策では模擬面接とフィードバックを通じて、さらなる自己PRや志望理由をブラッシュアップ。',
  },
  {
    icon: '📊',
    title: '分析とフィードバック',
    description: '個人のこれまでの取り組み状況から、分析と対策をフィードバック。',
    details: '過去のトークや取り組み、ZOOM時の記録などから、弱点の分析とその情報からの改善ポイントを明確化します。表などにまとめて見やすいフィードバックを提供します。',
  },
  {
    icon: '😉',
    title: '無料相談・質疑応答',
    description: 'ご要望があれば開始前に面談して、雰囲気と流れについて理解して頂きます。',
    details: 'どんな料金なの？どんな講師がいるの？画面上では伝えきれないこと、たくさんあります。お問い合わせでも構いませんが、直接質問に答えたり、お試し面接練習等もお待ちしています！',
  },
  {
    icon: '👥',
    title: '何でも相談room',
    description: '気軽に話せる、あなたの安心空間。なんでも、だれでも、いつでも。',
    details: '愚痴や不安、ささいな疑問でも大丈夫。友達と話すような感覚で、気持ちを整理できる場を提供します。「愚痴を聞いてもらいたい」、「人生相談したい」、「先生をギャフンと言わせたい」、そんな時にぜひご利用ください。',
  },
  {
    icon: '🤖',
    title: '生成系AI利用の指導',
    description: '生成系AIの利用性の向上を目指せます。',
    details: '現代を生きる上で必須であるチャット型AI、正しく正確な利用ができるような指導やアドバイスを提供します。胡散臭いAI利用法講座などが多数存在しますが、自信をもって効率的且つ、現代の学生向けの身に付けるべきポイントを指導しています。こんなことは言いたくありませんが、AIを100％利用できれば、学習指導において教師が存在する意義が問われるほどのものを提供してくれます。',
  },
];
// bannerの設定
const bannerVariants = {
    hidden: { opacity: 0, y: -50, scale: 1.1 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

export default function Service() {
  const [expandedTitle, setExpandedTitle] = useState(null);
  // グリッドコンテナを参照する ref
  const containerRef = useRef(null);

  const handleToggle = (title) => {
    setExpandedTitle(prev => (prev === title ? null : title));
  };

  return (
    <div className="pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
                className="w-full overflow-hidden title-wrapper"
                initial="hidden"
                animate="visible"
                variants={bannerVariants}
              >
                <img
                  src={banner}
                  alt="サービス Banner"
                  className="mx-auto block w-full md:w-7/12 h-auto object-contain object-center opacity-80 border-x-2"
                />
                <h1 className="title-service absolute">Our Service</h1>
        </motion.div>

        {/* ここに ref をセット */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative pt-2 opacity-90"
        >
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              description={s.description}
              details={s.details}
              expanded={expandedTitle === s.title}
              onToggle={handleToggle}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20 py-10">
        <SmallSection01 title="よくある質問" subtitle="LwithCへのよくある質問をまとめました。" moreText="もっと見る" moreLink="/faq"/>
        <SmallSection01 title="採用情報" subtitle="LwithCに力を貸していただけませんか？" moreText="もっと見る" moreLink="/recruit" /> 
      </div>
    </div>
  );
}
