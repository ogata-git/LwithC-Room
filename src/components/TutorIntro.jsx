import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUniversity,
  FaHome,
  FaFileAlt,
  FaPlane,
} from 'react-icons/fa';


function TutorIntro() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="border border-gray-200 rounded-lg p-8 bg-white/75">
        {/* 上部キャッチコピー */}
        <h2 className="text-base font-medium text-gray-700">
          <span className="text-red-600 font-bold">オンライン</span>
          だから近くの先生だけでなく
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 my-4">
          <span className="text-red-600 dotgothic16-regular">多様な</span>専門指導が受けられます
        </h1>
        <p className="text-center text-gray-500 mb-8">紹介できる先生の例</p>

        {/* 4つの例：スマホは1列、PCは2列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1 */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-start">
              <FaUniversity className="text-3xl text-gray-600 flex-shrink-0 mr-4" />
              <p className="text-gray-700 text-md md:text-xl">
                <span className="font-semibold highlight-half">現役</span>の大学生に
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-start">
              <FaHome className="text-3xl text-gray-600 flex-shrink-0 mr-4" />
              <div>
                <p className="text-gray-700 mb-2 text-md md:text-xl">
                  <span className="font-semibold highlight-half ">不登校</span>への指導経験が豊富
                </p>
                <Link
                  to="/futoukou-support"
                  className="inline-block border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full px-4 py-2 transition"
                >
                  不登校サポートコース &gt;
                </Link>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-start">
              <FaFileAlt className="text-3xl text-gray-600 flex-shrink-0 mr-4" />
              <p className="text-gray-700 text-md md:text-xl">
                <span className="font-semibold highlight-half">総合型/推薦入試</span>での合格・指導実績がある
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-start">
              <FaPlane className="text-3xl text-gray-600 flex-shrink-0 mr-4" />
              <div>
                <p className="text-gray-700 mb-2 text-md md:text-xl">短期・長期の
                  <span className="font-semibold highlight-half">留学</span>経験がある
                </p>
                <Link
                  to="/ryugaku-support"
                  className="inline-block border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full px-4 py-2 transition"
                >
                  留学サポートコース &gt;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 全体の区切り線 */}
        <hr className="border-t border-gray-200 my-8" />

        {/* 下部紹介文 */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
          <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 md:mb-0">
            他にもこんな先生をご紹介できます
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>数学を楽しく指導できる先生</li>
            <li>外国語大出身の先生</li>
            <li>褒め上手タイプ、鬼指導タイプの先生</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TutorIntro;
