import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      {/* Animated Background Grid */}
      <div className={styles.bgGrid} aria-hidden="true">
        <div className={styles.gridDots}></div>
        <svg className={styles.networkLines} xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#bfc5e4" strokeWidth="0.5">
            <circle className="animate-pulse" cx="15%" cy="20%" fill="#2fd9f4" r="3" />
            <circle className="animate-ping" cx="85%" cy="30%" fill="#2fd9f4" r="3" />
            <circle cx="70%" cy="80%" fill="#b5c4ff" r="3" />
            <path className={styles.networkPath} d="M 15% 20% L 40% 45% L 85% 30%" />
            <path className={styles.networkPath} d="M 40% 45% L 70% 80%" />
          </g>
        </svg>
      </div>

      {/* Ambient Glow */}
      <div className={styles.ambientGlow} aria-hidden="true"></div>

      <div className={`container ${styles.content}`}>
        {/* Left Column */}
        <div className={styles.leftCol}>
          <div className={styles.badge}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-tertiary)' }}>bolt</span>
            Enterprise IT Infrastructure &amp; Support
          </div>

          <h1 className={`headline-xl ${styles.headline}`}>
            Crafting Seamless IT Solutions for Your Business
          </h1>

          <p className={`body-lg ${styles.subheadline}`}>
            Delivering expert IT services tailored to empower your growth with unbreakable uptime,
            cutting-edge security, and scalable cloud networks.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#services" className="btn-primary" id="hero-explore-btn">
              Explore Services
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </a>
            <a href="#contact" className="btn-secondary" id="hero-contact-btn">
              Contact Us
            </a>
          </div>

          {/* Stats Bar */}
          <div className={styles.statsBar}>
            {[
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '500+', label: 'Clients Served' },
              { value: '24/7', label: 'Support' },
            ].map(stat => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={`label-sm ${styles.statLabel}`}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Glass Card */}
        <div className={styles.rightCol}>
          <div className={styles.glowBlob} aria-hidden="true"></div>
          <div className={`glass-card ${styles.coreCard}`}>
            <div className={styles.cardHeader}>
              <span className={`headline-sm ${styles.cardTitle}`}>Core Infrastructure</span>
              <span className={styles.liveTag}>
                <span className={styles.liveIndicator}></span>
                Live System
              </span>
            </div>

            {[
              { icon: 'code', title: 'Website Development', desc: 'High-performance digital presence' },
              { icon: 'router', title: 'Network & Wi-Fi Setup', desc: 'Enterprise-grade connectivity' },
              { icon: 'alternate_email', title: 'Domain & Email Config', desc: 'Secure corporate identity' },
              { icon: 'cloud', title: 'Cloud Infrastructure', desc: 'Scalable & resilient cloud' },
            ].map(item => (
              <div key={item.title} className={styles.serviceItem}>
                <div className={styles.serviceIcon}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>{item.icon}</span>
                </div>
                <div>
                  <h4 className={`label-md ${styles.serviceItemTitle}`}>{item.title}</h4>
                  <p className={`body-sm ${styles.serviceItemDesc}`}>{item.desc}</p>
                </div>
                <span className={styles.serviceStatus}></span>
              </div>
            ))}

            {/* Scroll hint */}
            <div className={styles.scrollHint} aria-hidden="true">
              <div className={styles.scrollMouse}>
                <div className="animate-bounce" style={{
                  width: '6px', height: '12px',
                  background: 'var(--color-tertiary)',
                  borderRadius: 'var(--radius-full)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
