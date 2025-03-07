import React from 'react';
import '../pages/NotFound.css'; // Create this CSS file if needed

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="return-home">Return to Home</a>
    </div>
  );
};

export default NotFound;