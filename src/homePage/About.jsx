import React from 'react';
import Header from './Header';

const About = () => {
  return (
    <>
    <Header/>
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
        <p className="text-lg text-center">
          Welcome to our website! We are a team dedicated to providing high-quality web solutions.
        </p>
      </div>
    </div>
    </>
  );
};

export default About