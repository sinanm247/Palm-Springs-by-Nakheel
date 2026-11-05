import { Fragment, useEffect, useState } from 'react';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import HomePage from './Pages/HomePage';
import PopupForm from './Components/Common/PopupForm/PopupForm';
import ConsentPopup from './Components/Common/ConsentPopup/ConsentPopup';
import Chatbot from './Components/Common/Chatbot/Chatbot';
import Thankyou from './Components/ThankYouPage/Thankyou';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import { initHomePageScripts } from './Utils/scripts';

export default function App() {
  const [closePopup, setClosePopup] = useState(false);
  const [formAppear, setFormAppear] = useState(false);
  const location = useLocation();

  useEffect(() => { 
      const cleanup = initHomePageScripts();
      return cleanup;
  }, []);

  // Function to handle closing the popup - prevent future appearances
  const handleClose = () => {
    setClosePopup(true);
    setFormAppear(false);
    
    // Mark popup as closed and prevent future appearances
    localStorage.setItem('popupClosed', 'true');
    localStorage.setItem('popupDismissed', 'true');
  };

  // Function to handle form submission (stop all future popups)
  const handleSubmit = () => {
    setClosePopup(true);
    setFormAppear(false);
    localStorage.setItem('formSubmitted', 'true');
    localStorage.setItem('popupDismissed', 'true');
  };

  // Check localStorage and set initial popup
  useEffect(() => {
    const formSubmitted = localStorage.getItem('formSubmitted');
    
    if (location.pathname === '/thank-you' || formSubmitted === 'true') {
      setFormAppear(false);
    } else {
      const timer = setTimeout(() => {
        setFormAppear(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thank-you" element={<Thankyou />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
      {!closePopup && formAppear && location.pathname !== '/thank-you' &&
        <PopupForm handleClose={handleClose} handleSubmit={handleSubmit}/>
      }
      <ConsentPopup />
      {location.pathname !== '/thank-you' && <Chatbot />}
    </Fragment>
  );
}