import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    id: 'web-dev',
    icon: 'code',
    title: 'Website Development',
    description: 'Custom, lightning-fast web applications and responsive corporate portals engineered for maximum conversion and reliability.',
    features: [
      'Modern Jamstack & SSR architecture',
      'SEO-optimized semantic codebase',
      'E-commerce & secure payment integration',
    ],
  },
  {
    id: 'network-wifi',
    icon: 'router',
    title: 'Network & Wi-Fi Setup',
    description: 'Robust, enterprise-grade wired and wireless network architecture designed for zero dropouts and military-grade security.',
    features: [
      'High-density Wi-Fi 6/7 deployment',
      'Secure VLAN configuration & firewalls',
      '24/7 uptime monitoring & diagnostics',
    ],
  },
  {
    id: 'domain-email',
    icon: 'alternate_email',
    title: 'Domain & Email Config',
    description: 'Professional domain management and corporate email infrastructure setup with advanced SPF, DKIM, and DMARC security.',
    features: [
      'Google Workspace & Microsoft 365 setup',
      'Advanced DNS management & migration',
      'Anti-phishing & spam filtering layers',
    ],
  },
  {
    id: 'cloud-infra',
    icon: 'cloud',
    title: 'Cloud Infrastructure',
    description: 'Scalable, resilient cloud architectures on AWS, Azure, and GCP tailored for high-availability enterprise workloads.',
    features: [
      'Multi-cloud strategy & deployment',
      'Auto-scaling & cost optimization',
      'Disaster recovery & backup systems',
    ],
  },
  {
    id: 'cybersecurity',
    icon: 'security',
    title: 'Cybersecurity',
    description: 'Comprehensive threat protection, vulnerability assessment, and compliance-grade security frameworks for critical data.',
    features: [
      'Penetration testing & audits',
      'Zero-trust network architecture',
      'SOC 2 & ISO 27001 compliance',
    ],
  },
  {
    id: 'managed-support',
    icon: 'support_agent',
    title: 'Managed IT Support',
    description: 'Dedicated 24/7 helpdesk, remote monitoring, and on-site support ensuring minimal downtime and maximum productivity.',
    features: [
      '24/7 helpdesk & remote support',
      'Proactive monitoring & alerts',
      'On-site response within 4 hours',
    ],
  },
];

const Services = () => {
  return (
    <section className={styles.section} id="services">
      <div className={`container ${styles.inner}`}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className="section-label">What We Do</span>
          <h2 className={`headline-lg ${styles.sectionTitle}`}>
            Expert IT solutions tailored for your business.
          </h2>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={styles.card}
              id={`service-${service.id}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={styles.cardContent}>
                {/* Icon */}
                <div className={styles.iconWrapper}>
                  <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
                    {service.icon}
                  </span>
                </div>

                {/* Text */}
                <h3 className={`headline-md ${styles.cardTitle}`}>{service.title}</h3>
                <p className={`body-md ${styles.cardDesc}`}>{service.description}</p>

                {/* Features */}
                <ul className={styles.featureList}>
                  {service.features.map(feat => (
                    <li key={feat} className={styles.featureItem}>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-tertiary)', flexShrink: 0 }}>check</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer CTA */}
              <div className={styles.cardFooter}>
                <a href="#contact" className={styles.learnMore}>
                  <span>Request Service</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
