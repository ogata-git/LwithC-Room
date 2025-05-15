import '../styles/main.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CommonParts({ onContactOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const items = document.querySelectorAll('.menu-items li');
    if (menuOpen) {
      items.forEach((item, i) => setTimeout(() => item.classList.add('show'), i * 100));
    } else {
      items.forEach(item => item.classList.remove('show'));
    }
  }, [menuOpen]);

  useEffect(() => {
    const items = document.querySelectorAll('.menu-items li');
    items.forEach(item => item.addEventListener('click', closeMenu));
    return () => items.forEach(item => item.removeEventListener('click', closeMenu));
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenuOnOutsideClick = e => e.target.id === 'fullsc-menu' && setMenuOpen(false);

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('body-dark', darkMode);
  }, [darkMode]);

  return (
    <>
      <button
        className="reverse-button init-button"
        id="back-mode-button"
        onClick={() => setDarkMode(d => !d)}
      >
        {darkMode ? '☾' : '☼'}
      </button>

      {/* 二つ目のボタンにホバー時枠線アニメーションを追加 */}
      <button
        id="menu-tap"
        className="material-symbols-outlined p-2 transition-all duration-300 ease-in-out border border-transparent hover:border-green-500 rounded-md"
        onClick={toggleMenu}
      >
        {menuOpen ? '×' : '≡'}
      </button>

      <div
        id="fullsc-menu"
        className={menuOpen ? 'show' : ''}
        onClick={closeMenuOnOutsideClick}
      >
        <div id="menu-content" className={menuOpen ? 'active1' : ''}>
          <ul className="menu-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/student-life">How's Life Going?</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
            <li>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  closeMenu();
                  onContactOpen();
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CommonParts;
