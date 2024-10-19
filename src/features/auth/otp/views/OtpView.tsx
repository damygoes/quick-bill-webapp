import { useEffect, useState } from 'react';
import OtpForm from '../components/OtpForm';

const OtpView = () => {
  const [tempUserEmail, setTempUserEmail] = useState('unknown-email');

  useEffect(() => {
    const storageEmail = localStorage.getItem('quickbill_temp-email');
    if (storageEmail) {
      setTempUserEmail(storageEmail);
    }
  }, []);

  console.log('tempUserEmail', tempUserEmail);

  return (
    <section className="flex flex-col items-center justify-center h-full lg:flex-row">
      <div className="flex items-center justify-center w-full h-full">
        <OtpForm tempUserEmail={tempUserEmail} />
      </div>
      <div className="hidden w-full lg:flex lg:items-center lg:justify-center bg-background">
        <img
          src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFzc3dvcmR8ZW58MHx8MHx8fDI%3D"
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </section>
  );
};

export default OtpView;
