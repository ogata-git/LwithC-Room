/* eslint-disable */
import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import banner from '../assets/images/life-top.jpg';
import image1 from '../assets/images/student-lifeA-1.png'
import image2 from '../assets/images/student-lifeA-2.png'
import image3 from '../assets/images/student-lifeA-3.png'
import image4 from '../assets/images/student-lifeA-4.png'



// Typewriter Components
const words = ['おはよう', '今日も1日', 'マイペースにいこう'];

const Typewriter = ({ text }) => {
  const sentenceVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
  const letterVariants = useMemo(
    () => ({ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0 } } }),
    []
  );
  return (
    <motion.div initial="hidden" animate="visible" variants={sentenceVariants} className="inline-flex">
      {text.split('').map((char, i) => (
        <motion.span key={`char-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const TypewriterLoop = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => setIndex((prev) => (prev + 1) % words.length), 3000);
    return () => clearTimeout(timeout);
  }, [index]);
  return <Typewriter text={words[index]} key={words[index]} />;
};

// Framer Motion Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
};

const StudentLife = () => {
  return (
    <div className="bg-gray-100/50 text-gray-800">
      {/* Page Header */}
      <div className="w-full overflow-hidden relative title-wrapper">
        <img
          src={banner}
          alt="LwithC生の1日"
          className="mx-auto block w-full md:w-7/12 h-auto object-contain object-center opacity-80 border-x-2 border-green-500"
        />
        <h1 className="title-life flex items-center justify-center ">LwithC生の1日</h1>
      </div>

      {/* Timeline Container with connecting line */}
      <div className="relative">
        {/* Vertical connecting line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-green-600"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 opacity-88">
          {/* Section 1: Morning (text left, image right) */}
          <motion.section
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col md:flex-row gap-6 bg-white bg-opacity-80 p-6 sm:p-8 rounded-lg shadow-lg"
          >
            {/* Timeline node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-4 h-4 bg-white border-4 border-green-500 rounded-full"></div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4">
                朝のスタート
                <span className="ml-6 h-2 text-gray-800 text-sm">
                  <TypewriterLoop />
                </span>
              </h2>
              <p className="leading-relaxed">
                男子高校生のA君は、朝適当に起床。ベッドでスマホを手に取り、就寝前質問していた質問の解答が届いていたので確認。
                <span className="font-bold text-green-600">24時間対応のLINEサポート</span>で送られた小論文の添削もチェックします。
              </p>
            </div>
            <div className="flex-none md:flex-1 h-auto bg-gray-200 rounded-md overflow-hidden w-1/3 mx-auto sm:w-1/2 md:w-full">
              <img
                src={image1}
                alt="朝の勉強風景"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.section>

          {/* Section 2: Library (image left, text right) */}
          <motion.section
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col md:flex-row-reverse gap-6 bg-white bg-opacity-80 p-6 sm:p-8 rounded-lg shadow-lg"
          >
            {/* Timeline node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-4 h-4 bg-white border-4 border-green-500 rounded-full"></div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4">図書館での学習</h2>
              <p className="leading-relaxed">
                友達と一緒に地元の図書館へ。集中して友達と受験に向けた勉強をしていました。周りが静かな空間でも、<span className="font-bold text-green-600">スマホを通じて</span>指導を受け、過去問の解説や、学校の先生では教えてくれなさそうな実体験に基づいた本質を学びます。
                LwithCの指導内容は一般論だけを教えてくれる大手塾とは違って、具体的な創意工夫が学べます。
              </p>
            </div>
            <div className="flex-none md:flex-1 h-auto bg-gray-200 rounded-md overflow-hidden w-1/3 mx-auto sm:w-1/2 md:w-full">
              <img
                src={image2}
                alt="図書館での勉強"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.section>

          {/* Section 3: Lunch (text left, image right) */}
          <motion.section
            custom={3}
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col md:flex-row gap-6 bg-white bg-opacity-80 p-6 sm:p-8 rounded-lg shadow-lg"
          >
            {/* Timeline node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-4 h-4 bg-white border-4 border-green-500 rounded-full"></div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4">友達とランチタイム</h2>
              <p className="leading-relaxed">
                近所のカフェでランチ。食事中にも気軽に<span className="font-bold text-green-600">友達感覚で連絡できる</span>LINEチャットで質問を送信し、講師からアドバイスをもらいます。
                ついでに何を食べるか迷ったので講師のおすすめも聞いときました。
              </p>
            </div>
            <div className="flex-none md:flex-1 h-auto bg-gray-200 rounded-md overflow-hidden w-1/3 mx-auto sm:w-1/2 md:w-full">
              <img
                src={image3}
                alt="ランチでの勉強サポート"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.section>

          {/* Section 4: Zoom (image left, text right) */}
          <motion.section
            custom={4}
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col md:flex-row-reverse gap-6 bg-white bg-opacity-80 p-6 sm:p-8 rounded-lg shadow-lg"
          >
            {/* Timeline node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-4 h-4 bg-white	border-4 border-green-500 rounded-full"></div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4">帰宅後のZOOM指導</h2>
              <p className="leading-relaxed">
                帰宅後は予約済みのZOOMで総合型選抜面接対策の面談と練習。講師からのリアルタイムフィードバックで且つ、自分の性格に沿ったコミュニケーションスタイルを提案してくれます。
                面接では自身をもって個性を出すことが重要だそうです。<span className='leading-relaxed'> 過去の試験の傾向などの情報も教えてくれたので、自分で調べたりする必要がないし、対策に時間が割けそうです。最後の数分間で、今狙っている女の子をどうデートに誘うかの作戦会議もしました（ガチ）</span>
              </p>
            </div>
            <div className="flex-none md:flex-1 h-auto bg-gray-200 rounded-md overflow-hidden w-1/3 mx-auto sm:w-1/2 md:w-full">
              <img
                src={image4}
                alt="ZOOMでの指導風景"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;
