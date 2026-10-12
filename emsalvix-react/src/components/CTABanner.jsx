import React from 'react';
import styles from './CTABanner.module.css';

const CTABanner = () => {
  return (
    <section className={styles.section} id="cta-banner">
      <div className="container">
        <div className={styles.banner}>
          {/* Radial Highlight Overlay */}
          <div className={styles.overlay} aria-hidden="true"></div>

          {/* Floating Nodes */}
          <div className={styles.node1} aria-hidden="true"></div>
          <div className={styles.node2} aria-hidden="true"></div>

          <div className={styles.content}>
            <h2 className={`headline-lg ${styles.title}`}>
              Tell us your field. We'll build the right IT solution.
            </h2>
            <p className={`body-lg ${styles.desc}`}>
              Get in touch with our engineering team for a comprehensive infrastructure audit and customized quote.
            </p>
            <div className={styles.actions}>
              <a href="#contact" className={styles.btnWhite} id="cta-banner-btn">
                Get a Free Quote
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </a>
              <a href="#services" className={styles.btnGhost}>
                View Services
              </a>
            </div>
          </div>

          {/* Decorative Metrics */}
          <div className={styles.metrics}>
            {[
              { value: '99.9%', label: 'Uptime Guarantee' },
              { value: '<4h', label: 'Response Time' },
              { value: '500+', label: 'Projects Delivered' },
            ].map(m => (
              <div key={m.label} className={styles.metric}>
                <span className={styles.metricValue}>{m.value}</span>
                <span className={styles.metricLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
