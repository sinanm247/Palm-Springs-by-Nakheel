import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendContactFormEmail } from "../../../Utils/emailService";

import './PopupForm.scss';
import logo from "../../../Assets/Logo/Palm-Springs-Logo.png"
import image from "../../../Assets/Banner/Image-1.webp";
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { TextField, MenuItem } from '@mui/material';
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css";
import { toast } from 'react-toastify';
import { floorPlanOptions } from "../../../Utils/floorPlans";
import { POPUP_FORM_DISMISSED_EVENT, POPUP_FORM_OPENED_EVENT } from "../../../Utils/popupEvents";

function PopupForm({ handleClose, isBrochureDownload = false }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      message: '',
      service: '',
      configuration: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = {};

  useEffect(() => {
    window.dispatchEvent(new CustomEvent(POPUP_FORM_OPENED_EVENT));
  }, []);

  const dismissPopup = () => {
    if (isLoading || submitted) return;
    window.dispatchEvent(new CustomEvent(POPUP_FORM_DISMISSED_EVENT));
    handleClose();
  };

  const validateErrors = () => {
      if (formData?.name?.trim()?.length === 0) errors.name = "Name is Required";
      if (formData?.phone?.trim()?.length === 0) errors.phone = "Phone No is Required";
      if (formData?.email?.trim()?.length === 0) errors.email = "Email is Required";
      if (formData?.message?.trim()?.length === 0) errors.message = "Message is Required";
  };

  const handleUpdate = (field) => (event) => {
      const inputValue = event.target.value;
      setFormData((prev) => ({ ...prev, [field]: inputValue }));
  };

  const handleSendEmail = async (formData) => {
      try {
          setIsLoading(true);
          setResponse("");
          
          // Add source to formData for Google Sheets
          const formDataWithSource = {
              ...formData,
              source: "Popup Form"
          };
          
          const result = await sendContactFormEmail(formDataWithSource);
          
          if (result.success) {
              const successMessage = isBrochureDownload
                ? "Thank you. We'll send the brochure and plans as soon as Nakheel confirms them."
                : "Thank you. We'll be in touch shortly.";
              setResponse(successMessage);
              setSubmitted(true);
              setFormErrors({});
              localStorage.setItem("formSubmitted", "true");
              localStorage.setItem("popupDismissed", "true");

              setTimeout(() => {
                handleClose();
                navigate("/thank-you");
              }, 1600);
          } else {
              setResponse("We couldn't save your details. Please try again.");
          }
      } catch (error) {
          console.error("Email sending error:", error);
          setResponse("Failed to send email. Please try again.");
          toast.error("Failed to send email. Please try again.");
      } finally {
          setIsLoading(false);
      }
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();
      validateErrors();

      if (Object.keys(errors).length === 0) {
          setFormErrors({});
          handleSendEmail(formData);
          // downloadBrochure();
          // handleClose();
          // navigate("/thank-you");
          // toast.success("Thank you! Your brochure is downloading...");
      } else {
          console.log(errors);
          setFormErrors(errors);
      }
  };

  return (
    <AnimatePresence>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="popup-modal-overlay"
      onClick={dismissPopup}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="popup-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="closeButton" onClick={dismissPopup}>
          <IoClose />
        </button>

        {/* Background Image */}
        <div className="popup-background">
          <img src={image} alt="Palm Springs by Nakheel" />
          <div className="background-overlay"></div>
        </div>

        {/* Content */}
        <div className="popup-content">
          <div className="popup-header">
            <img src={logo} alt="Palm Springs" className="popup-logo" />
            <h1 className="popup-title">
              {isBrochureDownload ? "BROCHURE & PLANS" : "REGISTER YOUR INTEREST"}
            </h1>
            <p className="popup-subtitle">
              {isBrochureDownload 
                ? "Share your details and we'll send the brochure, floor plans and pricing as soon as Nakheel confirms them." 
                : "Townhouses and villas at Palm Springs by Nakheel, 17 minutes from Palm Jebel Ali."}
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="popup-form">
            <TextField 
              label="Name" 
              variant="outlined" 
              value={formData.name} 
              onChange={handleUpdate('name')} 
              fullWidth 
              className="form-field" 
              required 
              disabled={isLoading || submitted}
            />
            {formErrors.name && <div className="error-message">{formErrors.name}</div>}

            <PhoneInput
              country={"ae"}
              value={formData.phone}
              disabled={isLoading || submitted}
              onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
              inputProps={{
                name: "phone",
                required: true,
              }}
              inputStyle={{
                width: "100%",
                height: "56px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "20px",
                paddingLeft: "50px",
                fontSize: "16px",
                fontFamily: '"GT-Ultra", sans-serif',
                background: "transparent",
                color: "white",
                transition: "all 0.3s ease",
              }}
              buttonStyle={{
                border: "none",
                borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "20px 0 0 20px",
                backgroundColor: "transparent",
              }}
              containerStyle={{
                width: "100%",
              }}
              dropdownStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                color: "white",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
              searchStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            />
            {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}

            <TextField 
              label="Email" 
              variant="outlined" 
              value={formData.email} 
              onChange={handleUpdate('email')} 
              fullWidth 
              className="form-field" 
              required 
              disabled={isLoading || submitted}
            />
            {formErrors.email && <div className="error-message">{formErrors.email}</div>}

            <TextField 
              select 
              label="Configuration" 
              variant="outlined" 
              value={formData.configuration} 
              onChange={handleUpdate('configuration')} 
              fullWidth 
              className="form-field"
              disabled={isLoading || submitted}
            >
              {floorPlanOptions.map((plan) => (
                <MenuItem key={plan} value={plan}>
                  {plan}
                </MenuItem>
              ))}
            </TextField>
            {formErrors.configuration && <div className="error-message">{formErrors.configuration}</div>}

            <TextField 
              label="Message" 
              variant="outlined" 
              multiline 
              rows={2} 
              value={formData.message} 
              onChange={handleUpdate('message')} 
              fullWidth 
              className="form-field" 
              required 
              disabled={isLoading || submitted}
            />
            {formErrors.message && <div className="error-message">{formErrors.message}</div>}

            <button type="submit" className="btn btn-glass" disabled={isLoading || submitted}>
              {isLoading ? "Sending..." : submitted ? "Sent" : (isBrochureDownload ? "Request brochure" : "Register your interest")}
            </button>
            {response && (
                <div className={`response-message ${submitted ? "success" : "error"}`}>
                    {response}
                </div>
            )}
          </form>
        </div>
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
}

export default PopupForm;
