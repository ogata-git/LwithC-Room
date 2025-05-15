import React, { useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import '../styles/main.scss';
import logo from '../assets/images/lwithc3.png';

function Footer({ onContactOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const controls = useAnimation();

  // ルート変更時にアニメーション状態をリセット
  useEffect(() => {
    controls.set({ opacity: 1, scale: 1, rotateX: 0 });
  }, [location.pathname, controls]);

  const handleLogoClick = async () => {
    try {
      // 透明化 & 画面全体を覆う大きさのズーム・回転演出
      await controls.start({
        opacity: 0,
        scale: 20,
        rotateX: 20,
        transition: { duration: 0.8, ease: 'easeInOut' }
      });
      navigate('/');
    } catch (err) {
      console.error(err);
      navigate('/');
    }
  };

  return (
    <footer className="bg-gray-800/85 text-white py-4 md:py-6 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">

          {/* ホバーで浮き上がり、クリックで大スケール・3Dズーム後トップへ */}
          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <motion.img
              src={logo}
              alt="LwithC Room Logo"
              title="トップページに戻る"
              className="h-12 md:h-14 lg:h-18 w-auto shadow-md shadow-black/15 cursor-pointer origin-center"
              initial={{ opacity: 1, scale: 1, rotateX: 0 }}
              animate={controls}
              whileHover={{ scale: 1.05, y: -3 }}
              onClick={handleLogoClick}
            />
          </div>

          {/* SNS アイコン */}
          <div className="flex justify-center md:justify-end space-x-4 mb-4 md:mb-0">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-xl hover:text-pink-400">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://line.me" target="_blank" rel="noreferrer" className="text-xl hover:text-green-200">
              <i className="fa-brands fa-line"></i>
            </a>
            <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer" className="text-xl hover:text-green-400">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-400">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* リンク群 */}
        <div className="flex flex-col md:flex-row md:justify-between mt-4 md:mt-6 gap-6">
          <div className="flex flex-col md:w-1/2">
            <Link
              to="#"
              className="text-link-1 text-sm md:text-base mb-2 hover:text-gray-400"
              onClick={e => { e.preventDefault(); onContactOpen(); }}
            >
              Contact
            </Link>
            <Link to="#" className="text-link-1 text-sm md:text-base mb-2 hover:text-gray-400">
              テキスト
            </Link>
            <Link to="/student-life" className="text-link-1 text-sm md:text-base hover:text-gray-400">
              Life with LwithC
            </Link>
          </div>

          <div className="flex flex-col md:w-1/2">
            <Link to="/service" className="text-link-1 text-sm md:text-base mb-2 hover:text-gray-400">
              Service
            </Link>
            <Link to="/aboutus" className="text-link-1 text-sm md:text-base mb-2 hover:text-gray-400">
              About Us
            </Link>
            <Link to="/privacy-policy" className="text-link-1 text-sm md:text-base hover:text-gray-400">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs md:text-sm">&copy; 2025 LwithC Room</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
