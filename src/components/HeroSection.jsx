import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import image1 from '../assets/images/hero01.png';
import image2 from '../assets/images/hero02.png';
import image3 from '../assets/images/hero03.png';
import image4 from '../assets/images/hero04.png';

function ReasonsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-gradient-to-r from-blue-100/40 to-white/25">
      {/* タイトル */}
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-8 md:mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        LwithCを選ぶ理由
      </motion.h2>

      {/* セクション1 */}
      <motion.div
        className="relative bg-cover bg-center overflow-hidden rounded-lg shadow-xl hover:shadow-2xl mb-8 md:mb-12 p-4 md:p-6 lg:p-8 transition-all"
        style={{ backgroundImage: `url(${image1})` }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="absolute inset-0 " />
        <div className="relative z-10 flex flex-col items-center bg-white/80 p-4 md:p-6 lg:p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-3 md:mb-4">
            LwithCってどんなもの？
          </h3>
          <p className="text-lg md:text-lg lg:text-xl text-gray-800 mb-4 md:mb-6">
            大手教育機関では体験できないことを、LwithCで体験していただきたいです。
            まず、教育機関として信頼性が必要なことは私たち自身重々承知しています。
            私たちについて始めに知ってほしいです。
          </p>
          <Link
            to="/aboutus"
            className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            About Usへ
          </Link>
        </div>
      </motion.div>

      {/* セクション2 */}
      <motion.div
        className="relative bg-cover bg-center overflow-hidden rounded-lg shadow-xl hover:shadow-2xl mb-8 md:mb-12 p-4 md:p-6 lg:p-8 transition-all"
        style={{ backgroundImage: `url(${image2})` }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="absolute inset-0 " />
        <div className="relative z-10 flex flex-col items-center bg-white/80 p-4 md:p-6 lg:p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-3 md:mb-4">
            他にない柔軟なサービス
          </h3>
          <p className="text-lg md:text-lg lg:text-xl text-gray-800 mb-4 md:mb-6">
            お客様の仕事や学業との両立をサポートするために、完全自由で柔軟なサービスを提供しています。
            学習に関連した内容はもちろん、その他の多種多様な疑問や悩みについて。
            どんな時間にも、どんな場所でも相談ができる、そんなサービス。
          </p>
          <Link
            to="/service"
            className="bg-green-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md hover:bg-green-600 transition"
          >
            サービス詳細を見る
          </Link>
        </div>
      </motion.div>

      {/* セクション3 */}
      <motion.div
        className="relative bg-cover bg-center overflow-hidden rounded-lg shadow-xl hover:shadow-2xl mb-8 md:mb-12 p-4 md:p-6 lg:p-8 transition-all"
        style={{ backgroundImage: `url(${image3})` }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-90" />
        <div className="relative z-10 flex flex-col items-center bg-white/80 p-4 md:p-6 lg:p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-3 md:mb-4">
            生活を見てみよう
          </h3>
          <p className="text-lg md:text-lg lg:text-xl text-gray-800 mb-4 md:mb-6">
            実際に私たちのサービスを利用し始めたらどんな生活になるのか、カンタンに例を作成してみました。
            基本的には自分主体の生活を送ってもらいながら、それぞれのペースで学習を進めていただきます！
          </p>
          <Link
            to="/student-life"
            className="bg-gray-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md hover:bg-gray-800 transition"
          >
            詳細を見る
          </Link>
        </div>
      </motion.div>

      {/* セクション4 */}
      <motion.div
        className="relative bg-cover bg-center overflow-hidden rounded-lg shadow-xl hover:shadow-2xl mb-8 md:mb-12 p-4 md:p-6 lg:p-8 transition-all"
        style={{ backgroundImage: `url(${image4})` }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="absolute inset-0 " />
        <div className="relative z-10 flex flex-col items-center bg-white/80 p-4 md:p-6 lg:p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-3 md:mb-4">
            最新トレンドの活用
          </h3>
          <p className="text-lg md:text-lg lg:text-xl text-gray-800 mb-4 md:mb-6">
            ベンチャーだからこそサービスを常に変化させていける柔軟性と、最新情報を常にリサーチし、最適な学習に導きます！
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default ReasonsSection;
