import React from 'react';
import HomeImage from '../images/Home.jpg';

function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img 
        src={HomeImage} 
        alt="Home" 
        className="w-full h-full object-cover" 
      />
      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center top-36 ">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-700 text-center">
          Frond<span className="text-black">End</span> Store a Geo-wise online Store 
        </h1>
      </div>
    </div>
  );
}

export default Home;
