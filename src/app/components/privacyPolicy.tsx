import React from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer'; 
const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <Header />
      <iframe
        src="/privacy-policy.html"
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Privacy Policy"
      ></iframe>
      <Footer />
    </div>
  );
};
export default PrivacyPolicy;