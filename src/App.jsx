import './index.css';
import './App.css';
import './styles/main.scss';
import React, { useState } from 'react';
import CommonParts from './components/common-parts';
import ScrollEffect from './components/ScrollEffect';
import Footer from './components/Footer';
import { SmallSection01 } from './components/SmallSection01';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
{/*import NewsSection from './components/NewsSection';*/}
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import NewsDetail from './pages/NewsDetail';
import NewsPostPage from './pages/NewsPostPage';
import BackgroundAnimation from './components/BackgroundAnimation';
import FAQPage from './pages/FAQPage';
import AboutUs from './pages/AboutUs';
import ContactModal from './components/ContactModal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import StudentLife from './pages/StudentLife';
import Service from './pages/Service';

function App() {
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <Router>
      {/* お問い合わせモーダル */}
      <ContactModal isOpen={isContactOpen} onClose={() => setContactOpen(false)} />

      <BackgroundAnimation frontImage="/src/assets/images/logo_for_LwithC.png" />
      <div>
      <CommonParts onContactOpen={() => setContactOpen(true)} />
      </div>
      <div>
        <ScrollEffect />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetail/>} />
        <Route path='/news-post' element={<NewsPostPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path='/aboutus' element={<AboutUs />}/>
        <Route path='/student-life' element={<StudentLife />} />
        <Route path='/service' element={<Service />}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy />}/>

      </Routes>

      
      <Footer onContactOpen={() => setContactOpen(true)} />    </Router>
  )
}

export default App;
