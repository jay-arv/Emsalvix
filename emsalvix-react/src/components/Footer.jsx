import React from 'react';
import styles from './Footer.module.css';

const footerLinks = {
  Services: ['Website Development', 'Network & Wi-Fi', 'Domain & Email', 'Cloud Infrastructure', 'Cybersecurity', 'Managed Support'],
  Industries: ['Small & Medium Businesses', 'Startups', 'Retail & Shops', 'Education', 'Healthcare', 'Corporate'],
  Company: ['About Us', 'Case Studies', 'Blog', 'Careers', 'Privacy Policy', 'Terms of Service'],
};

const socialLinks = [
  { icon: 'globe', label: 'Website', href: '#' },
  { icon: 'hub', label: 'LinkedIn', href: '#' },
  { icon: 'terminal', label: 'GitHub', href: '#' },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Top Row */}
        <div className={styles.topRow}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>EMSALVIX</a>
            <p className={`body-sm ${styles.tagline}`}>
              Enterprise IT Services &amp; Digital Infrastructure
            </p>
            <p className={`body-sm ${styles.brandDesc}`}>
              Delivering cutting-edge IT solutions with unbreakable uptime, military-grade security, and scalable cloud networks for businesses that demand excellence.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map(s => (
                <a key={s.label} href={s.href} className={styles.socialBtn} aria-label={s.label}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className={styles.linksGrid}>
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className={styles.linkGroup}>
                <h4 className={`label-md ${styles.groupTitle}`}>{group}</h4>
                <ul className={styles.linkList}>
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className={`body-sm ${styles.link}`}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Row */}
        <div className={styles.bottomRow}>
          <p className={`body-sm ${styles.copyright}`}>
            © {new Date().getFullYear()} EMSALVIX Inc. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
              <a key={link} href="#" className={`body-sm ${styles.bottomLink}`}>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
