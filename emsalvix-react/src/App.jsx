import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import MatrixSection from './components/MatrixSection';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Back to Top Button
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      id="back-to-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 40,
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-full)',
        background: 'var(--color-surface-container)',
        border: '1px solid rgba(70, 70, 77, 0.2)',
        color: 'var(--color-on-surface)',
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
        transition: 'background 0.2s, transform 0.2s',
        animation: 'fadeInUp 0.3s ease-out',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--color-surface-container-high)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--color-surface-container)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_upward</span>
    </button>
  );
};

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Industries />
        <MatrixSection />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
