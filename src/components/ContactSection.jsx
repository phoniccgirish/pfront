import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, CheckCircle2, AlertTriangle } from "lucide-react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: null,
  });

  // ✅ Load EmailJS credentials securely from .env
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: null });

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setStatus({
          loading: false,
          success: "✅ Message sent successfully!",
          error: null,
        });
        formRef.current.reset();
      },
      (error) => {
        console.error("❌ EmailJS error:", error.text || error);
        setStatus({
          loading: false,
          error: "Failed to send message. Please try again later.",
          success: null,
        });
      }
    );
  };

  return (
    <section
      id='contact'
      className='scroll-mt-20 pt-20 md:pt-32 bg-gray-50 min-h-screen transition-all duration-300'
    >
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-base font-semibold text-blue-600 uppercase tracking-wide'>
          Get In Touch
        </h2>
        <p className='mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl'>
          Contact Me
        </p>
        <p className='mt-4 text-lg text-gray-600'>
          Have a project idea, an opportunity, or just want to chat? Feel free
          to reach out.
        </p>
      </div>

      <div className='mt-12 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {/* Contact Info */}
        <div className='md:col-span-1 space-y-6 text-left'>
          <div className='flex items-start'>
            <Mail className='h-6 w-6 text-blue-600' />
            <div className='ml-3'>
              <h3 className='text-lg font-medium text-gray-900'>Email</h3>
              <p className='text-gray-600'>gy63862829@gmail.com</p>
            </div>
          </div>
          <div className='flex items-start'>
            <Phone className='h-6 w-6 text-blue-600' />
            <div className='ml-3'>
              <h3 className='text-lg font-medium text-gray-900'>Phone</h3>
              <p className='text-gray-600'>+91 9555098235</p>
            </div>
          </div>
          <div className='flex items-start'>
            <MapPin className='h-6 w-6 text-blue-600' />
            <div className='ml-3'>
              <h3 className='text-lg font-medium text-gray-900'>Location</h3>
              <p className='text-gray-600'>
                Gorakhpur, U.P. (Open to relocate)
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className='md:col-span-2 bg-white p-6 rounded-lg shadow-lg'>
          <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
            <input
              name='name'
              placeholder='Your Name'
              required
              className='w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500'
            />
            <input
              name='email'
              type='email'
              placeholder='Your Email'
              required
              className='w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500'
            />
            <textarea
              name='message'
              rows='4'
              placeholder='Your Message'
              required
              className='w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500'
            />
            <button
              type='submit'
              disabled={status.loading}
              className={`w-full bg-blue-600 text-white py-3 rounded-md font-medium transition-all ${
                status.loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {status.success && (
              <div className='flex items-center justify-center gap-2 bg-green-100 text-green-800 p-3 rounded-md animate-fade-in'>
                <CheckCircle2 className='w-5 h-5' />
                <span>{status.success}</span>
              </div>
            )}

            {/* Error Message */}
            {status.error && (
              <div className='flex items-center justify-center gap-2 bg-red-100 text-red-800 p-3 rounded-md animate-fade-in'>
                <AlertTriangle className='w-5 h-5' />
                <span>{status.error}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
