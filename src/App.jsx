import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import ShipCard from './components/ship/ShipCard.jsx';
import Spinner from './components/spinner/Spinner.jsx';

function App() {
  return (
      <div>
        <Navbar />
        <Spinner />
        <ShipCard />
      </div>
  );
}

export default App;
