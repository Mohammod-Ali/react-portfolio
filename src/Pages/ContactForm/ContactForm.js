import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_59tyy72', 'template_anezc8g', form.current, 'kNwztQYr4W2J63n7m')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
      <div className='py-20 bg-gray-800 '>
        <h1 className='text-4xl'>Contact Me:</h1>
          <form className='flex align-middle justify-center flex-col mx-24 my-16' ref={form} onSubmit={sendEmail}>
        <label className='text-white'>Name</label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="user_name" />
        <br />
        <label className='text-white'>Email</label>
        <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="user_email" />
        <br />
        <label className='text-white'>Message</label>
        <textarea className="textarea  textarea-primary" name="message" placeholder="Message"/>
        <input className='btn btn-outline text-white mt-5' type="submit" value="Send" />
      </form>
      </div>
    );
};

export default ContactForm;