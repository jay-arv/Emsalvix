import React, { useState } from 'react';
import styles from './MatrixSection.module.css';

const industries = ['SMBs', 'Startups', 'Retail & Shops', 'Education', 'Healthcare', 'Corporate'];
const industryKeys = ['smb', 'startups', 'retail', 'education', 'healthcare', 'corporate'];

const matrixData = {
  smb: {
    web: 'High-conversion customer dashboards and inventory tracking systems designed specifically for growing SMB workflows.',
    net: 'Reliable multi-floor Wi-Fi coverage with guest isolation and dedicated secure staff channels.',
    email: 'Professional branded emails (e.g., info@yourbusiness.com) with robust spam and malware protection.',
  },
  startups: {
    web: 'Rapidly deployable MVPs, high-speed SaaS web applications, and scalable cloud architectures.',
    net: 'Cloud-managed secure networks supporting remote and hybrid engineering teams seamlessly.',
    email: 'Instant workspace provisioning with advanced anti-phishing and developer integration tools.',
  },
  retail: {
    web: 'E-commerce stores integrated seamlessly with local inventory POS systems and real-time analytics.',
    net: 'High-uptime customer Wi-Fi hotspots and secure transaction terminals for cashier desks.',
    email: 'Reliable storefront communications and automated customer support ticketing setups.',
  },
  education: {
    web: 'Student portals, online coaching dashboards, and secure course delivery management systems.',
    net: 'High-density campus Wi-Fi infrastructure built to handle thousands of concurrent student devices.',
    email: 'Bulk faculty and student account management with automated security compliance.',
  },
  healthcare: {
    web: 'HIPAA-compliant patient booking portals, appointment schedulers, and telehealth integrations.',
    net: 'Encrypted wireless and wired networks ensuring strict patient data privacy and zero downtime.',
    email: 'Encrypted corporate healthcare email systems ensuring complete regulatory compliance.',
  },
  corporate: {
    web: 'Enterprise-grade investor portals, secure intranet networks, and executive dashboards.',
    net: 'Redundant core routing, enterprise firewalls, and comprehensive multi-branch VPN setup.',
    email: 'Advanced enterprise email migration, archiving, and multi-factor authentication (MFA) enforcement.',
  },
};

const cards = [
  { key: 'web', icon: 'code', title: 'Custom Web Portal' },
  { key: 'net', icon: 'router', title: 'Office Networking' },
  { key: 'email', icon: 'alternate_email', title: 'Secure Domain & Mail' },
];

const MatrixSection = () => {
  const [activeIndustry, setActiveIndustry] = useState('smb');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSwitch = (key) => {
    if (key === activeIndustry) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndustry(key);
      setIsTransitioning(false);
    }, 200);
  };

  const data = matrixData[activeIndustry];

  return (
    <section className={styles.section} id="matrix">
      <div className={`container ${styles.inner}`}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <span className="section-label">Interactive Matrix</span>
          <h2 className={`headline-lg ${styles.sectionTitle}`}>
            Tailored solutions for your specific sector
          </h2>
          <p className={`body-lg ${styles.sectionDesc}`}>
            Select your industry below to see how our services adapt to your requirements.
          </p>
        </div>

        {/* Industry Chips */}
        <div className={styles.chips}>
          {industries.map((label, idx) => {
            const key = industryKeys[idx];
            return (
              <button
                key={key}
                className={`${styles.chip} ${activeIndustry === key ? styles.chipActive : ''}`}
                onClick={() => handleSwitch(key)}
                id={`matrix-chip-${key}`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className={`${styles.cards} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
          {cards.map(card => (
            <div key={card.key} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <span className="material-symbols-outlined" style={{ fontSize: '28px', color: 'var(--color-tertiary)' }}>
                    {card.icon}
                  </span>
                </div>
                <h3 className={`headline-sm ${styles.cardTitle}`}>{card.title}</h3>
              </div>
              <p className={`body-md ${styles.cardDesc}`}>{data[card.key]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatrixSection;
