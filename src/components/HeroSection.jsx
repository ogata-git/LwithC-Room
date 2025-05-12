import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="py-16 px-4 text-center bg-gray-100/75 from-blue-50 to-white">
      {/* スローガン群 */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1 className="text-2xl md:text-3xl font-bold text-gray-800" whileHover={{ scale: 1.05 }}>
          テストも、人生も、ひとりで悩まない学び方を。
        </motion.h1>
        <motion.h1 className="text-2xl md:text-3xl font-bold text-blue-700" whileHover={{ scale: 1.05 }}>
          “受かる力”と“生きる力”を同時に手に入れる。
        </motion.h1>
        <motion.h1 className="text-2xl md:text-3xl font-bold text-gray-600" whileHover={{ scale: 1.05 }}>
          点数じゃ測れない不安、受け止めます。
        </motion.h1>
      </motion.div>

      {/* 画像ギャラリー */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.img
          src="/images/study1.jpg"
          alt="生徒の学習風景1"
          className="w-72 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
        <motion.img
          src="/images/study2.jpg"
          alt="生徒の学習風景2"
          className="w-72 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
        <motion.img
          src="/images/study3.jpg"
          alt="生徒の学習風景3"
          className="w-72 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* サブページへのリンク */}
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link to="/aboutus" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">About Us</Link>
        <Link to="/student-life" className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition">生徒の一日</Link>
        <Link to="/service" className="bg-gray-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition">サービス紹介</Link>
      </motion.div>
    </section>
  );
}

export default HeroSection;
