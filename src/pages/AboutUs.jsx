import { motion } from 'framer-motion';
import { SmallSection01 } from '../components/SmallSection01';
import banner from '../assets/images/about-top.jpg';
import image1 from '../assets/images/aboutus01.png'

// Framer Motion Variants
const bannerVariants = {
  hidden: { opacity: 0, y: -50, scale: 1.1 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function AboutUs() {
  return (
  <div>
    <div className="bg-gray-100/80 text-gray-800 justify-center items-center">
      {/* Banner Image Section */}
      <motion.div
        className="w-full overflow-hidden title-wrapper"
        initial="hidden"
        animate="visible"
        variants={bannerVariants}
      >
        <img
          src={banner}
          alt="オンライン塾 Banner"
          className="mx-auto block w-full md:w-7/12 h-auto object-contain object-center opacity-80 border-x-2"
        />
        <h1 className="title-about">About LwithC</h1>
      </motion.div>

      <div className="relative">
        {/* Background decorative component placeholder */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 space-y-16">
          <motion.section
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={contentVariants}
            viewport={{ once: true }}
            className="bg-white bg-opacity-80 p-6 sm:p-8 lg:p-12 rounded-lg shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-4">まず、目標について</h2>
            <p className="leading-relaxed text-base sm:text-lg lg:text-xl mb-6 opacity-90 max-w-3xl">
              オンライン塾を通じて、学生一人ひとりに最適な学習計画と柔軟な学習環境を提供します。
              AIと講師による個別指導・面談で、多方面の目標達成のためにストレスフリーなサポートし、生徒の未来を切り拓く。そんなプラットフォームを構築したいと考えています。
            </p>
            <img
              src={image1}
              alt="Mission Illustration"
              className="mx-auto my-2 w-1/3 sm:w-5/6 md:w-2/3 h rounded-full shadow-lg object-cover"
            />
          </motion.section>

          {/* Vision Section */}
          <motion.section
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={contentVariants}
            viewport={{ once: true }}
            className="bg-white bg-opacity-80 p-6 sm:p-8 lg:p-12 rounded-lg shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-4">あなたたちは何者？</h2>
            <p className="leading-relaxed text-base sm:text-lg lg:text-xl mb-6 opacity-90 max-w-3xl">
              前提、私たちは学生が中心のベンチャーです。大手とは違う、そんな教室だからこそ、私たちを選んでいただきたいです。
              学生だからこそ最新のトレンドを即座にビジネスモデルに組み込めます。学生だからこそ現代の生徒に寄り添える。つまり、顧客への寄り添い度が段違いです。
            </p>
            <img
              src="/images/vision-illustration.jpg"
              alt="Vision Illustration"
              className="mx-auto my-4 w-full sm:w-5/6 md:w-2/3 rounded-md shadow-lg object-cover"
            />
          </motion.section>

          {/* Team Section */}
          <motion.section
            custom={3}
            initial="hidden"
            whileInView="visible"
            variants={contentVariants}
            viewport={{ once: true }}
            className="bg-white bg-opacity-80 p-6 sm:p-8 lg:p-12 rounded-lg shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-4">私たちの強み</h2>
            <p className="leading-relaxed text-base sm:text-lg lg:text-xl mb-6 opacity-90 max-w-3xl">
              WEBサイトやシステム構築を自身で作成していること、学生という立場である今は大規模な利益を目的としてないこと、により低価格で学びの場が提供できています。
              学生ならではの挑戦的な精神を活かし、私たちはリスクを恐れず新しいビジネスモデルに挑戦しています。柔軟な発想と実行力で、常に最前線を走り続けます。
              私たちは、事業を通じて、マーケティング、財務、顧客対応など実践的なスキルを学びながら、成長しています。お金稼ぎのために行うアルバイト講師には再現できないサービスの成長を感じて頂けると思います。
              生徒の成長、まじLOVEです。お互いに成長していきましょう、ってマインド！！
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {/* ここに各講師のカードを挿入 */}
            </div>
          </motion.section>

          <motion.section
            custom={4}
            initial="hidden"
            whileInView="visible"
            variants={contentVariants}
            viewport={{ once: true }}
            className="bg-white bg-opacity-80 p-6 sm:p-8 lg:p-12 rounded-lg shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-4">指導形態について</h2>
            <p className="leading-relaxed text-base sm:text-lg lg:text-xl mb-6 opacity-90 max-w-3xl">
              経験のある学生講師とAIをフル活用の統計的な情報から、
              一人ひとりの苦手分野を分析・補強。情報のダブルチェックをし、最新情報に基づく指導で、目標達成を目指します。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            </div>
          </motion.section>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20 py-10">
        <SmallSection01 title="よくある質問" subtitle="LwithCへのよくある質問をまとめました。" moreText="もっと見る" moreLink="/faq"/>
        <SmallSection01 title="採用情報" subtitle="LwithCに力を貸していただけませんか？" moreText="もっと見る" moreLink="/recruit" /> 
    </div>
    </div>
  );
}

