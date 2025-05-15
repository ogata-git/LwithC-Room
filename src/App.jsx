import './index.css';
import './App.css';
import './styles/main.scss';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
{/** components import */}
import CommonParts from './components/common-parts';
import ScrollEffect from './components/ScrollEffect';
import BackgroundAnimation from './components/BackgroundAnimation';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ScrollToTop from './components/ScrollToTop';
import RequireAuth from './components/RequireAuth';
{/** pages import */}
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import NewsDetail from './pages/NewsDetail';
import NewsPostPage from './pages/NewsPostPage';
import FAQPage from './pages/FAQPage';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import StudentLife from './pages/StudentLife';
import Service from './pages/Service';
import NewsAdminLogin from './pages/NewsAdminLogin';

function App() {
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* お問い合わせモーダル */}
      <ContactModal isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
      <ScrollToTop />

      <BackgroundAnimation frontImage="/src/assets/images/logo_for_LwithC.png" />
      {/* ヘッダーと附属するボタンなど */}
      <CommonParts onContactOpen={() => setContactOpen(true)} />
      <ScrollEffect />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetail/>} />
        <Route path='/news-post' element={<RequireAuth><NewsPostPage /></RequireAuth>} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path='/aboutus' element={<AboutUs />}/>
        <Route path='/student-life' element={<StudentLife />} />
        <Route path='/service' element={<Service />}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
        <Route path="/news-admin-login" element={<NewsAdminLogin />} />
        
      </Routes>

      <Footer onContactOpen={() => setContactOpen(true)} />    

    </BrowserRouter>
  )
}

export default App;
