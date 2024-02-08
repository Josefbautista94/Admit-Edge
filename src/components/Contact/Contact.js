import React, { useState } from "react";
import "./Contact.css"; // Ensure the path is correct
import axios from 'axios';



const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/send-email', formData)
      .then(response => {
        console.log('Success:', response.data);
        // Handle success here, for example, showing a success message to the user
        alert('Message sent successfully!');
        // Optionally, clear the form
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here, for example, showing an error message to the user
        alert('Failed to send the message. Please try again.');
      });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required value={formData.message} onChange={handleChange}></textarea>

        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
};

export default Contact;