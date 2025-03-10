import React from 'react';
 
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the form below.</p>

      <h2>Contact Information</h2>
      <p>Email: Indira9@gmail.com</p>
      <p>Phone: +916 456 7890</p>
      <p>Address: 123 React Street, Web City, JS 45678</p>

      <h2>Send Us a Message</h2>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Your Name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" placeholder="Your Email" />
        </label>
        <br />
        <label>
          Subject:
          <input type="text" placeholder="Subject" />
        </label>
        <br />
        <label>
          Message:
          <textarea placeholder="Your Message"></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>Follow Us</h2>
      <p>
        Stay connected with us on social media:
        <ul>
          
          <li><a href="https://www.linkedin.com/in/karri-indira-4467801b3/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </p>
    </div>
  );
};
 
export default Contact;