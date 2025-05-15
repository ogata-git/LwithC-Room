import NewsSection from '../components/NewsSection';
import { SmallSection01 } from '../components/SmallSection01';
import HeroSection from '../components/HeroSection';

function HomePage() {
  return (
    <div>
      
      <div className="biz-udpmincho-regular">
        <h1>LwithCへようこそ</h1>
        
      </div>
      {/* トップページ専用のレイアウトやコンテンツを書く */}
      <HeroSection />

      <NewsSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20 py-10">
        <SmallSection01 title="よくある質問" subtitle="LwithCへのよくある質問をまとめました。" moreText="もっと見る" moreLink="/faq"/>
        <SmallSection01 title="採用情報" subtitle="LwithCに力を貸していただけませんか？" moreText="もっと見る" moreLink="/recruit" /> 
      </div>

      
    </div>
  );
}

export default HomePage;