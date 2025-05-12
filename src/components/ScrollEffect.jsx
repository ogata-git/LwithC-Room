import { useEffect, useRef } from 'react';
import '../App.jsx';
import '../styles/main.scss';

function ScrollEffect() {
    const companyRef = useRef(null);
    const headerRef = useRef(null);
    {/*const typingRef = useRef(null);
    const galleryRef = useRef(null);
    const subtitleRef = useRef(null);*/}

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const headerHeight = headerRef.current?.offsetHeight || 0;
          if (companyRef.current && scrollY > headerHeight) {
            companyRef.current.classList.add('scrolled');
        } else {
            companyRef.current?.classList.remove('scrolled');
        }
    }
        window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


return (
    <>
      <header id='header' ref={headerRef}>
        <h1 id="company" ref={companyRef} className="kaisei-decol-regular" style={{ letterSpacing: '3px', zIndex: 50 }}>
          LwithC Room
        </h1>
      </header>
    </>
);}

export default ScrollEffect;