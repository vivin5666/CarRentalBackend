import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        If you have any questions, concerns, or feedback, please feel free to
        contact us. We value your input and are here to assist you with any
        inquiries you may have.
      </p>
      <p>
        You can reach us via the contact form below, or through our customer
        service hotline. Our dedicated team is available from 9 AM to 5 PM,
        Monday to Friday. We strive to respond to all inquiries within 24 hours.
      </p>
      <h2>Our Office</h2>
      <p>
        <strong>Address:</strong><br />
        123 Vehicle Avenue,<br />
        Car City, Auto State, 12345
      </p>
      <p>
        <strong>Phone:</strong> (123) 456-7890
      </p>
      <p>
        <strong>Email:</strong> support@vehiclecompany.com
      </p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        
        <button type="submit">Submit</button>
      </form>
      <p>
        <strong>Follow Us:</strong><br />
        Stay connected with us through our social media channels for the latest
        updates and promotions.
      </p>
      <ul>
        <li><a href="https://facebook.com/vehiclecompany">Facebook</a></li>
        <li><a href="https://twitter.com/vehiclecompany">Twitter</a></li>
        <li><a href="https://instagram.com/vehiclecompany">Instagram</a></li>
        <li><a href="https://linkedin.com/company/vehiclecompany">LinkedIn</a></li>
      </ul>
    </div>
  );
};

export default Contact;
