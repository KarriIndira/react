import React from 'react';
 
const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is a dynamic React application.</p>
      
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-card">
            <h3>Web Services</h3>
            <p>We offer full-stack web development services.</p>
          </div>
          <div className="service-card">
            <h3>AI Model Development</h3>
            <p>Creating state-of-the-art AI models tailored to your needs.</p>
          </div>
          <div className="service-card">
            <h3>Cyber Services</h3>
            <p>Protect your digital assets with our cybersecurity solutions.</p>
          </div>
        </div>
      </div>
      <div className="image-gallery">
        <img src="https://cdn.mos.cms.futurecdn.net/xCSAEp8DjjrT2UQB87AoFN.jpg" alt="Sample 1" />
        <img src="https://media.istockphoto.com/id/1486987406/photo/ai-technology-artificial-intelligence-let-artificial-intelligence-help-create-what-you-want.jpg?s=612x612&w=0&k=20&c=iHRb4qzTByEkvY-krowiYX0SxeYfFCQPIJKXKfGpFtw=" alt="Sample 2" />
        <img src="https://www.shutterstock.com/image-photo/cybersecurity-concept-user-privacy-security-600nw-2137304159.jpg" alt="Sample 3" />
      </div>
    </div>
  );
};
 
export default Home;
  