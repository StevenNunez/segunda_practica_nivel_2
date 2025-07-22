import React from 'react';

function Footer() {
  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto px-6 text-center">
        <p className=" font-semibold text-white text-sm">created by Steven</p>
      </div>
    </footer>
  );
}

export default Footer;


function App() {
  const my_secret = "Api_key"
  return (
   
      <div >
        <h1>Variable de entorno: </h1>
        <p>{my_secret}</p>
      </div>
    
  );
}

export default Footer;