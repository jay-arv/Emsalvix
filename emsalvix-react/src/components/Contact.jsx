import React, { useState } from 'react';
import styles from './Contact.module.css';

const industries = [
  { value: 'smb', label: 'Small & Medium Businesses' },
  { value: 'startups', label: 'Startups' },
  { value: 'retail', label: 'Retail & Shops' },
  { value: 'education', label: 'Education & Coaching Institutes' },
  { value: 'healthcare', label: 'Clinics & Healthcare Offices' },
  { value: 'corporate', label: 'Corporate & Professional Offices' },
];

const contactInfo = [
  { icon: 'mail', label: 'Email Us', value: 'support@emsalvix.com' },
  { icon: 'call', label: 'Call Us', value: '+1 (800) 555-EMSA' },
  { icon: 'schedule', label: 'Business Hours', value: 'Mon – Fri: 8:00 AM – 6:00 PM EST' },
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '', email: '', subject: '', industry: 'smb', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '771d65c9-d5f0-4d2e-9428-e4f9c38c6d2c';
    const industryLabel = industries.find(i => i.value === formState.industry)?.label || formState.industry;

    const payload = {
      access_key: accessKey,
      name: formState.name,
      email: formState.email,
      subject: formState.subject || 'New Enquiry from Emsalvix Website',
      industry: industryLabel,
      message: formState.message,
      from_name: 'Emsalvix Website',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', industry: 'smb', message: '' });
      } else {
        setError(result.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      setError('Unable to send enquiry due to a network error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={`container ${styles.inner}`}>
        {/* Left Column */}
        <div className={styles.leftCol}>
          <div className={styles.headerGroup}>
            <span className="section-label">Get in Touch</span>
            <h2 className={`headline-lg ${styles.title}`}>Let's Talk</h2>
            <p className={`body-md ${styles.desc}`}>
              Ready to elevate your IT infrastructure? Reach out to our specialists directly
              or submit your project details through the secure form.
            </p>
          </div>

          <div className={styles.infoList}>
            {contactInfo.map(item => (
              <div key={item.label} className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>{item.icon}</span>
                </div>
                <div>
                  <p className={`body-sm ${styles.infoLabel}`}>{item.label}</p>
                  <h4 className={`headline-sm ${styles.infoValue}`}>{item.value}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className={styles.trustBadges}>
            {['ISO 27001 Certified', 'SOC 2 Compliant', 'HIPAA Ready'].map(badge => (
              <div key={badge} className={styles.badge}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-tertiary)' }}>verified</span>
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Form */}
        <div className={styles.rightCol}>
          <div className={`glass-card ${styles.formCard}`}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--color-tertiary)' }}>check_circle</span>
                </div>
                <h3 className={`headline-md ${styles.successTitle}`}>Message Sent!</h3>
                <p className={`body-md ${styles.successDesc}`}>
                  Thank you! Our team will get back to you within 24 business hours.
                </p>
                <button
                  className="btn-secondary"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className={styles.form} id="contact-form" onSubmit={handleSubmit}>
                {error && (
                  <div className={styles.errorMessage}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>error</span>
                    <span>{error}</span>
                  </div>
                )}
                <div className={styles.formRow}>
                  <div className={styles.fieldGroup}>
                    <label className={`label-md ${styles.label}`} htmlFor="name">Name *</label>
                    <input
                      id="name"
                      type="text"
                      className={styles.input}
                      placeholder="John Doe"
                      required
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={`label-md ${styles.label}`} htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      className={styles.input}
                      placeholder="john@company.com"
                      required
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.fieldGroup}>
                    <label className={`label-md ${styles.label}`} htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      className={styles.input}
                      placeholder="Infrastructure Upgrade"
                      value={formState.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={`label-md ${styles.label}`} htmlFor="industry">Your Industry</label>
                    <select
                      id="industry"
                      className={styles.select}
                      value={formState.industry}
                      onChange={handleChange}
                    >
                      {industries.map(ind => (
                        <option key={ind.value} value={ind.value}>{ind.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label className={`label-md ${styles.label}`} htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    className={styles.textarea}
                    placeholder="Describe your IT requirements..."
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn-primary ${styles.submitBtn}`}
                  disabled={sending}
                  id="contact-submit-btn"
                >
                  {sending ? (
                    <>
                      <span className={styles.spinner}></span>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
