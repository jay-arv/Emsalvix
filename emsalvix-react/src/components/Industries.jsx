import React from 'react';
import styles from './Industries.module.css';

const industries = [
  {
    id: 'smb',
    icon: 'storefront',
    title: 'Small & Medium Businesses',
    description: 'Scalable infrastructure tailored for lean teams looking for enterprise reliability.',
  },
  {
    id: 'startups',
    icon: 'rocket_launch',
    title: 'Startups',
    description: 'Rapidly deployable web applications and secure cloud setups for fast movers.',
  },
  {
    id: 'retail',
    icon: 'shopping_bag',
    title: 'Retail & Shops',
    description: 'Seamless POS Wi-Fi, inventory portals, and secure customer touchpoints.',
  },
  {
    id: 'education',
    icon: 'school',
    title: 'Education & Coaching',
    description: 'High-capacity campus Wi-Fi and online learning portals with flawless uptime.',
  },
  {
    id: 'healthcare',
    icon: 'local_hospital',
    title: 'Clinics & Healthcare',
    description: 'HIPAA-compliant secure networks, patient booking portals, and encrypted email.',
  },
  {
    id: 'corporate',
    icon: 'business_center',
    title: 'Corporate Offices',
    description: 'Comprehensive enterprise IT overhaul, managed domains, and dedicated support.',
  },
];

const Industries = () => {
  return (
    <section className={styles.section} id="fields">
      <div className={`container ${styles.inner}`}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <span className="section-label">Industries We Support</span>
          <h2 className={`headline-lg ${styles.sectionTitle}`}>
            IT solutions built around the way your industry works.
          </h2>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {industries.map((ind, idx) => (
            <div
              key={ind.id}
              className={styles.tile}
              id={`industry-${ind.id}`}
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className={styles.tileIcon}>
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
                  {ind.icon}
                </span>
              </div>
              <div className={styles.tileText}>
                <h3 className={`headline-sm ${styles.tileTitle}`}>{ind.title}</h3>
                <p className={`body-sm ${styles.tileDesc}`}>{ind.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
